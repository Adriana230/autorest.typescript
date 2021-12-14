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
 * This sample demonstrates how to Gets information about a snapshot.
 *
 * @summary Gets information about a snapshot.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//snapshots.get
async function getInformationAboutASnapshot() {
  const resourceGroupName = "myResourceGroup";
  const snapshotName = "mySnapshot";
  const result = await client.snapshots.get(resourceGroupName, snapshotName);
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await getInformationAboutASnapshot();
}
main();
