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
 * This sample demonstrates how to Gets all the connections in a virtual network gateway.
 *
 * @summary Gets all the connections in a virtual network gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGateways.listConnections
async function virtualNetworkGatewaysListConnections() {
  const resourceGroupName = "testrg";
  const virtualNetworkGatewayName = "test-vpn-gateway-1";
  const resArray = new Array();
  for await (let item of client.virtualNetworkGateways.listConnections(
    resourceGroupName,
    virtualNetworkGatewayName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await virtualNetworkGatewaysListConnections();
}
main();
