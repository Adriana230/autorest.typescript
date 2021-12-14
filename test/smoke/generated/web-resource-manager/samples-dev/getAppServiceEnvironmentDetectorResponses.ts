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
 * This sample demonstrates how to Description for Get Hosting Environment Detector Response
 *
 * @summary Description for Get Hosting Environment Detector Response
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//diagnostics.getHostingEnvironmentDetectorResponse
async function getAppServiceEnvironmentDetectorResponses() {
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const name = "SampleAppServiceEnvironment";
  const detectorName = "runtimeavailability";
  const result = await client.diagnostics.getHostingEnvironmentDetectorResponse(
    resourceGroupName,
    name,
    detectorName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getAppServiceEnvironmentDetectorResponses();
}
main();
