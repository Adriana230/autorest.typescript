// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OperationArguments,
  OperationSpec,
  OperationResponseMap,
  FullOperationResponse
} from "@azure/core-client";
import {
  LroResourceLocationConfig,
  GetLroStatusFromResponse,
  LongRunningOperation,
  LroConfig,
  LroMode,
  LroResponse,
  LroStatus,
  createGetLroStatusFromResponse,
  RawResponse
} from "./lro";

export const successStates = ["succeeded"];
export const failureStates = ["failed", "canceled", "cancelled"];
export const terminalStates = successStates.concat(failureStates);

export type SendOperationFn<T> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<LroResponse<T>>;

export function createPollingMethod<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  GetLroStatusFromResponse: GetLroStatusFromResponse<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  mode?: LroMode
): (path?: string) => Promise<LroStatus<TResult>> {
  /**
   * Polling calls will always return a status object i.e. {"status": "success"}
   * these intermediate responses are not described in the swagger so we need to
   * pass custom mappers at runtime.
   * This function replaces all the existing mappers to be able to deserialize a status object
   * @param responses Original set of responses defined in the operation
   */
  function getCompositeMappers(responses: {
    [responseCode: string]: OperationResponseMap;
  }): {
    [responseCode: string]: OperationResponseMap;
  } {
    return Object.keys(responses).reduce((acc, statusCode) => {
      return {
        ...acc,
        [statusCode]: {
          ...responses[statusCode],
          bodyMapper: {
            type: {
              name: "Composite",
              modelProperties: {
                status: {
                  serializedName: "status",
                  type: {
                    name: "String"
                  }
                }
              }
            }
          }
        }
      };
    }, {} as { [responseCode: string]: OperationResponseMap });
  }
  let response: LroStatus<TResult> | undefined = undefined;
  const customerCallback = args?.options?.onResponse;
  const updatedArgs = {
    ...args,
    options: {
      ...args.options,
      onResponse: (
        rawResponse: FullOperationResponse,
        flatResponse: unknown
      ): void => {
        response = GetLroStatusFromResponse(
          {
            statusCode: rawResponse.status,
            body: rawResponse.parsedBody,
            headers: rawResponse.headers.toJSON()
          },
          flatResponse as TResult
        );
        if (response.done) {
          customerCallback?.(rawResponse, flatResponse);
        }
      }
    }
  };
  // Make sure we don't send any body to the get request
  const { requestBody, responses, ...restSpec } = spec;
  if (mode === "AzureAsync") {
    return async (path?: string) => {
      await sendOperationFn(updatedArgs, {
        ...restSpec,
        responses: getCompositeMappers(responses),
        httpMethod: "GET",
        ...(path && { path })
      });
      return response!;
    };
  }
  return async (path?: string) => {
    await sendOperationFn(updatedArgs, {
      ...restSpec,
      responses: responses,
      httpMethod: "GET",
      ...(path && { path })
    });
    return response!;
  };
}

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final Lro response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLro(lroResourceLocationConfig?: string) {
  let initialOperationInfo: LroResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: FullOperationResponse) => {
    if (response.status < 200 || response.status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLroData(response);
    } else {
      isInitialRequest = false;
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(
          response,
          initialOperationInfo,
          lroResourceLocationConfig
        )
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: FullOperationResponse,
  initialOperationInfo: LroResponseInfo,
  lroResourceLocationConfig?: string
): boolean {
  const status: string = response.parsedBody?.status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    lroResourceLocationConfig &&
    lroResourceLocationConfig.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (
    initialOperationInfo.requestMethod !== "PUT" &&
    !initialOperationInfo.location
  ) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: FullOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: FullOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody?.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LroResponseInfo {
  requestMethod: string;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLroData(result: FullOperationResponse): LroResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

export function getSpecPath(spec: OperationSpec): string {
  if (spec.path) {
    return spec.path;
  } else {
    throw Error("Bad spec: request path is not found!");
  }
}

export class CoreClientLro<T> implements LongRunningOperation<T> {
  constructor(
    private sendOperationFn: SendOperationFn<T>,
    private args: OperationArguments,
    private spec: OperationSpec,
    private lroResourceLocationConfig?: LroResourceLocationConfig,
    public requestPath: string = spec.path!,
    public requestMethod: string = spec.httpMethod
  ) {}
  public async sendInitialRequest(
    initializeState: (
      rawResponse: RawResponse,
      flatResponse: unknown
    ) => boolean
  ): Promise<LroResponse<T>> {
    const { onResponse, ...restOptions } = this.args.options || {};
    return this.sendOperationFn(
      {
        ...this.args,
        options: {
          ...restOptions,
          onResponse: (
            rawResponse: FullOperationResponse,
            flatResponse: unknown
          ) => {
            const isCompleted = initializeState(
              {
                statusCode: rawResponse.status,
                body: rawResponse.parsedBody,
                headers: rawResponse.headers.toJSON()
              },
              flatResponse
            );
            if (isCompleted) {
              onResponse?.(rawResponse, flatResponse);
            }
          }
        }
      },
      this.spec
    );
  }

  public async sendPollRequest(
    config: LroConfig,
    path: string
  ): Promise<LroStatus<T>> {
    const getLroStatusFromResponse = createGetLroStatusFromResponse(
      this,
      config,
      this.lroResourceLocationConfig
    );
    return createPollingMethod(
      this.sendOperationFn,
      getLroStatusFromResponse,
      this.args,
      this.spec,
      config.mode
    )(path);
  }

  public async retrieveAzureAsyncResource(
    path?: string
  ): Promise<LroResponse<T>> {
    const updatedArgs = { ...this.args };
    if (updatedArgs.options) {
      (updatedArgs.options as any).shouldDeserialize = true;
    }
    return createPollingMethod(
      this.sendOperationFn,
      (rawResponse, flatResponse) => ({
        rawResponse,
        flatResponse,
        done: true
      }),
      updatedArgs,
      this.spec
    )(path);
  }
}
