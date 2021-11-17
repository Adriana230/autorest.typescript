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
async function createVirtualNetworkWithSubnetContainingAddressPrefixes() {
  const resourceGroupName = "rg1";
  const virtualNetworkName = "test-vnet";
  const parameters: VirtualNetwork = {
    addressSpace: { addressPrefixes: ["10.0.0.0/16"] },
    location: "eastus",
    subnets: [
      { name: "test-2", addressPrefixes: ["10.0.0.0/28", "10.0.1.0/28"] }
    ]
  };
  await client.virtualNetworks
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      virtualNetworkName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createVirtualNetworkWithSubnetContainingAddressPrefixes();
}
main();
