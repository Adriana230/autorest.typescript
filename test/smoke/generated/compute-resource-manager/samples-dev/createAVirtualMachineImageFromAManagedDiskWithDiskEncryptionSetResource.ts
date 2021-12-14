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
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 */
import {
  Image,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//images.beginCreateOrUpdateAndWait
async function createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource() {
  const resourceGroupName = "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        diskEncryptionSet: {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
        },
        managedDisk: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk"
        },
        osState: "Generalized",
        osType: "Linux"
      }
    }
  };
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource();
}
main();
