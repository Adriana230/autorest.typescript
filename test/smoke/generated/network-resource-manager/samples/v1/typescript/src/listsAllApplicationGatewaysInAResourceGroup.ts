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
 * This sample demonstrates how to Lists all application gateways in a resource group.
 *
 * @summary Lists all application gateways in a resource group.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGateways.list
async function listsAllApplicationGatewaysInAResourceGroup() {
  const resourceGroupName = "rg1";
  const resArray = new Array();
  for await (let item of client.applicationGateways.list(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await listsAllApplicationGatewaysInAResourceGroup();
}
main();