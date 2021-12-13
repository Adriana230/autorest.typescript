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
 * This sample demonstrates how to Description for Gets the private link resources
 *
 * @summary Description for Gets the private link resources
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//webApps.getPrivateLinkResourcesSlot
async function getPrivateLinkResourcesOfASite() {
  const resourceGroupName = "rg";
  const name = "testSite";
  const slot = "stage";
  await client.webApps
    .getPrivateLinkResourcesSlot(resourceGroupName, name, slot)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getPrivateLinkResourcesOfASite();
}
main();
