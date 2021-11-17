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
 * This sample demonstrates how to Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//tableResources.getTableThroughput
async function cosmosDBTableThroughputGet() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const tableName = "tableName";
  await client.tableResources
    .getTableThroughput(resourceGroupName, accountName, tableName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBTableThroughputGet();
}
main();
