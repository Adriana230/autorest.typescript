/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagementLockObject,
  ManagementLocksListAtResourceGroupLevelOptionalParams,
  ManagementLocksListAtResourceLevelOptionalParams,
  ManagementLocksListAtSubscriptionLevelOptionalParams,
  ManagementLocksListByScopeOptionalParams,
  ManagementLocksCreateOrUpdateAtResourceGroupLevelOptionalParams,
  ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse,
  ManagementLocksDeleteAtResourceGroupLevelOptionalParams,
  ManagementLocksGetAtResourceGroupLevelOptionalParams,
  ManagementLocksGetAtResourceGroupLevelResponse,
  ManagementLocksCreateOrUpdateByScopeOptionalParams,
  ManagementLocksCreateOrUpdateByScopeResponse,
  ManagementLocksDeleteByScopeOptionalParams,
  ManagementLocksGetByScopeOptionalParams,
  ManagementLocksGetByScopeResponse,
  ManagementLocksCreateOrUpdateAtResourceLevelOptionalParams,
  ManagementLocksCreateOrUpdateAtResourceLevelResponse,
  ManagementLocksDeleteAtResourceLevelOptionalParams,
  ManagementLocksGetAtResourceLevelOptionalParams,
  ManagementLocksGetAtResourceLevelResponse,
  ManagementLocksCreateOrUpdateAtSubscriptionLevelOptionalParams,
  ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse,
  ManagementLocksDeleteAtSubscriptionLevelOptionalParams,
  ManagementLocksGetAtSubscriptionLevelOptionalParams,
  ManagementLocksGetAtSubscriptionLevelResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagementLocks. */
export interface ManagementLocks {
  /**
   * Gets all the management locks for a resource group.
   * @param resourceGroupName The name of the resource group containing the locks to get.
   * @param options The options parameters.
   */
  listAtResourceGroupLevel(
    resourceGroupName: string,
    options?: ManagementLocksListAtResourceGroupLevelOptionalParams
  ): PagedAsyncIterableIterator<ManagementLockObject>;
  /**
   * Gets all the management locks for a resource or any level below resource.
   * @param resourceGroupName The name of the resource group containing the locked resource. The name is
   *                          case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the locked resource.
   * @param resourceName The name of the locked resource.
   * @param options The options parameters.
   */
  listAtResourceLevel(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: ManagementLocksListAtResourceLevelOptionalParams
  ): PagedAsyncIterableIterator<ManagementLockObject>;
  /**
   * Gets all the management locks for a subscription.
   * @param options The options parameters.
   */
  listAtSubscriptionLevel(
    options?: ManagementLocksListAtSubscriptionLevelOptionalParams
  ): PagedAsyncIterableIterator<ManagementLockObject>;
  /**
   * Gets all the management locks for a scope.
   * @param scope The scope for the lock. When providing a scope for the assignment, use
   *              '/subscriptions/{subscriptionId}' for subscriptions,
   *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
   *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
   *              for resources.
   * @param options The options parameters.
   */
  listByScope(
    scope: string,
    options?: ManagementLocksListByScopeOptionalParams
  ): PagedAsyncIterableIterator<ManagementLockObject>;
  /**
   * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
   * management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param resourceGroupName The name of the resource group to lock.
   * @param lockName The lock name. The lock name can be a maximum of 260 characters. It cannot contain
   *                 <, > %, &, :, \, ?, /, or any control characters.
   * @param parameters The management lock parameters.
   * @param options The options parameters.
   */
  createOrUpdateAtResourceGroupLevel(
    resourceGroupName: string,
    lockName: string,
    parameters: ManagementLockObject,
    options?: ManagementLocksCreateOrUpdateAtResourceGroupLevelOptionalParams
  ): Promise<ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse>;
  /**
   * To delete management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param resourceGroupName The name of the resource group containing the lock.
   * @param lockName The name of lock to delete.
   * @param options The options parameters.
   */
  deleteAtResourceGroupLevel(
    resourceGroupName: string,
    lockName: string,
    options?: ManagementLocksDeleteAtResourceGroupLevelOptionalParams
  ): Promise<void>;
  /**
   * Gets a management lock at the resource group level.
   * @param resourceGroupName The name of the locked resource group.
   * @param lockName The name of the lock to get.
   * @param options The options parameters.
   */
  getAtResourceGroupLevel(
    resourceGroupName: string,
    lockName: string,
    options?: ManagementLocksGetAtResourceGroupLevelOptionalParams
  ): Promise<ManagementLocksGetAtResourceGroupLevelResponse>;
  /**
   * Create or update a management lock by scope.
   * @param scope The scope for the lock. When providing a scope for the assignment, use
   *              '/subscriptions/{subscriptionId}' for subscriptions,
   *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
   *              '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
   *              for resources.
   * @param lockName The name of lock.
   * @param parameters Create or update management lock parameters.
   * @param options The options parameters.
   */
  createOrUpdateByScope(
    scope: string,
    lockName: string,
    parameters: ManagementLockObject,
    options?: ManagementLocksCreateOrUpdateByScopeOptionalParams
  ): Promise<ManagementLocksCreateOrUpdateByScopeResponse>;
  /**
   * Delete a management lock by scope.
   * @param scope The scope for the lock.
   * @param lockName The name of lock.
   * @param options The options parameters.
   */
  deleteByScope(
    scope: string,
    lockName: string,
    options?: ManagementLocksDeleteByScopeOptionalParams
  ): Promise<void>;
  /**
   * Get a management lock by scope.
   * @param scope The scope for the lock.
   * @param lockName The name of lock.
   * @param options The options parameters.
   */
  getByScope(
    scope: string,
    lockName: string,
    options?: ManagementLocksGetByScopeOptionalParams
  ): Promise<ManagementLocksGetByScopeResponse>;
  /**
   * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
   * management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param resourceGroupName The name of the resource group containing the resource to lock.
   * @param resourceProviderNamespace The resource provider namespace of the resource to lock.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to lock.
   * @param resourceName The name of the resource to lock.
   * @param lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot
   *                 contain <, > %, &, :, \, ?, /, or any control characters.
   * @param parameters Parameters for creating or updating a  management lock.
   * @param options The options parameters.
   */
  createOrUpdateAtResourceLevel(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    lockName: string,
    parameters: ManagementLockObject,
    options?: ManagementLocksCreateOrUpdateAtResourceLevelOptionalParams
  ): Promise<ManagementLocksCreateOrUpdateAtResourceLevelResponse>;
  /**
   * To delete management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param resourceGroupName The name of the resource group containing the resource with the lock to
   *                          delete.
   * @param resourceProviderNamespace The resource provider namespace of the resource with the lock to
   *                                  delete.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource with the lock to delete.
   * @param resourceName The name of the resource with the lock to delete.
   * @param lockName The name of the lock to delete.
   * @param options The options parameters.
   */
  deleteAtResourceLevel(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    lockName: string,
    options?: ManagementLocksDeleteAtResourceLevelOptionalParams
  ): Promise<void>;
  /**
   * Get the management lock of a resource or any level below resource.
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath An extra path parameter needed in some services, like SQL Databases.
   * @param resourceType The type of the resource.
   * @param resourceName The name of the resource.
   * @param lockName The name of lock.
   * @param options The options parameters.
   */
  getAtResourceLevel(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    lockName: string,
    options?: ManagementLocksGetAtResourceLevelOptionalParams
  ): Promise<ManagementLocksGetAtResourceLevelResponse>;
  /**
   * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
   * management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot
   *                 contain <, > %, &, :, \, ?, /, or any control characters.
   * @param parameters The management lock parameters.
   * @param options The options parameters.
   */
  createOrUpdateAtSubscriptionLevel(
    lockName: string,
    parameters: ManagementLockObject,
    options?: ManagementLocksCreateOrUpdateAtSubscriptionLevelOptionalParams
  ): Promise<ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse>;
  /**
   * To delete management locks, you must have access to Microsoft.Authorization/* or
   * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
   * Administrator are granted those actions.
   * @param lockName The name of lock to delete.
   * @param options The options parameters.
   */
  deleteAtSubscriptionLevel(
    lockName: string,
    options?: ManagementLocksDeleteAtSubscriptionLevelOptionalParams
  ): Promise<void>;
  /**
   * Gets a management lock at the subscription level.
   * @param lockName The name of the lock to get.
   * @param options The options parameters.
   */
  getAtSubscriptionLevel(
    lockName: string,
    options?: ManagementLocksGetAtSubscriptionLevelOptionalParams
  ): Promise<ManagementLocksGetAtSubscriptionLevelResponse>;
}
