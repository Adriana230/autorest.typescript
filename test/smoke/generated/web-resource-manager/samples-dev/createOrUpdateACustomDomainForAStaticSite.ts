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
 * This sample demonstrates how to Description for Creates a new static site custom domain in an existing resource group and static site.
 *
 * @summary Description for Creates a new static site custom domain in an existing resource group and static site.
 */
import {
  StaticSiteCustomDomainRequestPropertiesARMResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.beginCreateOrUpdateStaticSiteCustomDomainAndWait
async function createOrUpdateACustomDomainForAStaticSite() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const domainName = "custom.domain.net";
  const staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainRequestPropertiesARMResource = {};
  await client.staticSites
    .beginCreateOrUpdateStaticSiteCustomDomainAndWait(
      resourceGroupName,
      name,
      domainName,
      staticSiteCustomDomainRequestPropertiesEnvelope
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await createOrUpdateACustomDomainForAStaticSite();
}
main();
