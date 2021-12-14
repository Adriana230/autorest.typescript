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
 * This sample demonstrates how to Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
 *
 * @summary Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
 */
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//vaults.beginPurgeDeletedAndWait
async function purgeADeletedVault() {
  const vaultName = "sample-vault";
  const location = "westus";
  const result = await client.vaults.beginPurgeDeletedAndWait(
    vaultName,
    location
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await purgeADeletedVault();
}
main();
