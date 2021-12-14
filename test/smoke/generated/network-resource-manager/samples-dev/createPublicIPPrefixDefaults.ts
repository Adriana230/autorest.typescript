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
 * This sample demonstrates how to Creates or updates a static or dynamic public IP prefix.
 *
 * @summary Creates or updates a static or dynamic public IP prefix.
 */
import {
  PublicIPPrefix,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//publicIPPrefixes.beginCreateOrUpdateAndWait
async function createPublicIPPrefixDefaults() {
  const resourceGroupName = "rg1";
  const publicIpPrefixName = "test-ipprefix";
  const parameters: PublicIPPrefix = {
    location: "westus",
    prefixLength: 30,
    sku: { name: "Standard" }
  };
  const result = await client.publicIPPrefixes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpPrefixName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createPublicIPPrefixDefaults();
}
main();
