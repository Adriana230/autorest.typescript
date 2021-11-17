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
  ManagedDatabase,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedDatabases.beginCreateOrUpdateAndWait
async function createsANewManagedDatabaseByRestoringFromAnExternalBackup() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const managedInstanceName = "managedInstance";
  const databaseName = "managedDatabase";
  const parameters: ManagedDatabase = {
    collation: "SQL_Latin1_General_CP1_CI_AS",
    createMode: "RestoreExternalBackup",
    location: "southeastasia",
    storageContainerSasToken: "sv=2015-12-11&sr=c&sp=rl&sig=1234",
    storageContainerUri: "https://myaccountname.blob.core.windows.net/backups"
  };
  await client.managedDatabases
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createsANewManagedDatabaseByRestoringFromAnExternalBackup();
}
main();
