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
 * This sample demonstrates how to Gets the specified load balancer load balancing rule.
 *
 * @summary Gets the specified load balancer load balancing rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/LoadBalancerLoadBalancingRuleGet.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function loadBalancerLoadBalancingRuleGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb1";
  const loadBalancingRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerLoadBalancingRules.get(
    resourceGroupName,
    loadBalancerName,
    loadBalancingRuleName
  );
  console.log(result);
}

loadBalancerLoadBalancingRuleGet().catch(console.error);
