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
 * This sample demonstrates how to Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//mongoDBResources.getMongoDBDatabaseThroughput
async function cosmosDBMongoDBDatabaseThroughputGet() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  await client.mongoDBResources
    .getMongoDBDatabaseThroughput(resourceGroupName, accountName, databaseName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBMongoDBDatabaseThroughputGet();
}
main();