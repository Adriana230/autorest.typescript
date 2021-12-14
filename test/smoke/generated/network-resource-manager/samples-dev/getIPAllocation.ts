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
 * This sample demonstrates how to Gets the specified IpAllocation by resource group.
 *
 * @summary Gets the specified IpAllocation by resource group.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ipAllocations.get
async function getIPAllocation() {
  const resourceGroupName = "rg1";
  const ipAllocationName = "test-ipallocation";
  const result = await client.ipAllocations.get(
    resourceGroupName,
    ipAllocationName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getIPAllocation();
}
main();
