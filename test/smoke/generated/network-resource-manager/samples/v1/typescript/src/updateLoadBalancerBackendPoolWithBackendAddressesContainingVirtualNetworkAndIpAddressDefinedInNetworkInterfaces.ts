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
 * This sample demonstrates how to Creates or updates a load balancer backend address pool.
 *
 * @summary Creates or updates a load balancer backend address pool.
 */
import {
  BackendAddressPool,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancerBackendAddressPools.beginCreateOrUpdateAndWait
async function updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces() {
  const resourceGroupName = "rg1";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const parameters: BackendAddressPool = {
    loadBalancerBackendAddresses: [
      {
        name: "address1",
        networkInterfaceIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkInterfaces/vnetlb/ipConfigurations/ipconfig1"
        }
      },
      {
        name: "address2",
        networkInterfaceIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkInterfaces/vnetlb/ipConfigurations/ipconfig2"
        }
      }
    ]
  };
  await client.loadBalancerBackendAddressPools
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName,
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
  await updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces();
}
main();
