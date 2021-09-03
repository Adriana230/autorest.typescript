/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ObjectReplicationPolicy,
  ObjectReplicationPoliciesListOptionalParams,
  ObjectReplicationPoliciesGetOptionalParams,
  ObjectReplicationPoliciesGetResponse,
  ObjectReplicationPoliciesCreateOrUpdateOptionalParams,
  ObjectReplicationPoliciesCreateOrUpdateResponse,
  ObjectReplicationPoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ObjectReplicationPolicies. */
export interface ObjectReplicationPolicies {
  /**
   * List the object replication policies associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectReplicationPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<ObjectReplicationPolicy>;
  /**
   * Get the object replication policy of the storage account by policy ID.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
   *                                  is unknown.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    options?: ObjectReplicationPoliciesGetOptionalParams
  ): Promise<ObjectReplicationPoliciesGetResponse>;
  /**
   * Create or update the object replication policy of the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
   *                                  is unknown.
   * @param properties The object replication policy set to a storage account. A unique policy ID will be
   *                   created if absent.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    properties: ObjectReplicationPolicy,
    options?: ObjectReplicationPoliciesCreateOrUpdateOptionalParams
  ): Promise<ObjectReplicationPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes the object replication policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId The ID of object replication policy or 'default' if the policy ID
   *                                  is unknown.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    options?: ObjectReplicationPoliciesDeleteOptionalParams
  ): Promise<void>;
}
