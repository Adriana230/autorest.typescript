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
 * This sample demonstrates how to Creates or updates a virtual network in the specified resource group.
 *
 * @summary Creates or updates a virtual network in the specified resource group.
 */
import {
  VirtualNetwork,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworks.beginCreateOrUpdateAndWait
async function createVirtualNetworkWithBgpCommunities() {
  const resourceGroupName = "rg1";
  const virtualNetworkName = "test-vnet";
  const parameters: VirtualNetwork = {
    addressSpace: { addressPrefixes: ["10.0.0.0/16"] },
    bgpCommunities: { virtualNetworkCommunity: "12076:20000" },
    location: "eastus",
    subnets: [{ name: "test-1", addressPrefix: "10.0.0.0/24" }]
  };
  const result = await client.virtualNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualNetworkName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createVirtualNetworkWithBgpCommunities();
}
main();
