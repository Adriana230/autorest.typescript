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
 * This sample demonstrates how to Description for Renew a domain.
 *
 * @summary Description for Renew a domain.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//domains.renew
async function renewAnExistingDomain() {
  const resourceGroupName = "RG";
  const domainName = "example.com";
  const result = await client.domains.renew(resourceGroupName, domainName);
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3dddfa4f-cedf-4dc0-ba29-b6d1a69ab545";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await renewAnExistingDomain();
}
main();
