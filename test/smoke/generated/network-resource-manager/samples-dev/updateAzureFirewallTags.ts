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
 * This sample demonstrates how to Updates tags of an Azure Firewall resource.
 *
 * @summary Updates tags of an Azure Firewall resource.
 */
import {
  TagsObject,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//azureFirewalls.beginUpdateTagsAndWait
async function updateAzureFirewallTags() {
  const resourceGroupName = "azfwtest";
  const azureFirewallName = "fw1";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  const result = await client.azureFirewalls.beginUpdateTagsAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await updateAzureFirewallTags();
}
main();
