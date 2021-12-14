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
 * This sample demonstrates how to Gets the user activities of a data warehouse which includes running and suspended queries
 *
 * @summary Gets the user activities of a data warehouse which includes running and suspended queries
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//dataWarehouseUserActivitiesOperations.get
async function getTheListOfTheUserActivitiesOfADataWarehouse() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const dataWarehouseUserActivityName = "current";
  const result = await client.dataWarehouseUserActivitiesOperations.get(
    resourceGroupName,
    serverName,
    databaseName,
    dataWarehouseUserActivityName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getTheListOfTheUserActivitiesOfADataWarehouse();
}
main();
