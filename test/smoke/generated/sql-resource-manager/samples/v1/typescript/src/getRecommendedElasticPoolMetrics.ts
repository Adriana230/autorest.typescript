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
 * This sample demonstrates how to Returns recommended elastic pool metrics.
 *
 * @summary Returns recommended elastic pool metrics.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//recommendedElasticPools.listMetrics
async function getRecommendedElasticPoolMetrics() {
  const resourceGroupName = "sqlcrudtest-6852";
  const serverName = "sqlcrudtest-2080";
  const recommendedElasticPoolName = "sqlcrudtest-2080_pool1";
  const resArray = new Array();
  for await (let item of client.recommendedElasticPools.listMetrics(
    resourceGroupName,
    serverName,
    recommendedElasticPoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getRecommendedElasticPoolMetrics();
}
main();
