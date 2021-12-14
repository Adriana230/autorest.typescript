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
 * This sample demonstrates how to Deletes the specified Virtual Router.
 *
 * @summary Deletes the specified Virtual Router.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualRouters.beginDeleteAndWait
async function deleteVirtualRouter() {
  const resourceGroupName = "rg1";
  const virtualRouterName = "virtualRouter";
  const result = await client.virtualRouters.beginDeleteAndWait(
    resourceGroupName,
    virtualRouterName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await deleteVirtualRouter();
}
main();
