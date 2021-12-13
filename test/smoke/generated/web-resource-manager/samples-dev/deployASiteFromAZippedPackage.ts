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
 * This sample demonstrates how to Description for Deploys zipped content to a static site.
 *
 * @summary Description for Deploys zipped content to a static site.
 */
import {
  StaticSiteZipDeploymentARMResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//staticSites.beginCreateZipDeploymentForStaticSiteAndWait
async function deployASiteFromAZippedPackage() {
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource = {
    apiZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/api-zipdeploy.zip",
    appZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/app-zipdeploy.zip",
    deploymentTitle: "Update index.html",
    functionLanguage: "testFunctionLanguage",
    provider: "testProvider"
  };
  await client.staticSites
    .beginCreateZipDeploymentForStaticSiteAndWait(
      resourceGroupName,
      name,
      staticSiteZipDeploymentEnvelope
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await deployASiteFromAZippedPackage();
}
main();
