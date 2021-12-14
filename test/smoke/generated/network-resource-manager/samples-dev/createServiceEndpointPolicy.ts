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
 * This sample demonstrates how to Creates or updates a service Endpoint Policies.
 *
 * @summary Creates or updates a service Endpoint Policies.
 */
import {
  ServiceEndpointPolicy,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//serviceEndpointPolicies.beginCreateOrUpdateAndWait
async function createServiceEndpointPolicy() {
  const resourceGroupName = "rg1";
  const serviceEndpointPolicyName = "testPolicy";
  const parameters: ServiceEndpointPolicy = { location: "westus" };
  const result = await client.serviceEndpointPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceEndpointPolicyName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createServiceEndpointPolicy();
}
main();
