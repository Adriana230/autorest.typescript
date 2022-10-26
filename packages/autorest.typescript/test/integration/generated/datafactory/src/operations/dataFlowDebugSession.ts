import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataFlowDebugSession } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DataFlowDebugSessionInfo,
  DataFlowDebugSessionQueryByFactoryNextOptionalParams,
  DataFlowDebugSessionQueryByFactoryOptionalParams,
  DataFlowDebugSessionQueryByFactoryResponse,
  CreateDataFlowDebugSessionRequest,
  DataFlowDebugSessionCreateOptionalParams,
  DataFlowDebugSessionCreateResponse,
  DataFlowDebugPackage,
  DataFlowDebugSessionAddDataFlowOptionalParams,
  DataFlowDebugSessionAddDataFlowResponse,
  DeleteDataFlowDebugSessionRequest,
  DataFlowDebugSessionDeleteOptionalParams,
  DataFlowDebugCommandRequest,
  DataFlowDebugSessionExecuteCommandOptionalParams,
  DataFlowDebugSessionExecuteCommandResponse,
  DataFlowDebugSessionQueryByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataFlowDebugSession operations. */
export class DataFlowDebugSessionImpl implements DataFlowDebugSession {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class DataFlowDebugSession class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Query all active data flow debug sessions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listQueryByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowDebugSessionQueryByFactoryOptionalParams
  ): PagedAsyncIterableIterator<DataFlowDebugSessionInfo> {
    const iter = this.queryByFactoryPagingAll(
      resourceGroupName,
      factoryName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.queryByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options,
          settings
        );
      }
    };
  }

  private async *queryByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowDebugSessionQueryByFactoryOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataFlowDebugSessionInfo[]> {
    let result: DataFlowDebugSessionQueryByFactoryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._queryByFactory(
        resourceGroupName,
        factoryName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._queryByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *queryByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowDebugSessionQueryByFactoryOptionalParams
  ): AsyncIterableIterator<DataFlowDebugSessionInfo> {
    for await (const page of this.queryByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    factoryName: string,
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DataFlowDebugSessionCreateResponse>,
      DataFlowDebugSessionCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataFlowDebugSessionCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, factoryName, request, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    factoryName: string,
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateOptionalParams
  ): Promise<DataFlowDebugSessionCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      factoryName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Query all active data flow debug sessions.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowDebugSessionQueryByFactoryOptionalParams
  ): Promise<DataFlowDebugSessionQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      queryByFactoryOperationSpec
    );
  }

  /**
   * Add a data flow into debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition with debug content.
   * @param options The options parameters.
   */
  addDataFlow(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugPackage,
    options?: DataFlowDebugSessionAddDataFlowOptionalParams
  ): Promise<DataFlowDebugSessionAddDataFlowResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, request, options },
      addDataFlowOperationSpec
    );
  }

  /**
   * Deletes a data flow debug session.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug session definition for deletion
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    request: DeleteDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, request, options },
      deleteOperationSpec
    );
  }

  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param options The options parameters.
   */
  async beginExecuteCommand(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DataFlowDebugSessionExecuteCommandResponse>,
      DataFlowDebugSessionExecuteCommandResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataFlowDebugSessionExecuteCommandResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, factoryName, request, options },
      executeCommandOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a data flow debug command.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param request Data flow debug command definition.
   * @param options The options parameters.
   */
  async beginExecuteCommandAndWait(
    resourceGroupName: string,
    factoryName: string,
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams
  ): Promise<DataFlowDebugSessionExecuteCommandResponse> {
    const poller = await this.beginExecuteCommand(
      resourceGroupName,
      factoryName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * QueryByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the QueryByFactory method.
   * @param options The options parameters.
   */
  private _queryByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: DataFlowDebugSessionQueryByFactoryNextOptionalParams
  ): Promise<DataFlowDebugSessionQueryByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      queryByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/createDataFlowDebugSession",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse
    },
    201: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse
    },
    202: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse
    },
    204: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const queryByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryDataFlowDebugSessions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addDataFlowOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/addDataFlowToDebugSession",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddDataFlowToDebugSessionResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/deleteDataFlowDebugSession",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const executeCommandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/executeDataFlowDebugCommand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse
    },
    201: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse
    },
    202: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse
    },
    204: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const queryByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
