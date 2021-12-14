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
 * This sample demonstrates how to Retrieves the details of a RoutingIntent.
 *
 * @summary Retrieves the details of a RoutingIntent.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//routingIntentOperations.get
async function routeTableGet() {
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const routingIntentName = "Intent1";
  const result = await client.routingIntentOperations.get(
    resourceGroupName,
    virtualHubName,
    routingIntentName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await routeTableGet();
}
main();
