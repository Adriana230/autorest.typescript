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
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL storedProcedure
 *
 * @summary Create or update an Azure Cosmos DB SQL storedProcedure
 */
import {
  SqlStoredProcedureCreateUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//sqlResources.beginCreateUpdateSqlStoredProcedureAndWait
async function cosmosDBSqlStoredProcedureCreateUpdate() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const storedProcedureName = "storedProcedureName";
  const createUpdateSqlStoredProcedureParameters: SqlStoredProcedureCreateUpdateParameters = {
    options: {},
    resource: { body: "body", id: "storedProcedureName" }
  };
  await client.sqlResources
    .beginCreateUpdateSqlStoredProcedureAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      storedProcedureName,
      createUpdateSqlStoredProcedureParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBSqlStoredProcedureCreateUpdate();
}
main();