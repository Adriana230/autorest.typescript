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
 * This sample demonstrates how to Description for Get all the Kubernetes Environments in a resource group.
 *
 * @summary Description for Get all the Kubernetes Environments in a resource group.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//kubeEnvironments.listByResourceGroup
async function listKubeEnvironmentsByResourceGroup() {
  const resourceGroupName = "examplerg";
  const resArray = new Array();
  for await (let item of client.kubeEnvironments.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await listKubeEnvironmentsByResourceGroup();
}
main();
