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
 * This sample demonstrates how to Gets all available service aliases for this resource group in this region.
 *
 * @summary Gets all available service aliases for this resource group in this region.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//availableServiceAliases.listByResourceGroup
async function getAvailableServiceAliasesInTheResourceGroup() {
  const resourceGroupName = "rg1";
  const location = "westcentralus";
  const resArray = new Array();
  for await (let item of client.availableServiceAliases.listByResourceGroup(
    resourceGroupName,
    location
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subId";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getAvailableServiceAliasesInTheResourceGroup();
}
main();
