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
 * This sample demonstrates how to The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified.
 *
 * @summary The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified.
 */
import {
  RestorePointCollection,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//restorePointCollections.createOrUpdate
async function createOrUpdateARestorePointCollection() {
  const resourceGroupName = "myResourceGroup";
  const restorePointCollectionName = "myRpc";
  const parameters: RestorePointCollection = {
    location: "norwayeast",
    source: {
      id:
        "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM"
    },
    tags: { myTag1: "tagValue1" }
  };
  const result = await client.restorePointCollections.createOrUpdate(
    resourceGroupName,
    restorePointCollectionName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await createOrUpdateARestorePointCollection();
}
main();
