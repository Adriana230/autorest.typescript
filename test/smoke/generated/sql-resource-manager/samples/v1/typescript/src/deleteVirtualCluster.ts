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
 * This sample demonstrates how to Deletes a virtual cluster.
 *
 * @summary Deletes a virtual cluster.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//virtualClusters.beginDeleteAndWait
async function deleteVirtualCluster() {
  const resourceGroupName = "testrg";
  const virtualClusterName = "vc-subnet1-f769ed71-b3ad-491a-a9d5-26eeceaa6be2";
  await client.virtualClusters
    .beginDeleteAndWait(resourceGroupName, virtualClusterName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "20d7082a-0fc7-4468-82bd-542694d5042b";
  client = new SqlManagementClient(credential, subscriptionId);
  await deleteVirtualCluster();
}
main();