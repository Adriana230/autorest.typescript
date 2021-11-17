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
 * This sample demonstrates how to This operation retrieves a list of all the policy set definitions in the given subscription.
 *
 * @summary This operation retrieves a list of all the policy set definitions in the given subscription.
 */
import { PolicyClient } from "@msinternal/arm-package-policy-2019-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: PolicyClient;
//policySetDefinitions.list
async function listPolicySetDefinitions() {
  const resArray = new Array();
  for await (let item of client.policySetDefinitions.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  client = new PolicyClient(credential, subscriptionId);
  await listPolicySetDefinitions();
}
main();