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
 * This sample demonstrates how to Creates or updates the server's connection policy.
 *
 * @summary Creates or updates the server's connection policy.
 */
import {
  ServerConnectionPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//serverConnectionPolicies.createOrUpdate
async function createOrUpdateAServersSecureConnectionPolicy() {
  const resourceGroupName = "test-1234";
  const serverName = "test-5678";
  const connectionPolicyName = "default";
  const parameters: ServerConnectionPolicy = { connectionType: "Proxy" };
  await client.serverConnectionPolicies
    .createOrUpdate(
      resourceGroupName,
      serverName,
      connectionPolicyName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createOrUpdateAServersSecureConnectionPolicy();
}
main();