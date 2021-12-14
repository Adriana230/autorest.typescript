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
 * This sample demonstrates how to Creates or updates an private endpoint in the specified resource group.
 *
 * @summary Creates or updates an private endpoint in the specified resource group.
 */
import {
  PrivateEndpoint,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//privateEndpoints.beginCreateOrUpdateAndWait
async function createPrivateEndpointWithManualApprovalConnection() {
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const parameters: PrivateEndpoint = {
    customNetworkInterfaceName: "testPeNic",
    ipConfigurations: [
      {
        name: "pestaticconfig",
        groupId: "file",
        memberName: "file",
        privateIPAddress: "192.168.0.5"
      }
    ],
    location: "eastus",
    manualPrivateLinkServiceConnections: [
      {
        groupIds: ["groupIdFromResource"],
        privateLinkServiceId:
          "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls",
        requestMessage: "Please manually approve my connection."
      }
    ],
    subnet: {
      id:
        "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet"
    }
  };
  const result = await client.privateEndpoints.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateEndpointName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subId";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createPrivateEndpointWithManualApprovalConnection();
}
main();
