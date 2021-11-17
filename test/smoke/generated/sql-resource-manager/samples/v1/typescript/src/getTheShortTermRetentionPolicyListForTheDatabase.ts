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
 * This sample demonstrates how to Gets a dropped database's short term retention policy list.
 *
 * @summary Gets a dropped database's short term retention policy list.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies.listByRestorableDroppedDatabase
async function getTheShortTermRetentionPolicyListForTheDatabase() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const managedInstanceName = "testsvr";
  const restorableDroppedDatabaseId = "testdb,131403269876900000";
  const resArray = new Array();
  for await (let item of client.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies.listByRestorableDroppedDatabase(
    resourceGroupName,
    managedInstanceName,
    restorableDroppedDatabaseId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getTheShortTermRetentionPolicyListForTheDatabase();
}
main();