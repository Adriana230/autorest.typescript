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
 * This sample demonstrates how to Description for Gets all scale-out instances of an app.
 *
 * @summary Description for Gets all scale-out instances of an app.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//webApps.getInstanceInfoSlot
async function getSiteInstanceInfo() {
  const resourceGroupName = "testrg123";
  const name = "tests346";
  const instanceId = "134987120";
  const slot = "staging";
  const result = await client.webApps.getInstanceInfoSlot(
    resourceGroupName,
    name,
    instanceId,
    slot
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getSiteInstanceInfo();
}
main();
