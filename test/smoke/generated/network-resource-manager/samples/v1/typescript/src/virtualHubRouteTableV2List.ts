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
 * This sample demonstrates how to Retrieves the details of all VirtualHubRouteTableV2s.
 *
 * @summary Retrieves the details of all VirtualHubRouteTableV2s.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualHubRouteTableV2S.list
async function virtualHubRouteTableV2List() {
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const resArray = new Array();
  for await (let item of client.virtualHubRouteTableV2S.list(
    resourceGroupName,
    virtualHubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await virtualHubRouteTableV2List();
}
main();
