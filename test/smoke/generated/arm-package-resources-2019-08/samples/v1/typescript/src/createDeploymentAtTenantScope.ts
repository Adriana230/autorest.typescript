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
  ScopedDeployment,
  ResourceManagementClient
} from "@msinternal/arm-package-resources-2019-08";
import { DefaultAzureCredential } from "@azure/identity";

let client: ResourceManagementClient;
//deployments.beginCreateOrUpdateAtTenantScopeAndWait
async function createDeploymentAtTenantScope() {
  const deploymentName = "tenant-dep01";
  const parameters: ScopedDeployment = {
    location: "eastus",
    properties: { mode: "Incremental", parameters: {}, templateLink: {} }
  };
  await client.deployments
    .beginCreateOrUpdateAtTenantScopeAndWait(deploymentName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  client = new ResourceManagementClient(credential);
  await createDeploymentAtTenantScope();
}
main();
