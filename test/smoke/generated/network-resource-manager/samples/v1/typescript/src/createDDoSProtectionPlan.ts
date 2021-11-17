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
 * This sample demonstrates how to Creates or updates a DDoS protection plan.
 *
 * @summary Creates or updates a DDoS protection plan.
 */
import {
  DdosProtectionPlan,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ddosProtectionPlans.beginCreateOrUpdateAndWait
async function createDDoSProtectionPlan() {
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  const parameters: DdosProtectionPlan = { location: "westus" };
  await client.ddosProtectionPlans
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      ddosProtectionPlanName,
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
  await createDDoSProtectionPlan();
}
main();