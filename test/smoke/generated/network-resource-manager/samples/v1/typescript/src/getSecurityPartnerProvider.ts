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
 * This sample demonstrates how to Gets the specified Security Partner Provider.
 *
 * @summary Gets the specified Security Partner Provider.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//securityPartnerProviders.get
async function getSecurityPartnerProvider() {
  const resourceGroupName = "rg1";
  const securityPartnerProviderName = "securityPartnerProvider";
  await client.securityPartnerProviders
    .get(resourceGroupName, securityPartnerProviderName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getSecurityPartnerProvider();
}
main();
