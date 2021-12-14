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
 * This sample demonstrates how to Gets a restore point.
 *
 * @summary Gets a restore point.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//restorePoints.get
async function getsADatawarehouseDatabaseRestorePoint() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const serverName = "testserver";
  const databaseName = "testDatabase";
  const restorePointName = "131546477590000000";
  const result = await client.restorePoints.get(
    resourceGroupName,
    serverName,
    databaseName,
    restorePointName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getsADatawarehouseDatabaseRestorePoint();
}
main();
