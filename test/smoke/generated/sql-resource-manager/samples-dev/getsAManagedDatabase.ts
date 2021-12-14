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
 * This sample demonstrates how to Gets a managed database.
 *
 * @summary Gets a managed database.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedDatabases.get
async function getsAManagedDatabase() {
  const resourceGroupName = "Test1";
  const managedInstanceName = "managedInstance";
  const databaseName = "managedDatabase";
  const result = await client.managedDatabases.get(
    resourceGroupName,
    managedInstanceName,
    databaseName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getsAManagedDatabase();
}
main();
