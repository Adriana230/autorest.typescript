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
 * This sample demonstrates how to Description for Creates a new static site in an existing resource group, or updates an existing static site.
 *
 * @summary Description for Creates a new static site in an existing resource group, or updates an existing static site.
 */
import {
  StaticSitePatchResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.updateStaticSite
async function patchAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const staticSiteEnvelope: StaticSitePatchResource = {};
  const result = await client.staticSites.updateStaticSite(
    resourceGroupName,
    name,
    staticSiteEnvelope
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await patchAStaticSite();
}
main();
