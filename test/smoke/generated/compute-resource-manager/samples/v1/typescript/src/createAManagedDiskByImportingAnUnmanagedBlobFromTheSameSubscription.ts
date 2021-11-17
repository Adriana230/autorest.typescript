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
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 */
import {
  Disk,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//disks.beginCreateOrUpdateAndWait
async function createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription() {
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd"
    },
    location: "West US"
  };
  await client.disks
    .beginCreateOrUpdateAndWait(resourceGroupName, diskName, disk)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription();
}
main();
