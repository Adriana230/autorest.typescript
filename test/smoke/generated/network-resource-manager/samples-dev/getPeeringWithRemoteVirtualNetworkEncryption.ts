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
 * This sample demonstrates how to Gets the specified virtual network peering.
 *
 * @summary Gets the specified virtual network peering.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkPeerings.get
async function getPeeringWithRemoteVirtualNetworkEncryption() {
  const resourceGroupName = "peerTest";
  const virtualNetworkName = "vnet1";
  const virtualNetworkPeeringName = "peer";
  const result = await client.virtualNetworkPeerings.get(
    resourceGroupName,
    virtualNetworkName,
    virtualNetworkPeeringName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getPeeringWithRemoteVirtualNetworkEncryption();
}
main();
