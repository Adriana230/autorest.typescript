/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a virtual wan p2s vpn gateway.
 *
 * @summary Deletes a virtual wan p2s vpn gateway.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/P2SVpnGatewayDelete.json
 */
async function p2SVpnGatewayDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginDeleteAndWait(
    resourceGroupName,
    gatewayName
  );
  console.log(result);
}

p2SVpnGatewayDelete().catch(console.error);
