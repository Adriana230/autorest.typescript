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
 * This sample demonstrates how to Gets a managed instance.
 *
 * @summary Gets a managed instance.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedInstances.get
async function getManagedInstance() {
  const resourceGroupName = "testrg";
  const managedInstanceName = "testinstance";
  const result = await client.managedInstances.get(
    resourceGroupName,
    managedInstanceName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "20d7082a-0fc7-4468-82bd-542694d5042b";
  client = new SqlManagementClient(credential, subscriptionId);
  await getManagedInstance();
}
main();
