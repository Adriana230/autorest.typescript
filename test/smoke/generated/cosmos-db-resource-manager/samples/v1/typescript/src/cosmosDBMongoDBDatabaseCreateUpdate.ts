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
 * This sample demonstrates how to Create or updates Azure Cosmos DB MongoDB database
 *
 * @summary Create or updates Azure Cosmos DB MongoDB database
 */
import {
  MongoDBDatabaseCreateUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//mongoDBResources.beginCreateUpdateMongoDBDatabaseAndWait
async function cosmosDBMongoDBDatabaseCreateUpdate() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const createUpdateMongoDBDatabaseParameters: MongoDBDatabaseCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: { id: "databaseName" },
    tags: {}
  };
  await client.mongoDBResources
    .beginCreateUpdateMongoDBDatabaseAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      createUpdateMongoDBDatabaseParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBMongoDBDatabaseCreateUpdate();
}
main();
