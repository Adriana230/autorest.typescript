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
 * This sample demonstrates how to Delete a gallery Application.
 *
 * @summary Delete a gallery Application.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//galleryApplications.beginDeleteAndWait
async function deleteAGalleryApplication() {
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  await client.galleryApplications
    .beginDeleteAndWait(resourceGroupName, galleryName, galleryApplicationName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await deleteAGalleryApplication();
}
main();