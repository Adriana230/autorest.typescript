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
 * This sample demonstrates how to You can provide the template and parameters directly in the request or link to JSON files.
 *
 * @summary You can provide the template and parameters directly in the request or link to JSON files.
 */
import {
  Deployment,
  ResourceManagementClient
} from "@msinternal/arm-package-resources-2019-08";
import { DefaultAzureCredential } from "@azure/identity";

let client: ResourceManagementClient;
//deployments.beginCreateOrUpdateAndWait
async function createADeploymentThatWillRedeployAnotherDeploymentOnFailure() {
  const resourceGroupName = "myResourceGroup";
  const deploymentName = "exampleDeploymentName";
  const parameters: Deployment = {
    properties: {
      mode: "Complete",
      onErrorDeployment: {
        type: "SpecificDeployment",
        deploymentName: "{nameOfDeploymentToUse}"
      },
      parameters: {},
      templateLink: {}
    }
  };
  await client.deployments
    .beginCreateOrUpdateAndWait(resourceGroupName, deploymentName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscriptionId}";
  client = new ResourceManagementClient(credential, subscriptionId);
  await createADeploymentThatWillRedeployAnotherDeploymentOnFailure();
}
main();
