/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FileShares } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  FileShareItem,
  FileSharesListNextOptionalParams,
  FileSharesListOptionalParams,
  FileSharesListResponse,
  FileShare,
  FileSharesCreateOptionalParams,
  FileSharesCreateResponse,
  FileSharesUpdateOptionalParams,
  FileSharesUpdateResponse,
  FileSharesGetOptionalParams,
  FileSharesGetResponse,
  FileSharesDeleteOptionalParams,
  DeletedShare,
  FileSharesRestoreOptionalParams,
  FileSharesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FileShares operations. */
export class FileSharesImpl implements FileShares {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class FileShares class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Lists all shares.
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
    options?: FileSharesListOptionalParams
  ): PagedAsyncIterableIterator<FileShareItem> {
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
    options?: FileSharesListOptionalParams
  ): AsyncIterableIterator<FileShareItem[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: FileSharesListOptionalParams
  ): AsyncIterableIterator<FileShareItem> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all shares.
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
    options?: FileSharesListOptionalParams
  ): Promise<FileSharesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Creates a new share under the specified account as described by request body. The share resource
   * includes metadata and properties for that share. It does not include a list of the files contained
   * by the share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param fileShare Properties of the file share to create.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    fileShare: FileShare,
    options?: FileSharesCreateOptionalParams
  ): Promise<FileSharesCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, fileShare, options },
      createOperationSpec
    );
  }

  /**
   * Updates share properties as specified in request body. Properties not mentioned in the request will
   * not be changed. Update fails if the specified share does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param fileShare Properties to update for the file share.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    fileShare: FileShare,
    options?: FileSharesUpdateOptionalParams
  ): Promise<FileSharesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, fileShare, options },
      updateOperationSpec
    );
  }

  /**
   * Gets properties of a specified share.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    options?: FileSharesGetOptionalParams
  ): Promise<FileSharesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes specified share under its account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    options?: FileSharesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, options },
      deleteOperationSpec
    );
  }

  /**
   * Restore a file share within a valid retention days if share soft delete is enabled
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param shareName The name of the file share within the specified storage account. File share names
   *                  must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only.
   *                  Every dash (-) character must be immediately preceded and followed by a letter or number.
   * @param deletedShare The deleted share to be restored.
   * @param options The options parameters.
   */
  restore(
    resourceGroupName: string,
    accountName: string,
    shareName: string,
    deletedShare: DeletedShare,
    options?: FileSharesRestoreOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, shareName, deletedShare, options },
      restoreOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: FileSharesListNextOptionalParams
  ): Promise<FileSharesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter,
    Parameters.expand2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    201: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.fileShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.fileShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}",
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
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restoreOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}/restore",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.deletedShare,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.shareName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileShareItems
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxpagesize,
    Parameters.filter,
    Parameters.expand2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
