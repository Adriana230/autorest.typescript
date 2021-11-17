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
 * This sample demonstrates how to Updates deployment script tags with specified values.
 *
 * @summary Updates deployment script tags with specified values.
 */
import {
  DeploymentScriptUpdateParameter,
  DeploymentScriptsClient
} from "@msinternal/arm-package-deploymentscripts-2019-10-preview";
import { DefaultAzureCredential } from "@azure/identity";

let client: DeploymentScriptsClient;
//deploymentScripts.update
async function deploymentScriptsUpdate() {
  const resourceGroupName = "script-rg";
  const scriptName = "MyDeploymentScript";
  const deploymentScript: DeploymentScriptUpdateParameter = { tags: {} };
  const options = { deploymentScript: deploymentScript };
  await client.deploymentScripts
    .update(resourceGroupName, scriptName, options)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new DeploymentScriptsClient(credential, subscriptionId);
  await deploymentScriptsUpdate();
}
main();
