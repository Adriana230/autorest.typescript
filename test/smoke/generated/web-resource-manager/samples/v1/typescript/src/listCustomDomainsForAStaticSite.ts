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
 * This sample demonstrates how to Description for Gets all static site custom domains for a particular static site.
 *
 * @summary Description for Gets all static site custom domains for a particular static site.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.listStaticSiteCustomDomains
async function listCustomDomainsForAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const resArray = new Array();
  for await (let item of client.staticSites.listStaticSiteCustomDomains(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await listCustomDomainsForAStaticSite();
}
main();
