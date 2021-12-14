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
 * This sample demonstrates how to Revoke user delegation keys.
 *
 * @summary Revoke user delegation keys.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//storageAccounts.revokeUserDelegationKeys
async function storageAccountRevokeUserDelegationKeys() {
  const resourceGroupName = "res4167";
  const accountName = "sto3539";
  const result = await client.storageAccounts.revokeUserDelegationKeys(
    resourceGroupName,
    accountName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountRevokeUserDelegationKeys();
}
main();
