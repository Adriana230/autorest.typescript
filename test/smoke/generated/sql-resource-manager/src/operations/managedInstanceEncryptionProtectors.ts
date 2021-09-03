/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedInstanceEncryptionProtectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagedInstanceEncryptionProtector,
  ManagedInstanceEncryptionProtectorsListByInstanceNextOptionalParams,
  ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams,
  EncryptionProtectorName,
  ManagedInstanceEncryptionProtectorsRevalidateOptionalParams,
  ManagedInstanceEncryptionProtectorsListByInstanceResponse,
  ManagedInstanceEncryptionProtectorsGetOptionalParams,
  ManagedInstanceEncryptionProtectorsGetResponse,
  ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams,
  ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse,
  ManagedInstanceEncryptionProtectorsListByInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedInstanceEncryptionProtectors operations. */
export class ManagedInstanceEncryptionProtectorsImpl
  implements ManagedInstanceEncryptionProtectors {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ManagedInstanceEncryptionProtectors class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed instance encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceEncryptionProtector> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options
        );
      }
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams
  ): AsyncIterableIterator<ManagedInstanceEncryptionProtector[]> {
    let result = await this._listByInstance(
      resourceGroupName,
      managedInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams
  ): AsyncIterableIterator<ManagedInstanceEncryptionProtector> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  async beginRevalidate(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: ManagedInstanceEncryptionProtectorsRevalidateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      {
        resourceGroupName,
        managedInstanceName,
        encryptionProtectorName,
        options
      },
      revalidateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  async beginRevalidateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: ManagedInstanceEncryptionProtectorsRevalidateOptionalParams
  ): Promise<void> {
    const poller = await this.beginRevalidate(
      resourceGroupName,
      managedInstanceName,
      encryptionProtectorName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of managed instance encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceEncryptionProtectorsListByInstanceOptionalParams
  ): Promise<ManagedInstanceEncryptionProtectorsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByInstanceOperationSpec
    );
  }

  /**
   * Gets a managed instance encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: ManagedInstanceEncryptionProtectorsGetOptionalParams
  ): Promise<ManagedInstanceEncryptionProtectorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        encryptionProtectorName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: ManagedInstanceEncryptionProtector,
    options?: ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse
      >,
      ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        managedInstanceName,
        encryptionProtectorName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: ManagedInstanceEncryptionProtector,
    options?: ManagedInstanceEncryptionProtectorsCreateOrUpdateOptionalParams
  ): Promise<ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      encryptionProtectorName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ManagedInstanceEncryptionProtectorsListByInstanceNextOptionalParams
  ): Promise<ManagedInstanceEncryptionProtectorsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const revalidateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}/revalidate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.encryptionProtectorName,
    Parameters.managedInstanceName
  ],
  serializer
};
const listByInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtectorListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.encryptionProtectorName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    201: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    202: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    204: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtector
    },
    default: {}
  },
  requestBody: Parameters.parameters53,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.encryptionProtectorName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceEncryptionProtectorListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
