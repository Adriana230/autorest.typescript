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
 * This sample demonstrates how to Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the connection strings for the specified Azure Cosmos DB database account.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//databaseAccounts.listConnectionStrings
async function cosmosDBDatabaseAccountListConnectionStringsMongo() {
  const resourceGroupName = "rg1";
  const accountName = "mongo-ddb1";
  await client.databaseAccounts
    .listConnectionStrings(resourceGroupName, accountName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBDatabaseAccountListConnectionStringsMongo();
}
main();