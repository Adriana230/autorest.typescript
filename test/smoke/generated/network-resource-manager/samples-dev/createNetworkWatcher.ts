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
 * This sample demonstrates how to Creates or updates a network watcher in the specified resource group.
 *
 * @summary Creates or updates a network watcher in the specified resource group.
 */
import {
  NetworkWatcher,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkWatchers.createOrUpdate
async function createNetworkWatcher() {
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  const parameters: NetworkWatcher = { location: "eastus" };
  const result = await client.networkWatchers.createOrUpdate(
    resourceGroupName,
    networkWatcherName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createNetworkWatcher();
}
main();
