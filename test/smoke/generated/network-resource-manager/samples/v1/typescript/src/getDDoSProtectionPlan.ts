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
 * This sample demonstrates how to Gets information about the specified DDoS protection plan.
 *
 * @summary Gets information about the specified DDoS protection plan.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ddosProtectionPlans.get
async function getDDoSProtectionPlan() {
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  await client.ddosProtectionPlans
    .get(resourceGroupName, ddosProtectionPlanName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getDDoSProtectionPlan();
}
main();
