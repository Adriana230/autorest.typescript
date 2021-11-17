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
 * This sample demonstrates how to Lists auditing settings of a database.
 *
 * @summary Lists auditing settings of a database.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databaseBlobAuditingPolicies.listByDatabase
async function listAuditSettingsOfADatabase() {
  const resourceGroupName = "blobauditingtest-6852";
  const serverName = "blobauditingtest-2080";
  const databaseName = "testdb";
  const resArray = new Array();
  for await (let item of client.databaseBlobAuditingPolicies.listByDatabase(
    resourceGroupName,
    serverName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await listAuditSettingsOfADatabase();
}
main();
