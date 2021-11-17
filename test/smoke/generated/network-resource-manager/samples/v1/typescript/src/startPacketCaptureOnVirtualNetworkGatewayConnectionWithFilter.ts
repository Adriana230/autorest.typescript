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
 * This sample demonstrates how to Starts packet capture on virtual network gateway connection in the specified resource group.
 *
 * @summary Starts packet capture on virtual network gateway connection in the specified resource group.
 */
import {
  VpnPacketCaptureStartParameters,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGatewayConnections.beginStartPacketCaptureAndWait
async function startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter() {
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "vpngwcn1";
  const parameters: VpnPacketCaptureStartParameters = {
    filterData:
      "{'TracingFlags': 11,'MaxPacketBufferSize': 120,'MaxFileSize': 200,'Filters': [{'SourceSubnets': ['20.1.1.0/24'],'DestinationSubnets': ['10.1.1.0/24'],'SourcePort': [500],'DestinationPort': [4500],'Protocol': 6,'TcpFlags': 16,'CaptureSingleDirectionTrafficOnly': true}]}"
  };
  const options = { parameters: parameters };
  await client.virtualNetworkGatewayConnections
    .beginStartPacketCaptureAndWait(
      resourceGroupName,
      virtualNetworkGatewayConnectionName,
      options
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter();
}
main();