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
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 */
import {
  ElasticPool,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//elasticPools.beginCreateOrUpdateAndWait
async function createOrUpdateElasticPoolWithAllParameter() {
  const resourceGroupName = "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    location: "Japan East",
    perDatabaseSettings: { maxCapacity: 2, minCapacity: 0.25 },
    sku: { name: "GP_Gen4_2", capacity: 2, tier: "GeneralPurpose" }
  };
  await client.elasticPools
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createOrUpdateElasticPoolWithAllParameter();
}
main();
