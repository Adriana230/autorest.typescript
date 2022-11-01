/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PolicySetDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyClient } from "../policyClient";
import {
  PolicySetDefinition,
  PolicySetDefinitionsListNextOptionalParams,
  PolicySetDefinitionsListOptionalParams,
  PolicySetDefinitionsListResponse,
  PolicySetDefinitionsListBuiltInNextOptionalParams,
  PolicySetDefinitionsListBuiltInOptionalParams,
  PolicySetDefinitionsListBuiltInResponse,
  PolicySetDefinitionsListByManagementGroupNextOptionalParams,
  PolicySetDefinitionsListByManagementGroupOptionalParams,
  PolicySetDefinitionsListByManagementGroupResponse,
  PolicySetDefinitionsCreateOrUpdateOptionalParams,
  PolicySetDefinitionsCreateOrUpdateResponse,
  PolicySetDefinitionsDeleteOptionalParams,
  PolicySetDefinitionsGetOptionalParams,
  PolicySetDefinitionsGetResponse,
  PolicySetDefinitionsGetBuiltInOptionalParams,
  PolicySetDefinitionsGetBuiltInResponse,
  PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse,
  PolicySetDefinitionsDeleteAtManagementGroupOptionalParams,
  PolicySetDefinitionsGetAtManagementGroupOptionalParams,
  PolicySetDefinitionsGetAtManagementGroupResponse,
  PolicySetDefinitionsListNextResponse,
  PolicySetDefinitionsListBuiltInNextResponse,
  PolicySetDefinitionsListByManagementGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicySetDefinitions operations. */
export class PolicySetDefinitionsImpl implements PolicySetDefinitions {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class PolicySetDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves a list of all the policy set definitions in the given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: PolicySetDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: PolicySetDefinitionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicySetDefinition[]> {
    let result: PolicySetDefinitionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PolicySetDefinitionsListOptionalParams
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions.
   * @param options The options parameters.
   */
  public listBuiltIn(
    options?: PolicySetDefinitionsListBuiltInOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
    const iter = this.listBuiltInPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBuiltInPagingPage(options, settings);
      }
    };
  }

  private async *listBuiltInPagingPage(
    options?: PolicySetDefinitionsListBuiltInOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicySetDefinition[]> {
    let result: PolicySetDefinitionsListBuiltInResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBuiltIn(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBuiltInNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBuiltInPagingAll(
    options?: PolicySetDefinitionsListBuiltInOptionalParams
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listBuiltInPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the a policy set definition in the given management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  public listByManagementGroup(
    managementGroupId: string,
    options?: PolicySetDefinitionsListByManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicySetDefinition> {
    const iter = this.listByManagementGroupPagingAll(
      managementGroupId,
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
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByManagementGroupPagingPage(
          managementGroupId,
          options,
          settings
        );
      }
    };
  }

  private async *listByManagementGroupPagingPage(
    managementGroupId: string,
    options?: PolicySetDefinitionsListByManagementGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PolicySetDefinition[]> {
    let result: PolicySetDefinitionsListByManagementGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagementGroup(managementGroupId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagementGroupNext(
        managementGroupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagementGroupPagingAll(
    managementGroupId: string,
    options?: PolicySetDefinitionsListByManagementGroupOptionalParams
  ): AsyncIterableIterator<PolicySetDefinition> {
    for await (const page of this.listByManagementGroupPagingPage(
      managementGroupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation creates or updates a policy set definition in the given subscription with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policySetDefinitionName: string,
    parameters: PolicySetDefinition,
    options?: PolicySetDefinitionsCreateOrUpdateOptionalParams
  ): Promise<PolicySetDefinitionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This operation deletes the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param options The options parameters.
   */
  delete(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, options },
      deleteOperationSpec
    );
  }

  /**
   * This operation retrieves the policy set definition in the given subscription with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  get(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsGetOptionalParams
  ): Promise<PolicySetDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, options },
      getOperationSpec
    );
  }

  /**
   * This operation retrieves the built-in policy set definition with the given name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param options The options parameters.
   */
  getBuiltIn(
    policySetDefinitionName: string,
    options?: PolicySetDefinitionsGetBuiltInOptionalParams
  ): Promise<PolicySetDefinitionsGetBuiltInResponse> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, options },
      getBuiltInOperationSpec
    );
  }

  /**
   * This operation retrieves a list of all the policy set definitions in the given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: PolicySetDefinitionsListOptionalParams
  ): Promise<PolicySetDefinitionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This operation retrieves a list of all the built-in policy set definitions.
   * @param options The options parameters.
   */
  private _listBuiltIn(
    options?: PolicySetDefinitionsListBuiltInOptionalParams
  ): Promise<PolicySetDefinitionsListBuiltInResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBuiltInOperationSpec
    );
  }

  /**
   * This operation creates or updates a policy set definition in the given management group with the
   * given name.
   * @param policySetDefinitionName The name of the policy set definition to create.
   * @param managementGroupId The ID of the management group.
   * @param parameters The policy set definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    parameters: PolicySetDefinition,
    options?: PolicySetDefinitionsCreateOrUpdateAtManagementGroupOptionalParams
  ): Promise<PolicySetDefinitionsCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, managementGroupId, parameters, options },
      createOrUpdateAtManagementGroupOperationSpec
    );
  }

  /**
   * This operation deletes the policy set definition in the given management group with the given name.
   * @param policySetDefinitionName The name of the policy set definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: PolicySetDefinitionsDeleteAtManagementGroupOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, managementGroupId, options },
      deleteAtManagementGroupOperationSpec
    );
  }

  /**
   * This operation retrieves the policy set definition in the given management group with the given
   * name.
   * @param policySetDefinitionName The name of the policy set definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    policySetDefinitionName: string,
    managementGroupId: string,
    options?: PolicySetDefinitionsGetAtManagementGroupOptionalParams
  ): Promise<PolicySetDefinitionsGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { policySetDefinitionName, managementGroupId, options },
      getAtManagementGroupOperationSpec
    );
  }

  /**
   * This operation retrieves a list of all the a policy set definition in the given management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  private _listByManagementGroup(
    managementGroupId: string,
    options?: PolicySetDefinitionsListByManagementGroupOptionalParams
  ): Promise<PolicySetDefinitionsListByManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, options },
      listByManagementGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PolicySetDefinitionsListNextOptionalParams
  ): Promise<PolicySetDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListBuiltInNext
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  private _listBuiltInNext(
    nextLink: string,
    options?: PolicySetDefinitionsListBuiltInNextOptionalParams
  ): Promise<PolicySetDefinitionsListBuiltInNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBuiltInNextOperationSpec
    );
  }

  /**
   * ListByManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  private _listByManagementGroupNext(
    managementGroupId: string,
    nextLink: string,
    options?: PolicySetDefinitionsListByManagementGroupNextOptionalParams
  ): Promise<PolicySetDefinitionsListByManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, nextLink, options },
      listByManagementGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBuiltInOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.policySetDefinitionName],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
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
const listBuiltInOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    201: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.policySetDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.managementGroupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
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
const listBuiltInNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicySetDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
