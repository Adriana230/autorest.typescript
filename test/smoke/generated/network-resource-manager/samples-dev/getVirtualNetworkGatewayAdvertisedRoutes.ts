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
 * This sample demonstrates how to This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 *
 * @summary This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGateways.beginGetAdvertisedRoutesAndWait
async function getVirtualNetworkGatewayAdvertisedRoutes() {
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const peer = "test";
  const result = await client.virtualNetworkGateways.beginGetAdvertisedRoutesAndWait(
    resourceGroupName,
    virtualNetworkGatewayName,
    peer
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getVirtualNetworkGatewayAdvertisedRoutes();
}
main();
