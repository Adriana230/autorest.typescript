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
 * This sample demonstrates how to Gets load balancer backend address pool.
 *
 * @summary Gets load balancer backend address pool.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancerBackendAddressPools.get
async function loadBalancerBackendAddressPoolGet() {
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  await client.loadBalancerBackendAddressPools
    .get(resourceGroupName, loadBalancerName, backendAddressPoolName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await loadBalancerBackendAddressPoolGet();
}
main();
