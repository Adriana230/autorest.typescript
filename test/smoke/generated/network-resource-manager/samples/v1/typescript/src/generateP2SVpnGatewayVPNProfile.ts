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
 * This sample demonstrates how to Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 *
 * @summary Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
 */
import {
  P2SVpnProfileParameters,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//p2SVpnGateways.beginGenerateVpnProfileAndWait
async function generateP2SVpnGatewayVPNProfile() {
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  const parameters: P2SVpnProfileParameters = {
    authenticationMethod: "EAPTLS"
  };
  await client.p2SVpnGateways
    .beginGenerateVpnProfileAndWait(resourceGroupName, gatewayName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await generateP2SVpnGatewayVPNProfile();
}
main();
