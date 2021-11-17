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
 * This sample demonstrates how to Retrieves the details of a RouteTable.
 *
 * @summary Retrieves the details of a RouteTable.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//hubRouteTables.get
async function routeTableGet() {
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const routeTableName = "hubRouteTable1";
  await client.hubRouteTables
    .get(resourceGroupName, virtualHubName, routeTableName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await routeTableGet();
}
main();
