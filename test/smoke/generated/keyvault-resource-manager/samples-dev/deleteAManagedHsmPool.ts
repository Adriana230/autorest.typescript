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
 * This sample demonstrates how to Deletes the specified managed HSM Pool.
 *
 * @summary Deletes the specified managed HSM Pool.
 */
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//managedHsms.beginDeleteAndWait
async function deleteAManagedHsmPool() {
  const resourceGroupName = "hsm-group";
  const name = "hsm1";
  const result = await client.managedHsms.beginDeleteAndWait(
    resourceGroupName,
    name
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await deleteAManagedHsmPool();
}
main();
