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
 * This sample demonstrates how to Updates (patches) a snapshot.
 *
 * @summary Updates (patches) a snapshot.
 */
import {
  SnapshotUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//snapshots.beginUpdateAndWait
async function updateASnapshot() {
  const resourceGroupName = "myResourceGroup";
  const snapshotName = "mySnapshot";
  const snapshot: SnapshotUpdate = {
    diskSizeGB: 20,
    tags: { department: "Development", project: "UpdateSnapshots" }
  };
  const result = await client.snapshots.beginUpdateAndWait(
    resourceGroupName,
    snapshotName,
    snapshot
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateASnapshot();
}
main();
