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
 * This sample demonstrates how to Description for Get available Web app frameworks and their versions for location
 *
 * @summary Description for Get available Web app frameworks and their versions for location
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//provider.listWebAppStacksForLocation
async function getLocationsWebAppStacks() {
  const location = "westus";
  const resArray = new Array();
  for await (let item of client.provider.listWebAppStacksForLocation(
    location
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getLocationsWebAppStacks();
}
main();
