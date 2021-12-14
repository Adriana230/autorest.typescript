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
 * This sample demonstrates how to Update a DDoS protection plan tags.
 *
 * @summary Update a DDoS protection plan tags.
 */
import {
  TagsObject,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ddosProtectionPlans.updateTags
async function dDoSProtectionPlanUpdateTags() {
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const result = await client.ddosProtectionPlans.updateTags(
    resourceGroupName,
    ddosProtectionPlanName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await dDoSProtectionPlanUpdateTags();
}
main();
