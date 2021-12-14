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
 * This sample demonstrates how to Gets a database service objective.
 *
 * @summary Gets a database service objective.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//serviceObjectives.get
async function getAServiceObjective() {
  const resourceGroupName = "group1";
  const serverName = "sqlcrudtest";
  const serviceObjectiveName = "29dd7459-4a7c-4e56-be22-f0adda49440d";
  const result = await client.serviceObjectives.get(
    resourceGroupName,
    serverName,
    serviceObjectiveName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getAServiceObjective();
}
main();
