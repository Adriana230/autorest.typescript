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
 * This sample demonstrates how to Description for Gets the details of the user provided function apps registered with a static site build
 *
 * @summary Description for Gets the details of the user provided function apps registered with a static site build
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.listUserProvidedFunctionAppsForStaticSiteBuild
async function getDetailsOfTheUserProvidedFunctionAppsRegisteredWithAStaticSiteBuild() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const resArray = new Array();
  for await (let item of client.staticSites.listUserProvidedFunctionAppsForStaticSiteBuild(
    resourceGroupName,
    name,
    environmentName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getDetailsOfTheUserProvidedFunctionAppsRegisteredWithAStaticSiteBuild();
}
main();
