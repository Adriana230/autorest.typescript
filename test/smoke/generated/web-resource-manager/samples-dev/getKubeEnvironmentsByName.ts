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
 * This sample demonstrates how to Description for Get the properties of a Kubernetes Environment.
 *
 * @summary Description for Get the properties of a Kubernetes Environment.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//kubeEnvironments.get
async function getKubeEnvironmentsByName() {
  const resourceGroupName = "examplerg";
  const name = "jlaw-demo1";
  const result = await client.kubeEnvironments.get(resourceGroupName, name);
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getKubeEnvironmentsByName();
}
main();
