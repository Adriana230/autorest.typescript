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
 * This sample demonstrates how to Retrieves the usages (most recent data) for the given database account.
 *
 * @summary Retrieves the usages (most recent data) for the given database account.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//databaseAccounts.listUsages
async function cosmosDBDatabaseAccountGetUsages() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const filter = "$filter=name.value eq 'Storage'";
  const options = { filter: filter };
  const resArray = new Array();
  for await (let item of client.databaseAccounts.listUsages(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBDatabaseAccountGetUsages();
}
main();
