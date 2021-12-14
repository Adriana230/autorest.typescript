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
 * This sample demonstrates how to Checks that the storage account name is valid and is not already in use.
 *
 * @summary Checks that the storage account name is valid and is not already in use.
 */
import {
  StorageAccountCheckNameAvailabilityParameters,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//storageAccounts.checkNameAvailability
async function storageAccountCheckNameAvailability() {
  const accountName: StorageAccountCheckNameAvailabilityParameters = {
    name: "sto3363",
    type: "Microsoft.Storage/storageAccounts"
  };
  const result = await client.storageAccounts.checkNameAvailability(
    accountName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountCheckNameAvailability();
}
main();
