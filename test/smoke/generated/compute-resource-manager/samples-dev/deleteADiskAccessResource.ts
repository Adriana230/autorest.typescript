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
 * This sample demonstrates how to Deletes a disk access resource.
 *
 * @summary Deletes a disk access resource.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//diskAccesses.beginDeleteAndWait
async function deleteADiskAccessResource() {
  const resourceGroupName = "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const result = await client.diskAccesses.beginDeleteAndWait(
    resourceGroupName,
    diskAccessName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await deleteADiskAccessResource();
}
main();
