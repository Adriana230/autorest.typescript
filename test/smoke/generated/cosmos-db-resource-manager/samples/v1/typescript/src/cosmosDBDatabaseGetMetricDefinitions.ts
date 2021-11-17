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
 * This sample demonstrates how to Retrieves metric definitions for the given database.
 *
 * @summary Retrieves metric definitions for the given database.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//database.listMetricDefinitions
async function cosmosDBDatabaseGetMetricDefinitions() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseRid = "databaseRid";
  const resArray = new Array();
  for await (let item of client.database.listMetricDefinitions(
    resourceGroupName,
    accountName,
    databaseRid
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBDatabaseGetMetricDefinitions();
}
main();