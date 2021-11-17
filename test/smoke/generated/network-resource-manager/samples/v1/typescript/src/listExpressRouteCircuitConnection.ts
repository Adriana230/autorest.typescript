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
 * This sample demonstrates how to Gets all global reach connections associated with a private peering in an express route circuit.
 *
 * @summary Gets all global reach connections associated with a private peering in an express route circuit.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRouteCircuitConnections.list
async function listExpressRouteCircuitConnection() {
  const resourceGroupName = "rg1";
  const circuitName = "ExpressRouteARMCircuitA";
  const peeringName = "AzurePrivatePeering";
  const resArray = new Array();
  for await (let item of client.expressRouteCircuitConnections.list(
    resourceGroupName,
    circuitName,
    peeringName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid1";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listExpressRouteCircuitConnection();
}
main();
