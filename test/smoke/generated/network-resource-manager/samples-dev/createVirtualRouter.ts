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
 * This sample demonstrates how to Creates or updates the specified Virtual Router.
 *
 * @summary Creates or updates the specified Virtual Router.
 */
import {
  VirtualRouter,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualRouters.beginCreateOrUpdateAndWait
async function createVirtualRouter() {
  const resourceGroupName = "rg1";
  const virtualRouterName = "virtualRouter";
  const parameters: VirtualRouter = {
    hostedGateway: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vnetGateway"
    },
    location: "West US",
    tags: { key1: "value1" }
  };
  const result = await client.virtualRouters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualRouterName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createVirtualRouter();
}
main();
