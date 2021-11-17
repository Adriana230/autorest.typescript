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
 * This sample demonstrates how to Lists the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the Gremlin graph under an existing Azure Cosmos DB database account.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//gremlinResources.listGremlinGraphs
async function cosmosDBGremlinGraphList() {
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const resArray = new Array();
  for await (let item of client.gremlinResources.listGremlinGraphs(
    resourceGroupName,
    accountName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBGremlinGraphList();
}
main();
