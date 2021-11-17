/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to List service SAS credentials of a specific resource.
 *
 * @summary List service SAS credentials of a specific resource.
 */
import {
  ServiceSasParameters,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//storageAccounts.listServiceSAS
async function storageAccountListServiceSAS() {
  const resourceGroupName = "res7439";
  const accountName = "sto1299";
  const parameters: ServiceSasParameters = {
    canonicalizedResource: "/blob/sto1299/music",
    sharedAccessExpiryTime: new Date("2017-05-24T11:32:48.8457197Z"),
    permissions: "l",
    resource: "c"
  };
  await client.storageAccounts
    .listServiceSAS(resourceGroupName, accountName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountListServiceSAS();
}
main();
