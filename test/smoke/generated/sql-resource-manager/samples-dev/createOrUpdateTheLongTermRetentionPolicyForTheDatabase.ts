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
 * This sample demonstrates how to Sets a database's long term retention policy.
 *
 * @summary Sets a database's long term retention policy.
 */
import {
  LongTermRetentionPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//longTermRetentionPolicies.beginCreateOrUpdateAndWait
async function createOrUpdateTheLongTermRetentionPolicyForTheDatabase() {
  const resourceGroupName = "resourceGroup";
  const serverName = "testserver";
  const databaseName = "testDatabase";
  const policyName = "default";
  const parameters: LongTermRetentionPolicy = {
    monthlyRetention: "P1Y",
    weekOfYear: 5,
    weeklyRetention: "P1M",
    yearlyRetention: "P5Y"
  };
  const result = await client.longTermRetentionPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    policyName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createOrUpdateTheLongTermRetentionPolicyForTheDatabase();
}
main();
