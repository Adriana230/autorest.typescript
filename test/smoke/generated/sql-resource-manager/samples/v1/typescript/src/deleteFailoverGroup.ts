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
 * This sample demonstrates how to Deletes a failover group.
 *
 * @summary Deletes a failover group.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//instanceFailoverGroups.beginDeleteAndWait
async function deleteFailoverGroup() {
  const resourceGroupName = "Default";
  const locationName = "Japan East";
  const failoverGroupName = "failover-group-test-1";
  await client.instanceFailoverGroups
    .beginDeleteAndWait(resourceGroupName, locationName, failoverGroupName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await deleteFailoverGroup();
}
main();