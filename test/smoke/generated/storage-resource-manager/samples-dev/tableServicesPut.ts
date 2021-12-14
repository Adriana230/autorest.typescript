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
 * This sample demonstrates how to Sets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @summary Sets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 */
import {
  TableServiceProperties,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//tableServices.setServiceProperties
async function tableServicesPut() {
  const resourceGroupName = "res4410";
  const accountName = "sto8607";
  const parameters: TableServiceProperties = {
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            "x-ms-meta-abc",
            "x-ms-meta-data*",
            "x-ms-meta-target*"
          ],
          allowedMethods: ["GET", "HEAD", "POST", "OPTIONS", "MERGE", "PUT"],
          allowedOrigins: ["http://www.contoso.com", "http://www.fabrikam.com"],
          exposedHeaders: ["x-ms-meta-*"],
          maxAgeInSeconds: 100
        },
        {
          allowedHeaders: ["*"],
          allowedMethods: ["GET"],
          allowedOrigins: ["*"],
          exposedHeaders: ["*"],
          maxAgeInSeconds: 2
        },
        {
          allowedHeaders: ["x-ms-meta-12345675754564*"],
          allowedMethods: ["GET", "PUT"],
          allowedOrigins: [
            "http://www.abc23.com",
            "https://www.fabrikam.com/*"
          ],
          exposedHeaders: [
            "x-ms-meta-abc",
            "x-ms-meta-data*",
            "x-ms-meta-target*"
          ],
          maxAgeInSeconds: 2000
        }
      ]
    }
  };
  const result = await client.tableServices.setServiceProperties(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await tableServicesPut();
}
main();
