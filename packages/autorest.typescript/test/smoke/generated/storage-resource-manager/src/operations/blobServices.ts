/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BlobServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  BlobServiceProperties,
  BlobServicesListOptionalParams,
  BlobServicesListResponse,
  BlobServicesSetServicePropertiesOptionalParams,
  BlobServicesSetServicePropertiesResponse,
  BlobServicesGetServicePropertiesOptionalParams,
  BlobServicesGetServicePropertiesResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BlobServices operations. */
export class BlobServicesImpl implements BlobServices {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class BlobServices class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * List blob services of storage account. It returns a collection of one object named default.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobServicesListOptionalParams
  ): PagedAsyncIterableIterator<BlobServiceProperties> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: BlobServicesListOptionalParams
  ): AsyncIterableIterator<BlobServiceProperties[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: BlobServicesListOptionalParams
  ): AsyncIterableIterator<BlobServiceProperties> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List blob services of storage account. It returns a collection of one object named default.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobServicesListOptionalParams
  ): Promise<BlobServicesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Sets the properties of a storage account’s Blob service, including properties for Storage Analytics
   * and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The properties of a storage account’s Blob service, including properties for
   *                   Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
   * @param options The options parameters.
   */
  setServiceProperties(
    resourceGroupName: string,
    accountName: string,
    parameters: BlobServiceProperties,
    options?: BlobServicesSetServicePropertiesOptionalParams
  ): Promise<BlobServicesSetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, parameters, options },
      setServicePropertiesOperationSpec
    );
  }

  /**
   * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics
   * and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  getServiceProperties(
    resourceGroupName: string,
    accountName: string,
    options?: BlobServicesGetServicePropertiesOptionalParams
  ): Promise<BlobServicesGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getServicePropertiesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobServiceItems
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const setServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BlobServiceProperties
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.blobServicesName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobServiceProperties
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.blobServicesName
  ],
  headerParameters: [Parameters.accept],
  serializer
};