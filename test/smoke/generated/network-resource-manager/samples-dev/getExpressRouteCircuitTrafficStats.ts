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
 * This sample demonstrates how to Gets all the stats from an express route circuit in a resource group.
 *
 * @summary Gets all the stats from an express route circuit in a resource group.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRouteCircuits.getStats
async function getExpressRouteCircuitTrafficStats() {
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const result = await client.expressRouteCircuits.getStats(
    resourceGroupName,
    circuitName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getExpressRouteCircuitTrafficStats();
}
main();
