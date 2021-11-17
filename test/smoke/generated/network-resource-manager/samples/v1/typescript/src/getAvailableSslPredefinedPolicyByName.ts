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
 * This sample demonstrates how to Gets Ssl predefined policy with the specified policy name.
 *
 * @summary Gets Ssl predefined policy with the specified policy name.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGateways.getSslPredefinedPolicy
async function getAvailableSslPredefinedPolicyByName() {
  const predefinedPolicyName = "AppGwSslPolicy20150501";
  await client.applicationGateways
    .getSslPredefinedPolicy(predefinedPolicyName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getAvailableSslPredefinedPolicyByName();
}
main();
