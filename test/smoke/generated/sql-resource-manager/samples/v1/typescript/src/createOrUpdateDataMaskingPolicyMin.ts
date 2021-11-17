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
 * This sample demonstrates how to Creates or updates a database data masking policy
 *
 * @summary Creates or updates a database data masking policy
 */
import {
  DataMaskingPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//dataMaskingPolicies.createOrUpdate
async function createOrUpdateDataMaskingPolicyMin() {
  const resourceGroupName = "sqlcrudtest-6852";
  const serverName = "sqlcrudtest-2080";
  const databaseName = "sqlcrudtest-331";
  const parameters: DataMaskingPolicy = { dataMaskingState: "Enabled" };
  await client.dataMaskingPolicies
    .createOrUpdate(resourceGroupName, serverName, databaseName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createOrUpdateDataMaskingPolicyMin();
}
main();
