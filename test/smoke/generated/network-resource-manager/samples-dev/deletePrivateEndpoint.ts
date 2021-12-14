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
 * This sample demonstrates how to Deletes the specified private endpoint.
 *
 * @summary Deletes the specified private endpoint.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//privateEndpoints.beginDeleteAndWait
async function deletePrivateEndpoint() {
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const result = await client.privateEndpoints.beginDeleteAndWait(
    resourceGroupName,
    privateEndpointName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subId";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deletePrivateEndpoint();
}
main();
