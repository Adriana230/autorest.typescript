/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsPutOptionalParams,
  PrivateEndpointConnectionsPutResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * List all the private endpoint connections associated with the storage account.
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
    options?: PrivateEndpointConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets the specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Update the state of specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsPutOptionalParams
  ): Promise<PrivateEndpointConnectionsPutResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Storage Account
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
}
