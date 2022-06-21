/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CsmPublishingCredentialsPoliciesEntity,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Updates whether FTP is allowed on the site or not.
 *
 * @summary Description for Updates whether FTP is allowed on the site or not.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/UpdatePublishingCredentialsPolicy.json
 */
async function updateFtpAllowed() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const csmPublishingAccessPoliciesEntity: CsmPublishingCredentialsPoliciesEntity = {
    allow: true
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.updateFtpAllowed(
    resourceGroupName,
    name,
    csmPublishingAccessPoliciesEntity
  );
  console.log(result);
}

updateFtpAllowed().catch(console.error);
