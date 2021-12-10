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
 * This sample demonstrates how to The List operation gets information about the private endpoint connections associated with the managed HSM Pool.
 *
 * @summary The List operation gets information about the private endpoint connections associated with the managed HSM Pool.
 */
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//mhsmPrivateEndpointConnections.listByResource
async function listManagedHsmPoolsInASubscription() {
  const resourceGroupName = "sample-group";
  const name = "sample-mhsm";
  const resArray = new Array();
  for await (let item of client.mhsmPrivateEndpointConnections.listByResource(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await listManagedHsmPoolsInASubscription();
}
main();
