/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ServicePrincipal,
  ServicePrincipalsListNextOptionalParams,
  ServicePrincipalsListOptionalParams,
  DirectoryObjectUnion,
  ServicePrincipalsListOwnersOptionalParams,
  KeyCredential,
  ServicePrincipalsListKeyCredentialsOptionalParams,
  PasswordCredential,
  ServicePrincipalsListPasswordCredentialsOptionalParams,
  ServicePrincipalCreateParameters,
  ServicePrincipalsCreateOptionalParams,
  ServicePrincipalsCreateResponse,
  ServicePrincipalUpdateParameters,
  ServicePrincipalsUpdateOptionalParams,
  ServicePrincipalsDeleteOptionalParams,
  ServicePrincipalsGetOptionalParams,
  ServicePrincipalsGetResponse,
  KeyCredentialsUpdateParameters,
  ServicePrincipalsUpdateKeyCredentialsOptionalParams,
  PasswordCredentialsUpdateParameters,
  ServicePrincipalsUpdatePasswordCredentialsOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServicePrincipals. */
export interface ServicePrincipals {
  /**
   * Gets a list of service principals from the current tenant.
   * @param options The options parameters.
   */
  list(
    options?: ServicePrincipalsListOptionalParams
  ): PagedAsyncIterableIterator<ServicePrincipal>;
  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The options parameters.
   */
  listOwners(
    objectId: string,
    options?: ServicePrincipalsListOwnersOptionalParams
  ): PagedAsyncIterableIterator<DirectoryObjectUnion>;
  /**
   * Get the keyCredentials associated with the specified service principal.
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param options The options parameters.
   */
  listKeyCredentials(
    objectId: string,
    options?: ServicePrincipalsListKeyCredentialsOptionalParams
  ): PagedAsyncIterableIterator<KeyCredential>;
  /**
   * Gets the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param options The options parameters.
   */
  listPasswordCredentials(
    objectId: string,
    options?: ServicePrincipalsListPasswordCredentialsOptionalParams
  ): PagedAsyncIterableIterator<PasswordCredential>;
  /**
   * Gets a list of service principals from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: ServicePrincipalsListNextOptionalParams
  ): PagedAsyncIterableIterator<ServicePrincipal>;
  /**
   * Creates a service principal in the directory.
   * @param parameters Parameters to create a service principal.
   * @param options The options parameters.
   */
  create(
    parameters: ServicePrincipalCreateParameters,
    options?: ServicePrincipalsCreateOptionalParams
  ): Promise<ServicePrincipalsCreateResponse>;
  /**
   * Updates a service principal in the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param parameters Parameters to update a service principal.
   * @param options The options parameters.
   */
  update(
    objectId: string,
    parameters: ServicePrincipalUpdateParameters,
    options?: ServicePrincipalsUpdateOptionalParams
  ): Promise<void>;
  /**
   * Deletes a service principal from the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: ServicePrincipalsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets service principal information from the directory. Query by objectId or pass a filter to query
   * by appId
   * @param objectId The object ID of the service principal to get.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: ServicePrincipalsGetOptionalParams
  ): Promise<ServicePrincipalsGetResponse>;
  /**
   * Update the keyCredentials associated with a service principal.
   * @param objectId The object ID for which to get service principal information.
   * @param parameters Parameters to update the keyCredentials of an existing service principal.
   * @param options The options parameters.
   */
  updateKeyCredentials(
    objectId: string,
    parameters: KeyCredentialsUpdateParameters,
    options?: ServicePrincipalsUpdateKeyCredentialsOptionalParams
  ): Promise<void>;
  /**
   * Updates the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param parameters Parameters to update the passwordCredentials of an existing service principal.
   * @param options The options parameters.
   */
  updatePasswordCredentials(
    objectId: string,
    parameters: PasswordCredentialsUpdateParameters,
    options?: ServicePrincipalsUpdatePasswordCredentialsOptionalParams
  ): Promise<void>;
}