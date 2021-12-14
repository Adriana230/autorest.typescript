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
 * This sample demonstrates how to Revokes access to a disk.
 *
 * @summary Revokes access to a disk.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//disks.beginRevokeAccessAndWait
async function revokeAccessToAManagedDisk() {
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const result = await client.disks.beginRevokeAccessAndWait(
    resourceGroupName,
    diskName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await revokeAccessToAManagedDisk();
}
main();
