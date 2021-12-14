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
 * This sample demonstrates how to Creates a new database or updates an existing database.
 *
 * @summary Creates a new database or updates an existing database.
 */
import {
  Database,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databases.beginCreateOrUpdateAndWait
async function createsADatabaseWithDefaultMode() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const parameters: Database = {
    collation: "SQL_Latin1_General_CP1_CI_AS",
    createMode: "Default",
    location: "southeastasia",
    maxSizeBytes: 1073741824,
    sku: { name: "S0", tier: "Standard" }
  };
  const result = await client.databases.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createsADatabaseWithDefaultMode();
}
main();
