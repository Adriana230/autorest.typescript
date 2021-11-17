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
 * This sample demonstrates how to Creates a server dns alias.
 *
 * @summary Creates a server dns alias.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//serverDnsAliases.beginCreateOrUpdateAndWait
async function createServerDnsAlias() {
  const resourceGroupName = "Default";
  const serverName = "dns-alias-server";
  const dnsAliasName = "dns-alias-name-1";
  await client.serverDnsAliases
    .beginCreateOrUpdateAndWait(resourceGroupName, serverName, dnsAliasName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createServerDnsAlias();
}
main();
