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
 * This sample demonstrates how to Creates or updates a network security group in the specified resource group.
 *
 * @summary Creates or updates a network security group in the specified resource group.
 */
import {
  NetworkSecurityGroup,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkSecurityGroups.beginCreateOrUpdateAndWait
async function createNetworkSecurityGroupWithRule() {
  const resourceGroupName = "rg1";
  const networkSecurityGroupName = "testnsg";
  const parameters: NetworkSecurityGroup = {
    location: "eastus",
    securityRules: [
      {
        name: "rule1",
        access: "Allow",
        destinationAddressPrefix: "*",
        destinationPortRange: "80",
        direction: "Inbound",
        priority: 130,
        sourceAddressPrefix: "*",
        sourcePortRange: "*",
        protocol: "*"
      }
    ]
  };
  await client.networkSecurityGroups
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      networkSecurityGroupName,
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
  await createNetworkSecurityGroupWithRule();
}
main();
