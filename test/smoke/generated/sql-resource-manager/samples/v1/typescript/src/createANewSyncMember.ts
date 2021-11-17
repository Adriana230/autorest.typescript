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
 * This sample demonstrates how to Creates or updates a sync member.
 *
 * @summary Creates or updates a sync member.
 */
import {
  SyncMember,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//syncMembers.beginCreateOrUpdateAndWait
async function createANewSyncMember() {
  const resourceGroupName = "syncgroupcrud-65440";
  const serverName = "syncgroupcrud-8475";
  const databaseName = "syncgroupcrud-4328";
  const syncGroupName = "syncgroupcrud-3187";
  const syncMemberName = "syncgroupcrud-4879";
  const parameters: SyncMember = {
    databaseName: "syncgroupcrud-7421",
    databaseType: "AzureSqlDatabase",
    serverName: "syncgroupcrud-3379.database.windows.net",
    syncDirection: "Bidirectional",
    syncState: "UnProvisioned",
    userName: "myUser"
  };
  await client.syncMembers
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      databaseName,
      syncGroupName,
      syncMemberName,
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
  await createANewSyncMember();
}
main();
