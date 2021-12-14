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
 * This sample demonstrates how to Deletes a virtual wan vpn gateway.
 *
 * @summary Deletes a virtual wan vpn gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//vpnGateways.beginDeleteAndWait
async function vpnGatewayDelete() {
  const resourceGroupName = "rg1";
  const gatewayName = "gateway1";
  const result = await client.vpnGateways.beginDeleteAndWait(
    resourceGroupName,
    gatewayName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await vpnGatewayDelete();
}
main();
