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
 * This sample demonstrates how to Gets information about a disk access resource.
 *
 * @summary Gets information about a disk access resource.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//diskAccesses.get
async function getInformationAboutADiskAccessResource() {
  const resourceGroupName = "myResourceGroup";
  const diskAccessName = "myDiskAccess";
  const result = await client.diskAccesses.get(
    resourceGroupName,
    diskAccessName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await getInformationAboutADiskAccessResource();
}
main();
