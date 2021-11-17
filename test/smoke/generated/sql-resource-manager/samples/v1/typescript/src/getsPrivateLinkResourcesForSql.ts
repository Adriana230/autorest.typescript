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
 * This sample demonstrates how to Gets the private link resources for SQL server.
 *
 * @summary Gets the private link resources for SQL server.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//privateLinkResources.listByServer
async function getsPrivateLinkResourcesForSql() {
  const resourceGroupName = "Default";
  const serverName = "test-svr";
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByServer(
    resourceGroupName,
    serverName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getsPrivateLinkResourcesForSql();
}
main();