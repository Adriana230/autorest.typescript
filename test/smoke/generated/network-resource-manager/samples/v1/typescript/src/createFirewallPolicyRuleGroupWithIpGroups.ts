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
 * This sample demonstrates how to Creates or updates the specified FirewallPolicyRuleGroup.
 *
 * @summary Creates or updates the specified FirewallPolicyRuleGroup.
 */
import {
  FirewallPolicyRuleGroup,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//firewallPolicyRuleGroups.beginCreateOrUpdateAndWait
async function createFirewallPolicyRuleGroupWithIpGroups() {
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const ruleGroupName = "ruleGroup1";
  const parameters: FirewallPolicyRuleGroup = {
    priority: 110,
    rules: [
      {
        name: "Example-Filter-Rule",
        action: { type: "Deny" },
        ruleConditions: [
          {
            name: "network-condition1",
            destinationIpGroups: [
              "/subscriptions/subid/providers/Microsoft.Network/resourceGroup/rg1/ipGroups/ipGroups2"
            ],
            destinationPorts: ["*"],
            ipProtocols: ["TCP"],
            ruleConditionType: "NetworkRuleCondition",
            sourceIpGroups: [
              "/subscriptions/subid/providers/Microsoft.Network/resourceGroup/rg1/ipGroups/ipGroups1"
            ]
          }
        ],
        ruleType: "FirewallPolicyFilterRule"
      }
    ]
  };
  await client.firewallPolicyRuleGroups
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      firewallPolicyName,
      ruleGroupName,
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
  await createFirewallPolicyRuleGroupWithIpGroups();
}
main();
