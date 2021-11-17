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
 * This sample demonstrates how to Description for Gets the functions of a particular static site build.
 *
 * @summary Description for Gets the functions of a particular static site build.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.listStaticSiteBuildFunctions
async function getsTheFunctionsOfAParticularStaticSiteBuild() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const prId = "default";
  const resArray = new Array();
  for await (let item of client.staticSites.listStaticSiteBuildFunctions(
    resourceGroupName,
    name,
    prId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getsTheFunctionsOfAParticularStaticSiteBuild();
}
main();
