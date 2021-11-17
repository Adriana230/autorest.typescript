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
 * This sample demonstrates how to Gets the private link resources supported for the key vault.
 *
 * @summary Gets the private link resources supported for the key vault.
 */
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//privateLinkResources.listByVault
async function keyVaultListPrivateLinkResources() {
  const resourceGroupName = "sample-group";
  const vaultName = "sample-vault";
  await client.privateLinkResources
    .listByVault(resourceGroupName, vaultName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await keyVaultListPrivateLinkResources();
}
main();
