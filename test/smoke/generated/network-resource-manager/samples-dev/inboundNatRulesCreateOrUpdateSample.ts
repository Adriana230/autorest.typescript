/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  InboundNatRule,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a load balancer inbound NAT rule.
 *
 * @summary Creates or updates a load balancer inbound NAT rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/InboundNatRuleCreate.json
 */
async function inboundNatRuleCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb1";
  const inboundNatRuleName = "natRule1.1";
  const inboundNatRuleParameters: InboundNatRule = {
    backendPort: 3389,
    enableFloatingIP: false,
    enableTcpReset: false,
    frontendIPConfiguration: {
      id:
        "/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb1/frontendIPConfigurations/ip1"
    },
    frontendPort: 3390,
    idleTimeoutInMinutes: 4,
    protocol: "Tcp"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.inboundNatRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    inboundNatRuleName,
    inboundNatRuleParameters
  );
  console.log(result);
}

inboundNatRuleCreate().catch(console.error);
