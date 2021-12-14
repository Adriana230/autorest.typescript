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
 * This sample demonstrates how to Updates (patches) a disk.
 *
 * @summary Updates (patches) a disk.
 */
import {
  DiskUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//disks.beginUpdateAndWait
async function updateManagedDiskToRemoveDiskAccessResourceAssociation() {
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: DiskUpdate = { networkAccessPolicy: "AllowAll" };
  const result = await client.disks.beginUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateManagedDiskToRemoveDiskAccessResourceAssociation();
}
main();
