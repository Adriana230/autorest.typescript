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
 * This sample demonstrates how to Description for Returns whether FTP is allowed on the site or not.
 *
 * @summary Description for Returns whether FTP is allowed on the site or not.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//webApps.getFtpAllowedSlot
async function getFtpAllowed() {
  const resourceGroupName = "rg";
  const name = "testSite";
  const slot = "stage";
  const result = await client.webApps.getFtpAllowedSlot(
    resourceGroupName,
    name,
    slot
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getFtpAllowed();
}
main();
