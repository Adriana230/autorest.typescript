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
 * This sample demonstrates how to Starts the notebook workspace
 *
 * @summary Starts the notebook workspace
 */
import { CosmosDBManagementClient } from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//notebookWorkspaces.beginStartAndWait
async function cosmosDBNotebookWorkspaceStart() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const notebookWorkspaceName = "default";
  await client.notebookWorkspaces
    .beginStartAndWait(resourceGroupName, accountName, notebookWorkspaceName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBNotebookWorkspaceStart();
}
main();
