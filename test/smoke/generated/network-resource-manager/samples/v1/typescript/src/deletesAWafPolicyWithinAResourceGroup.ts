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
 * This sample demonstrates how to Deletes Policy.
 *
 * @summary Deletes Policy.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//webApplicationFirewallPolicies.beginDeleteAndWait
async function deletesAWafPolicyWithinAResourceGroup() {
  const resourceGroupName = "rg1";
  const policyName = "Policy1";
  await client.webApplicationFirewallPolicies
    .beginDeleteAndWait(resourceGroupName, policyName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deletesAWafPolicyWithinAResourceGroup();
}
main();
