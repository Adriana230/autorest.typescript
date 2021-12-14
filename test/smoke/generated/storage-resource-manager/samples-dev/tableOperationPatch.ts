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
 * This sample demonstrates how to Creates a new table with the specified table name, under the specified account.
 *
 * @summary Creates a new table with the specified table name, under the specified account.
 */
import { StorageManagementClient } from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//tableOperations.update
async function tableOperationPatch() {
  const resourceGroupName = "res3376";
  const accountName = "sto328";
  const tableName = "table6185";
  const result = await client.tableOperations.update(
    resourceGroupName,
    accountName,
    tableName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await tableOperationPatch();
}
main();
