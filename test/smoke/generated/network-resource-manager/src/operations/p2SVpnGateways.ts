/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { P2SVpnGateways } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LroEngine } from "../lro";
import { CoreClientLro, shouldDeserializeLro } from "../coreClientLro";
import {
  P2SVpnGateway,
  P2SVpnGatewaysListByResourceGroupNextOptionalParams,
  P2SVpnGatewaysListByResourceGroupOptionalParams,
  P2SVpnGatewaysListNextOptionalParams,
  P2SVpnGatewaysListOptionalParams,
  P2SVpnGatewaysGetOptionalParams,
  P2SVpnGatewaysGetResponse,
  P2SVpnGatewaysCreateOrUpdateOptionalParams,
  P2SVpnGatewaysCreateOrUpdateResponse,
  TagsObject,
  P2SVpnGatewaysUpdateTagsOptionalParams,
  P2SVpnGatewaysUpdateTagsResponse,
  P2SVpnGatewaysDeleteOptionalParams,
  P2SVpnGatewaysListByResourceGroupResponse,
  P2SVpnGatewaysListResponse,
  P2SVpnProfileParameters,
  P2SVpnGatewaysGenerateVpnProfileOptionalParams,
  P2SVpnGatewaysGenerateVpnProfileResponse,
  P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams,
  P2SVpnGatewaysGetP2SVpnConnectionHealthResponse,
  P2SVpnConnectionHealthRequest,
  P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams,
  P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse,
  P2SVpnConnectionRequest,
  P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams,
  P2SVpnGatewaysListByResourceGroupNextResponse,
  P2SVpnGatewaysListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a P2SVpnGateways. */
export class P2SVpnGatewaysImpl implements P2SVpnGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class P2SVpnGateways class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the P2SVpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: P2SVpnGatewaysListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<P2SVpnGateway> {
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
    options?: P2SVpnGatewaysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<P2SVpnGateway[]> {
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
    options?: P2SVpnGatewaysListByResourceGroupOptionalParams
  ): AsyncIterableIterator<P2SVpnGateway> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the P2SVpnGateways in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: P2SVpnGatewaysListOptionalParams
  ): PagedAsyncIterableIterator<P2SVpnGateway> {
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
    options?: P2SVpnGatewaysListOptionalParams
  ): AsyncIterableIterator<P2SVpnGateway[]> {
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
    options?: P2SVpnGatewaysListOptionalParams
  ): AsyncIterableIterator<P2SVpnGateway> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves the details of a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    options?: P2SVpnGatewaysGetOptionalParams
  ): Promise<P2SVpnGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
   *                                gateway.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    p2SVpnGatewayParameters: P2SVpnGateway,
    options?: P2SVpnGatewaysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<P2SVpnGatewaysCreateOrUpdateResponse>,
      P2SVpnGatewaysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<P2SVpnGatewaysCreateOrUpdateResponse> => {
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
      { resourceGroupName, gatewayName, p2SVpnGatewayParameters, options },
      createOrUpdateOperationSpec,
      "azure-async-operation"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
   *                                gateway.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    p2SVpnGatewayParameters: P2SVpnGateway,
    options?: P2SVpnGatewaysCreateOrUpdateOptionalParams
  ): Promise<P2SVpnGatewaysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gatewayName,
      p2SVpnGatewayParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates virtual wan p2s vpn gateway tags.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to update a virtual wan p2s vpn gateway tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    gatewayName: string,
    p2SVpnGatewayParameters: TagsObject,
    options?: P2SVpnGatewaysUpdateTagsOptionalParams
  ): Promise<P2SVpnGatewaysUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, p2SVpnGatewayParameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * Deletes a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    options?: P2SVpnGatewaysDeleteOptionalParams
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
      { resourceGroupName, gatewayName, options },
      deleteOperationSpec,
      "location"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Deletes a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: P2SVpnGatewaysDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the P2SVpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: P2SVpnGatewaysListByResourceGroupOptionalParams
  ): Promise<P2SVpnGatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all the P2SVpnGateways in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: P2SVpnGatewaysListOptionalParams
  ): Promise<P2SVpnGatewaysListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package operation.
   * @param options The options parameters.
   */
  async beginGenerateVpnProfile(
    resourceGroupName: string,
    gatewayName: string,
    parameters: P2SVpnProfileParameters,
    options?: P2SVpnGatewaysGenerateVpnProfileOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<P2SVpnGatewaysGenerateVpnProfileResponse>,
      P2SVpnGatewaysGenerateVpnProfileResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<P2SVpnGatewaysGenerateVpnProfileResponse> => {
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
      { resourceGroupName, gatewayName, parameters, options },
      generateVpnProfileOperationSpec,
      "location"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package operation.
   * @param options The options parameters.
   */
  async beginGenerateVpnProfileAndWait(
    resourceGroupName: string,
    gatewayName: string,
    parameters: P2SVpnProfileParameters,
    options?: P2SVpnGatewaysGenerateVpnProfileOptionalParams
  ): Promise<P2SVpnGatewaysGenerateVpnProfileResponse> {
    const poller = await this.beginGenerateVpnProfile(
      resourceGroupName,
      gatewayName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  async beginGetP2SVpnConnectionHealth(
    resourceGroupName: string,
    gatewayName: string,
    options?: P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse>,
      P2SVpnGatewaysGetP2SVpnConnectionHealthResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse> => {
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
      { resourceGroupName, gatewayName, options },
      getP2SVpnConnectionHealthOperationSpec,
      "location"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  async beginGetP2SVpnConnectionHealthAndWait(
    resourceGroupName: string,
    gatewayName: string,
    options?: P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams
  ): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse> {
    const poller = await this.beginGetP2SVpnConnectionHealth(
      resourceGroupName,
      gatewayName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway
   * in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param request Request parameters supplied to get p2s vpn connections detailed health.
   * @param options The options parameters.
   */
  async beginGetP2SVpnConnectionHealthDetailed(
    resourceGroupName: string,
    gatewayName: string,
    request: P2SVpnConnectionHealthRequest,
    options?: P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse
      >,
      P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse> => {
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
      { resourceGroupName, gatewayName, request, options },
      getP2SVpnConnectionHealthDetailedOperationSpec,
      "location"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway
   * in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param request Request parameters supplied to get p2s vpn connections detailed health.
   * @param options The options parameters.
   */
  async beginGetP2SVpnConnectionHealthDetailedAndWait(
    resourceGroupName: string,
    gatewayName: string,
    request: P2SVpnConnectionHealthRequest,
    options?: P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams
  ): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse> {
    const poller = await this.beginGetP2SVpnConnectionHealthDetailed(
      resourceGroupName,
      gatewayName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param p2SVpnGatewayName The name of the P2S Vpn Gateway.
   * @param request The parameters are supplied to disconnect p2s vpn connections.
   * @param options The options parameters.
   */
  async beginDisconnectP2SVpnConnections(
    resourceGroupName: string,
    p2SVpnGatewayName: string,
    request: P2SVpnConnectionRequest,
    options?: P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams
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
      { resourceGroupName, p2SVpnGatewayName, request, options },
      disconnectP2SVpnConnectionsOperationSpec,
      "location"
    );
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param p2SVpnGatewayName The name of the P2S Vpn Gateway.
   * @param request The parameters are supplied to disconnect p2s vpn connections.
   * @param options The options parameters.
   */
  async beginDisconnectP2SVpnConnectionsAndWait(
    resourceGroupName: string,
    p2SVpnGatewayName: string,
    request: P2SVpnConnectionRequest,
    options?: P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams
  ): Promise<void> {
    const poller = await this.beginDisconnectP2SVpnConnections(
      resourceGroupName,
      p2SVpnGatewayName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: P2SVpnGatewaysListByResourceGroupNextOptionalParams
  ): Promise<P2SVpnGatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: P2SVpnGatewaysListNextOptionalParams
  ): Promise<P2SVpnGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    202: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    204: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.p2SVpnGatewayParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.p2SVpnGatewayParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/p2svpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const generateVpnProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/generatevpnprofile",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    201: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    202: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    204: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters60,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getP2SVpnConnectionHealthOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/getP2sVpnConnectionHealth",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    202: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    204: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getP2SVpnConnectionHealthDetailedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/getP2sVpnConnectionHealthDetailed",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    201: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    202: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    204: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const disconnectP2SVpnConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{p2sVpnGatewayName}/disconnectP2sVpnConnections",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.p2SVpnGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
