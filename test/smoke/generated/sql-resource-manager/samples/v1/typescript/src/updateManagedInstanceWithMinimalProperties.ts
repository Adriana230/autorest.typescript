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
 * This sample demonstrates how to Updates a managed instance.
 *
 * @summary Updates a managed instance.
 */
import {
  ManagedInstanceUpdate,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedInstances.beginUpdateAndWait
async function updateManagedInstanceWithMinimalProperties() {
  const resourceGroupName = "testrg";
  const managedInstanceName = "testinstance";
  const parameters: ManagedInstanceUpdate = { tags: { tagKey1: "TagValue1" } };
  await client.managedInstances
    .beginUpdateAndWait(resourceGroupName, managedInstanceName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "20D7082A-0FC7-4468-82BD-542694D5042B";
  client = new SqlManagementClient(credential, subscriptionId);
  await updateManagedInstanceWithMinimalProperties();
}
main();
