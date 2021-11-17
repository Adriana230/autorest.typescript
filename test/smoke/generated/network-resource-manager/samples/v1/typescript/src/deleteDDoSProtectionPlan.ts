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
 * This sample demonstrates how to Deletes the specified DDoS protection plan.
 *
 * @summary Deletes the specified DDoS protection plan.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ddosProtectionPlans.beginDeleteAndWait
async function deleteDDoSProtectionPlan() {
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  await client.ddosProtectionPlans
    .beginDeleteAndWait(resourceGroupName, ddosProtectionPlanName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteDDoSProtectionPlan();
}
main();
