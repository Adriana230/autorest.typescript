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
 * This sample demonstrates how to Failovers a database.
 *
 * @summary Failovers a database.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databases.beginFailoverAndWait
async function failoverAnDatabase() {
  const resourceGroupName = "group1";
  const serverName = "testServer";
  const databaseName = "testDatabase";
  const replicaType = "Primary";
  const options = { replicaType: replicaType };
  const result = await client.databases.beginFailoverAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    options
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await failoverAnDatabase();
}
main();
