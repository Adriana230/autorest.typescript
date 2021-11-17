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
 * This sample demonstrates how to The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.
 *
 * @summary The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider.
 */
import {
  ConnectionSharedKey,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGatewayConnections.beginSetSharedKeyAndWait
async function setVirtualNetworkGatewayConnectionSharedKey() {
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "connS2S";
  const parameters: ConnectionSharedKey = { value: "AzureAbc123" };
  await client.virtualNetworkGatewayConnections
    .beginSetSharedKeyAndWait(
      resourceGroupName,
      virtualNetworkGatewayConnectionName,
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
  await setVirtualNetworkGatewayConnectionSharedKey();
}
main();
