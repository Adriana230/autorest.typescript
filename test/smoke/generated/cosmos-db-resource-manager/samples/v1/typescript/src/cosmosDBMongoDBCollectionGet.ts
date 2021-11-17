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
 * This sample demonstrates how to Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the MongoDB collection under an existing Azure Cosmos DB database account.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//mongoDBResources.getMongoDBCollection
async function cosmosDBMongoDBCollectionGet() {
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  await client.mongoDBResources
    .getMongoDBCollection(
      resourceGroupName,
      accountName,
      databaseName,
      collectionName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBMongoDBCollectionGet();
}
main();
