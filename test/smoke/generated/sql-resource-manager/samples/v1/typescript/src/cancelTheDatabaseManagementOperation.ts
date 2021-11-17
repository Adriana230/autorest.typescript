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
 * This sample demonstrates how to Cancels the asynchronous operation on the database.
 *
 * @summary Cancels the asynchronous operation on the database.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databaseOperations.cancel
async function cancelTheDatabaseManagementOperation() {
  const resourceGroupName = "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-6661";
  const databaseName = "testdb";
  const operationId = "f779414b-e748-4925-8cfe-c8598f7660ae";
  await client.databaseOperations
    .cancel(resourceGroupName, serverName, databaseName, operationId)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await cancelTheDatabaseManagementOperation();
}
main();
