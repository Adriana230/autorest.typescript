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
 * This sample demonstrates how to Deletes a virtual wan p2s vpn gateway.
 *
 * @summary Deletes a virtual wan p2s vpn gateway.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//p2SVpnGateways.beginDeleteAndWait
async function p2SVpnGatewayDelete() {
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  await client.p2SVpnGateways
    .beginDeleteAndWait(resourceGroupName, gatewayName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await p2SVpnGatewayDelete();
}
main();