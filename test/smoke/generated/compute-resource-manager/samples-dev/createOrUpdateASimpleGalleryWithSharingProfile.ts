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
 * This sample demonstrates how to Create or update a Shared Image Gallery.
 *
 * @summary Create or update a Shared Image Gallery.
 */
import {
  Gallery,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//galleries.beginCreateOrUpdateAndWait
async function createOrUpdateASimpleGalleryWithSharingProfile() {
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const gallery: Gallery = {
    description: "This is the gallery description.",
    location: "West US",
    sharingProfile: { permissions: "Groups" }
  };
  const result = await client.galleries.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    gallery
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await createOrUpdateASimpleGalleryWithSharingProfile();
}
main();
