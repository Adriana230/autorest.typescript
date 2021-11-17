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
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given database account and database.
 *
 * @summary Retrieves the metrics determined by the given filter for the given database account and database.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//database.listMetrics
async function cosmosDBDatabaseGetMetrics() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseRid = "rid";
  const filter =
    "$filter=(name.value eq 'Total Requests') and timeGrain eq duration'PT5M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T00:13:55.2780000Z";
  const resArray = new Array();
  for await (let item of client.database.listMetrics(
    resourceGroupName,
    accountName,
    databaseRid,
    filter
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBDatabaseGetMetrics();
}
main();
