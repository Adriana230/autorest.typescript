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
 * This sample demonstrates how to Deletes a cloud service.
 *
 * @summary Deletes a cloud service.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//cloudServices.beginDeleteAndWait
async function deleteCloudService() {
  const resourceGroupName = "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const result = await client.cloudServices.beginDeleteAndWait(
    resourceGroupName,
    cloudServiceName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await deleteCloudService();
}
main();
