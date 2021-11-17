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
 * This sample demonstrates how to Gets associated load balancer network interfaces.
 *
 * @summary Gets associated load balancer network interfaces.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancerNetworkInterfaces.list
async function loadBalancerNetworkInterfaceListVmss() {
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const resArray = new Array();
  for await (let item of client.loadBalancerNetworkInterfaces.list(
    resourceGroupName,
    loadBalancerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await loadBalancerNetworkInterfaceListVmss();
}
main();
