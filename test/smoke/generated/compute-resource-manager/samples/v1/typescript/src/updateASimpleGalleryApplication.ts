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
 * This sample demonstrates how to Update a gallery Application Definition.
 *
 * @summary Update a gallery Application Definition.
 */
import {
  GalleryApplicationUpdate,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//galleryApplications.beginUpdateAndWait
async function updateASimpleGalleryApplication() {
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplication: GalleryApplicationUpdate = {
    description: "This is the gallery application description.",
    eula: "This is the gallery application EULA.",
    privacyStatementUri: "myPrivacyStatementUri}",
    releaseNoteUri: "myReleaseNoteUri",
    supportedOSType: "Windows"
  };
  await client.galleryApplications
    .beginUpdateAndWait(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplication
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await updateASimpleGalleryApplication();
}
main();
