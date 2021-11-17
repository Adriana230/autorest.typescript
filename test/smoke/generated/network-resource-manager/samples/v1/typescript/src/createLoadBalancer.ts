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
async function createLoadBalancer() {
  const resourceGroupName = "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [{ name: "be-lb" }],
    frontendIPConfigurations: [
      {
        name: "fe-lb",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb"
        }
      }
    ],
    inboundNatPools: [],
    inboundNatRules: [
      {
        name: "in-nat-rule",
        backendPort: 3389,
        enableFloatingIP: true,
        enableTcpReset: false,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 3389,
        idleTimeoutInMinutes: 15,
        protocol: "Tcp"
      }
    ],
    loadBalancingRules: [
      {
        name: "rulelb",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        backendPort: 80,
        enableFloatingIP: true,
        enableTcpReset: false,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 80,
        idleTimeoutInMinutes: 15,
        loadDistribution: "Default",
        probe: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb"
        },
        protocol: "Tcp"
      }
    ],
    location: "eastus",
    probes: [
      {
        name: "probe-lb",
        intervalInSeconds: 15,
        numberOfProbes: 2,
        port: 80,
        requestPath: "healthcheck.aspx",
        protocol: "Http"
      }
    ]
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
  await createLoadBalancer();
}
main();
