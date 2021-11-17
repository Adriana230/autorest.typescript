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
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 */
import {
  LoadBalancer,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//loadBalancers.beginCreateOrUpdateAndWait
async function createLoadBalancerWithInboundNatPool() {
  const resourceGroupName = "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [],
    frontendIPConfigurations: [
      {
        name: "test",
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test",
        privateIPAllocationMethod: "Dynamic",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/lbvnet/subnets/lbsubnet"
        },
        zones: []
      }
    ],
    inboundNatPools: [
      {
        name: "test",
        backendPort: 8888,
        enableFloatingIP: true,
        enableTcpReset: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test"
        },
        frontendPortRangeEnd: 8085,
        frontendPortRangeStart: 8080,
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/inboundNatPools/test",
        idleTimeoutInMinutes: 10,
        protocol: "Tcp"
      }
    ],
    inboundNatRules: [],
    loadBalancingRules: [],
    location: "eastus",
    outboundRules: [],
    probes: [],
    sku: { name: "Standard" }
  };
  await client.loadBalancers
    .beginCreateOrUpdateAndWait(resourceGroupName, loadBalancerName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createLoadBalancerWithInboundNatPool();
}
main();