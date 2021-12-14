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
 * This sample demonstrates how to Description for Register a user provided function app with a static site
 *
 * @summary Description for Register a user provided function app with a static site
 */
import {
  StaticSiteUserProvidedFunctionAppARMResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.beginRegisterUserProvidedFunctionAppWithStaticSiteAndWait
async function registerAUserProvidedFunctionAppWithAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const functionAppName = "testFunctionApp";
  const isForced = true;
  const staticSiteUserProvidedFunctionEnvelope: StaticSiteUserProvidedFunctionAppARMResource = {
    functionAppRegion: "West US 2",
    functionAppResourceId:
      "/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/functionRG/providers/Microsoft.Web/sites/testFunctionApp"
  };
  const options = { isForced: isForced };
  const result = await client.staticSites.beginRegisterUserProvidedFunctionAppWithStaticSiteAndWait(
    resourceGroupName,
    name,
    functionAppName,
    staticSiteUserProvidedFunctionEnvelope,
    options
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await registerAUserProvidedFunctionAppWithAStaticSite();
}
main();
