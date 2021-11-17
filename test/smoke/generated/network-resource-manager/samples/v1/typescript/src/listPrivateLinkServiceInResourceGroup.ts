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
 * This sample demonstrates how to Gets all private end point connections for a specific private link service.
 *
 * @summary Gets all private end point connections for a specific private link service.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//privateLinkServices.listPrivateEndpointConnections
async function listPrivateLinkServiceInResourceGroup() {
  const resourceGroupName = "rg1";
  const serviceName = "testPls";
  const resArray = new Array();
  for await (let item of client.privateLinkServices.listPrivateEndpointConnections(
    resourceGroupName,
    serviceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subId";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listPrivateLinkServiceInResourceGroup();
}
main();
