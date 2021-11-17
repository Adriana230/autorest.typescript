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
 * This sample demonstrates how to Gets all route tables applied to a network interface.
 *
 * @summary Gets all route tables applied to a network interface.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkInterfaces.beginGetEffectiveRouteTableAndWait
async function showNetworkInterfaceEffectiveRouteTables() {
  const resourceGroupName = "rg1";
  const networkInterfaceName = "nic1";
  await client.networkInterfaces
    .beginGetEffectiveRouteTableAndWait(resourceGroupName, networkInterfaceName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await showNetworkInterfaceEffectiveRouteTables();
}
main();
