/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ContainerServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LroEngine } from "../lro";
import { CoreClientLro, shouldDeserializeLro } from "../coreClientLro";
import {
  ContainerService,
  ContainerServicesListNextOptionalParams,
  ContainerServicesListOptionalParams,
  ContainerServicesListByResourceGroupNextOptionalParams,
  ContainerServicesListByResourceGroupOptionalParams,
  ContainerServicesListResponse,
  ContainerServicesCreateOrUpdateOptionalParams,
  ContainerServicesCreateOrUpdateResponse,
  ContainerServicesGetOptionalParams,
  ContainerServicesGetResponse,
  ContainerServicesDeleteOptionalParams,
  ContainerServicesListByResourceGroupResponse,
  ContainerServicesListNextResponse,
  ContainerServicesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ContainerServices. */
export class ContainerServicesImpl implements ContainerServices {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class ContainerServices class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of container services in the specified subscription. The operation returns properties of
   * each container service including state, orchestrator, number of masters and agents, and FQDNs of
   * masters and agents.
   * @param options The options parameters.
   */
  public list(
    options?: ContainerServicesListOptionalParams
  ): PagedAsyncIterableIterator<ContainerService> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ContainerServicesListOptionalParams
  ): AsyncIterableIterator<ContainerService[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ContainerServicesListOptionalParams
  ): AsyncIterableIterator<ContainerService> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of container services in the specified subscription and resource group. The operation
   * returns properties of each container service including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ContainerService> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ContainerServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ContainerService[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ContainerServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ContainerService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of container services in the specified subscription. The operation returns properties of
   * each container service including state, orchestrator, number of masters and agents, and FQDNs of
   * masters and agents.
   * @param options The options parameters.
   */
  private _list(
    options?: ContainerServicesListOptionalParams
  ): Promise<ContainerServicesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates or updates a container service with the specified configuration of orchestrator, masters,
   * and agents.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param parameters Parameters supplied to the Create or Update a Container Service operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    containerServiceName: string,
    parameters: ContainerService,
    options?: ContainerServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ContainerServicesCreateOrUpdateResponse>,
      ContainerServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContainerServicesCreateOrUpdateResponse> => {
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

    const lro = new CoreClientLro(
      sendOperation,
      { resourceGroupName, containerServiceName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Creates or updates a container service with the specified configuration of orchestrator, masters,
   * and agents.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param parameters Parameters supplied to the Create or Update a Container Service operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    containerServiceName: string,
    parameters: ContainerService,
    options?: ContainerServicesCreateOrUpdateOptionalParams
  ): Promise<ContainerServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      containerServiceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the properties of the specified container service in the specified subscription and resource
   * group. The operation returns the properties including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerServiceName: string,
    options?: ContainerServicesGetOptionalParams
  ): Promise<ContainerServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, containerServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the specified container service in the specified subscription and resource group. The
   * operation does not delete other resources created as part of creating a container service, including
   * storage accounts, VMs, and availability sets. All the other resources created with the container
   * service are part of the same resource group and can be deleted individually.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    containerServiceName: string,
    options?: ContainerServicesDeleteOptionalParams
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

    const lro = new CoreClientLro(
      sendOperation,
      { resourceGroupName, containerServiceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Deletes the specified container service in the specified subscription and resource group. The
   * operation does not delete other resources created as part of creating a container service, including
   * storage accounts, VMs, and availability sets. All the other resources created with the container
   * service are part of the same resource group and can be deleted individually.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    containerServiceName: string,
    options?: ContainerServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      containerServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of container services in the specified subscription and resource group. The operation
   * returns properties of each container service including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerServicesListByResourceGroupOptionalParams
  ): Promise<ContainerServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ContainerServicesListNextOptionalParams
  ): Promise<ContainerServicesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ContainerServicesListByResourceGroupNextOptionalParams
  ): Promise<ContainerServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerService
    },
    201: {
      bodyMapper: Mappers.ContainerService
    },
    202: {
      bodyMapper: Mappers.ContainerService
    },
    204: {
      bodyMapper: Mappers.ContainerService
    }
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.containerServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerService
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.containerServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.containerServiceName
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerServiceListResult
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
