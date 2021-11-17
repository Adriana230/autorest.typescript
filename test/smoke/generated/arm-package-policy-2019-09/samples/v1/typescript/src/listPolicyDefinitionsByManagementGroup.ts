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
 * This sample demonstrates how to This operation retrieves a list of all the policy definitions in a given management group.
 *
 * @summary This operation retrieves a list of all the policy definitions in a given management group.
 */
import { PolicyClient } from "@msinternal/arm-package-policy-2019-09";
import { DefaultAzureCredential } from "@azure/identity";

let client: PolicyClient;
//policyDefinitions.listByManagementGroup
async function listPolicyDefinitionsByManagementGroup() {
  const managementGroupId = "MyManagementGroup";
  const resArray = new Array();
  for await (let item of client.policyDefinitions.listByManagementGroup(
    managementGroupId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  client = new PolicyClient(credential);
  await listPolicyDefinitionsByManagementGroup();
}
main();