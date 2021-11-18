/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Group } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UserAgentCoreV1Client } from "../userAgentCoreV1Client";
import {
  GroupGetSampleResourceGroupOptionalParams,
  GroupGetSampleResourceGroupResponse
} from "../models";

/** Class containing Group operations. */
export class GroupImpl implements Group {
  private readonly client: UserAgentCoreV1Client;

  /**
   * Initialize a new instance of the class Group class.
   * @param client Reference to the service client
   */
  constructor(client: UserAgentCoreV1Client) {
    this.client = client;
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   * @param resourceGroupName Resource Group name 'testgroup101'.
   * @param options The options parameters.
   */
  getSampleResourceGroup(
    resourceGroupName: string,
    options?: GroupGetSampleResourceGroupOptionalParams
  ): Promise<GroupGetSampleResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getSampleResourceGroupOperationSpec
    ) as Promise<GroupGetSampleResourceGroupResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getSampleResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SampleResourceGroup
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
