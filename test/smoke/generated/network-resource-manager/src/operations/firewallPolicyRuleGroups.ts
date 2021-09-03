/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FirewallPolicyRuleGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FirewallPolicyRuleGroup,
  FirewallPolicyRuleGroupsListNextOptionalParams,
  FirewallPolicyRuleGroupsListOptionalParams,
  FirewallPolicyRuleGroupsDeleteOptionalParams,
  FirewallPolicyRuleGroupsGetOptionalParams,
  FirewallPolicyRuleGroupsGetResponse,
  FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams,
  FirewallPolicyRuleGroupsCreateOrUpdateResponse,
  FirewallPolicyRuleGroupsListResponse,
  FirewallPolicyRuleGroupsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FirewallPolicyRuleGroups operations. */
export class FirewallPolicyRuleGroupsImpl implements FirewallPolicyRuleGroups {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class FirewallPolicyRuleGroups class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleGroupsListOptionalParams
  ): PagedAsyncIterableIterator<FirewallPolicyRuleGroup> {
    const iter = this.listPagingAll(
      resourceGroupName,
      firewallPolicyName,
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
        return this.listPagingPage(
          resourceGroupName,
          firewallPolicyName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleGroupsListOptionalParams
  ): AsyncIterableIterator<FirewallPolicyRuleGroup[]> {
    let result = await this._list(
      resourceGroupName,
      firewallPolicyName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        firewallPolicyName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleGroupsListOptionalParams
  ): AsyncIterableIterator<FirewallPolicyRuleGroup> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      firewallPolicyName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsDeleteOptionalParams
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
      { resourceGroupName, firewallPolicyName, ruleGroupName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Deletes the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      firewallPolicyName,
      ruleGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsGetOptionalParams
  ): Promise<FirewallPolicyRuleGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, firewallPolicyName, ruleGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    parameters: FirewallPolicyRuleGroup,
    options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FirewallPolicyRuleGroupsCreateOrUpdateResponse>,
      FirewallPolicyRuleGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FirewallPolicyRuleGroupsCreateOrUpdateResponse> => {
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
        firewallPolicyName,
        ruleGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates or updates the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    parameters: FirewallPolicyRuleGroup,
    options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams
  ): Promise<FirewallPolicyRuleGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      firewallPolicyName,
      ruleGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleGroupsListOptionalParams
  ): Promise<FirewallPolicyRuleGroupsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, firewallPolicyName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    firewallPolicyName: string,
    nextLink: string,
    options?: FirewallPolicyRuleGroupsListNextOptionalParams
  ): Promise<FirewallPolicyRuleGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, firewallPolicyName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}",
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
    Parameters.firewallPolicyName,
    Parameters.ruleGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleGroup
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
    Parameters.firewallPolicyName,
    Parameters.ruleGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleGroup
    },
    201: {
      bodyMapper: Mappers.FirewallPolicyRuleGroup
    },
    202: {
      bodyMapper: Mappers.FirewallPolicyRuleGroup
    },
    204: {
      bodyMapper: Mappers.FirewallPolicyRuleGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.firewallPolicyName,
    Parameters.ruleGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleGroupListResult
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
    Parameters.firewallPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallPolicyRuleGroupListResult
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
    Parameters.nextLink,
    Parameters.firewallPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
