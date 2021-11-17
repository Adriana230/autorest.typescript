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
 * This sample demonstrates how to Deletes the specified load balancer backend address pool.
 *
 * @summary Deletes the specified load balancer backend address pool.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancerBackendAddressPools.beginDeleteAndWait
async function backendAddressPoolDelete() {
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  await client.loadBalancerBackendAddressPools
    .beginDeleteAndWait(
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await backendAddressPoolDelete();
}
main();