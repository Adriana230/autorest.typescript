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
 * This sample demonstrates how to Gets all authorizations in an express route circuit.
 *
 * @summary Gets all authorizations in an express route circuit.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRouteCircuitAuthorizations.list
async function listExpressRouteCircuitAuthorization() {
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const resArray = new Array();
  for await (let item of client.expressRouteCircuitAuthorizations.list(
    resourceGroupName,
    circuitName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listExpressRouteCircuitAuthorization();
}
main();
