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
 * This sample demonstrates how to Abort live Migration of storage account to enable Hns
 *
 * @summary Abort live Migration of storage account to enable Hns
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//storageAccounts.beginAbortHierarchicalNamespaceMigrationAndWait
async function storageAccountAbortHierarchicalNamespaceMigration() {
  const resourceGroupName = "res4228";
  const accountName = "sto2434";
  const result = await client.storageAccounts.beginAbortHierarchicalNamespaceMigrationAndWait(
    resourceGroupName,
    accountName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountAbortHierarchicalNamespaceMigration();
}
main();
