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
 * This sample demonstrates how to Description for Creates an invitation link for a user with the role
 *
 * @summary Description for Creates an invitation link for a user with the role
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/CreateUserRolesInvitationLink.json
 */
import {
  StaticSiteUserInvitationRequestResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createAnInvitationLinkForAUserForAStaticSite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const staticSiteUserRolesInvitationEnvelope: StaticSiteUserInvitationRequestResource = {
    domain: "happy-sea-15afae3e.azurestaticwebsites.net",
    numHoursToExpiration: 1,
    provider: "aad",
    roles: "admin,contributor",
    userDetails: "username"
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.createUserRolesInvitationLink(
    resourceGroupName,
    name,
    staticSiteUserRolesInvitationEnvelope
  );
  console.log(result);
}

createAnInvitationLinkForAUserForAStaticSite().catch(console.error);
