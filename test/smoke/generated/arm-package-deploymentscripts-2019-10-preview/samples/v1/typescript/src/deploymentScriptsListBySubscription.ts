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
 * This sample demonstrates how to Lists all deployment scripts for a given subscription.
 *
 * @summary Lists all deployment scripts for a given subscription.
 */
import { DeploymentScriptsClient } from "@msinternal/arm-package-deploymentscripts-2019-10-preview";
import { DefaultAzureCredential } from "@azure/identity";

let client: DeploymentScriptsClient;
//deploymentScripts.listBySubscription
async function deploymentScriptsListBySubscription() {
  const resArray = new Array();
  for await (let item of client.deploymentScripts.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new DeploymentScriptsClient(credential, subscriptionId);
  await deploymentScriptsListBySubscription();
}
main();