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
 * This sample demonstrates how to Returns activity on databases inside of an elastic pool.
 *
 * @summary Returns activity on databases inside of an elastic pool.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//elasticPoolDatabaseActivities.listByElasticPool
async function listElasticPoolDatabaseActivity() {
  const resourceGroupName = "sqlcrudtest-4673";
  const serverName = "sqlcrudtest-603";
  const elasticPoolName = "7537";
  const resArray = new Array();
  for await (let item of client.elasticPoolDatabaseActivities.listByElasticPool(
    resourceGroupName,
    serverName,
    elasticPoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "9d4e2ad0-e20b-4464-9219-353bded52513";
  client = new SqlManagementClient(credential, subscriptionId);
  await listElasticPoolDatabaseActivity();
}
main();
