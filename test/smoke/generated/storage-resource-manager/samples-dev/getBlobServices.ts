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
 * This sample demonstrates how to Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @summary Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//blobServices.getServiceProperties
async function getBlobServices() {
  const resourceGroupName = "res4410";
  const accountName = "sto8607";
  const result = await client.blobServices.getServiceProperties(
    resourceGroupName,
    accountName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await getBlobServices();
}
main();
