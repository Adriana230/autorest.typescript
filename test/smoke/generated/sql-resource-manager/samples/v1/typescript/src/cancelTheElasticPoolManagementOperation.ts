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
 * This sample demonstrates how to Cancels the asynchronous operation on the elastic pool.
 *
 * @summary Cancels the asynchronous operation on the elastic pool.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//elasticPoolOperations.cancel
async function cancelTheElasticPoolManagementOperation() {
  const resourceGroupName = "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-6661";
  const elasticPoolName = "testpool";
  const operationId = "f779414b-e748-4925-8cfe-c8598f7660ae";
  await client.elasticPoolOperations
    .cancel(resourceGroupName, serverName, elasticPoolName, operationId)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await cancelTheElasticPoolManagementOperation();
}
main();
