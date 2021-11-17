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
 * This sample demonstrates how to Gets a collection of sync group logs.
 *
 * @summary Gets a collection of sync group logs.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//syncGroups.listLogs
async function getSyncGroupLogs() {
  const resourceGroupName = "syncgroupcrud-65440";
  const serverName = "syncgroupcrud-8475";
  const databaseName = "syncgroupcrud-4328";
  const syncGroupName = "syncgroupcrud-3187";
  const startTime = "2017-01-01T00:00:00";
  const endTime = "2017-12-31T00:00:00";
  const type = "All";
  const resArray = new Array();
  for await (let item of client.syncGroups.listLogs(
    resourceGroupName,
    serverName,
    databaseName,
    syncGroupName,
    startTime,
    endTime,
    type
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getSyncGroupLogs();
}
main();
