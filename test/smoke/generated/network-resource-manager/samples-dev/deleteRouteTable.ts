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
 * This sample demonstrates how to Deletes the specified route table.
 *
 * @summary Deletes the specified route table.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//routeTables.beginDeleteAndWait
async function deleteRouteTable() {
  const resourceGroupName = "rg1";
  const routeTableName = "testrt";
  const result = await client.routeTables.beginDeleteAndWait(
    resourceGroupName,
    routeTableName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteRouteTable();
}
main();
