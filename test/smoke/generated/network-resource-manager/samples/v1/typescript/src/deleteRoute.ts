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
 * This sample demonstrates how to Deletes the specified route from a route table.
 *
 * @summary Deletes the specified route from a route table.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//routes.beginDeleteAndWait
async function deleteRoute() {
  const resourceGroupName = "rg1";
  const routeTableName = "testrt";
  const routeName = "route1";
  await client.routes
    .beginDeleteAndWait(resourceGroupName, routeTableName, routeName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteRoute();
}
main();