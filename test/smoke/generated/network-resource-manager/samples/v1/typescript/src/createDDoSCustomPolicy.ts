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
 * This sample demonstrates how to Creates or updates a DDoS custom policy.
 *
 * @summary Creates or updates a DDoS custom policy.
 */
import {
  DdosCustomPolicy,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//ddosCustomPolicies.beginCreateOrUpdateAndWait
async function createDDoSCustomPolicy() {
  const resourceGroupName = "rg1";
  const ddosCustomPolicyName = "test-ddos-custom-policy";
  const parameters: DdosCustomPolicy = {
    location: "centraluseuap",
    protocolCustomSettings: [{ protocol: "Tcp" }]
  };
  await client.ddosCustomPolicies
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      ddosCustomPolicyName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createDDoSCustomPolicy();
}
main();