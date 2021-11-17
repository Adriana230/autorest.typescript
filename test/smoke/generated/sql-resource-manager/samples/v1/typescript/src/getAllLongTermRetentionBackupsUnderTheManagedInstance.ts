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
 * This sample demonstrates how to Lists the long term retention backups for a given managed instance.
 *
 * @summary Lists the long term retention backups for a given managed instance.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//longTermRetentionManagedInstanceBackups.listByResourceGroupInstance
async function getAllLongTermRetentionBackupsUnderTheManagedInstance() {
  const resourceGroupName = "testResourceGroup";
  const locationName = "japaneast";
  const managedInstanceName = "testInstance";
  const resArray = new Array();
  for await (let item of client.longTermRetentionManagedInstanceBackups.listByResourceGroupInstance(
    resourceGroupName,
    locationName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getAllLongTermRetentionBackupsUnderTheManagedInstance();
}
main();
