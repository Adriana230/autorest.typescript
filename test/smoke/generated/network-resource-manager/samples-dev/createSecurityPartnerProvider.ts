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
 * This sample demonstrates how to Creates or updates the specified Security Partner Provider.
 *
 * @summary Creates or updates the specified Security Partner Provider.
 */
import {
  SecurityPartnerProvider,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//securityPartnerProviders.beginCreateOrUpdateAndWait
async function createSecurityPartnerProvider() {
  const resourceGroupName = "rg1";
  const securityPartnerProviderName = "securityPartnerProvider";
  const parameters: SecurityPartnerProvider = {
    location: "West US",
    securityProviderName: "ZScaler",
    tags: { key1: "value1" },
    virtualHub: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1"
    }
  };
  const result = await client.securityPartnerProviders.beginCreateOrUpdateAndWait(
    resourceGroupName,
    securityPartnerProviderName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createSecurityPartnerProvider();
}
main();
