import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DomainService,
  DomainServicesListOptionalParams,
  DomainServicesListByResourceGroupOptionalParams,
  DomainServicesCreateOrUpdateOptionalParams,
  DomainServicesCreateOrUpdateResponse,
  DomainServicesGetOptionalParams,
  DomainServicesGetResponse,
  DomainServicesDeleteOptionalParams,
  DomainServicesUpdateOptionalParams,
  DomainServicesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DomainServices. */
export interface DomainServices {
  /**
   * The List Domain Services in Subscription operation lists all the domain services available under the
   * given subscription (and across all resource groups within that subscription).
   * @param options The options parameters.
   */
  list(
    options?: DomainServicesListOptionalParams
  ): PagedAsyncIterableIterator<DomainService>;
  /**
   * The List Domain Services in Resource Group operation lists all the domain services available under
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DomainServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DomainService>;
  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters. If
   * the specific service already exists, then any patchable properties will be updated and any immutable
   * properties will remain unchanged.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainServicesCreateOrUpdateResponse>,
      DomainServicesCreateOrUpdateResponse
    >
  >;
  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters. If
   * the specific service already exists, then any patchable properties will be updated and any immutable
   * properties will remain unchanged.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesCreateOrUpdateOptionalParams
  ): Promise<DomainServicesCreateOrUpdateResponse>;
  /**
   * The Get Domain Service operation retrieves a json representation of the Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesGetOptionalParams
  ): Promise<DomainServicesGetResponse>;
  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update call
   * only supports the properties listed in the PATCH body.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainServicesUpdateResponse>,
      DomainServicesUpdateResponse
    >
  >;
  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update call
   * only supports the properties listed in the PATCH body.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesUpdateOptionalParams
  ): Promise<DomainServicesUpdateResponse>;
}
