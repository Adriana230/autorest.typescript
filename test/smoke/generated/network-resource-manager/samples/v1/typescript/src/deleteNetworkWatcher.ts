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
 * This sample demonstrates how to Deletes the specified network watcher resource.
 *
 * @summary Deletes the specified network watcher resource.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkWatchers.beginDeleteAndWait
async function deleteNetworkWatcher() {
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  await client.networkWatchers
    .beginDeleteAndWait(resourceGroupName, networkWatcherName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteNetworkWatcher();
}
main();