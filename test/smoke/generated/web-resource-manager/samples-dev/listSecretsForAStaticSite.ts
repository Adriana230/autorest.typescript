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
 * This sample demonstrates how to Description for Lists the secrets for an existing static site.
 *
 * @summary Description for Lists the secrets for an existing static site.
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.listStaticSiteSecrets
async function listSecretsForAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const result = await client.staticSites.listStaticSiteSecrets(
    resourceGroupName,
    name
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await listSecretsForAStaticSite();
}
main();
