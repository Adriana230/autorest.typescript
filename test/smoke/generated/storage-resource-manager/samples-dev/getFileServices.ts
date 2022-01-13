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
 * This sample demonstrates how to Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 *
 * @summary Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/FileServicesGet.json
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getFileServices() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res4410";
  const accountName = "sto8607";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileServices.getServiceProperties(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

getFileServices().catch(console.error);
