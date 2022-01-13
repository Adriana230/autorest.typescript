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
 * This sample demonstrates how to Creates or updates a database's blob auditing policy.
 *
 * @summary Creates or updates a database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseAzureMonitorAuditingCreateMin.json
 */
import {
  DatabaseBlobAuditingPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateADatabaseAzureMonitorAuditingPolicyWithMinimalParameters() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "blobauditingtest-4799";
  const serverName = "blobauditingtest-6440";
  const databaseName = "testdb";
  const parameters: DatabaseBlobAuditingPolicy = {
    isAzureMonitorTargetEnabled: true,
    state: "Enabled"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseBlobAuditingPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    parameters
  );
  console.log(result);
}

createOrUpdateADatabaseAzureMonitorAuditingPolicyWithMinimalParameters().catch(
  console.error
);
