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
 * This sample demonstrates how to Creates or updates a target group.
 *
 * @summary Creates or updates a target group.
 */
import {
  JobTargetGroup,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//jobTargetGroups.createOrUpdate
async function createOrUpdateATargetGroupWithMinimalProperties() {
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const targetGroupName = "targetGroup1";
  const parameters: JobTargetGroup = { members: [] };
  await client.jobTargetGroups
    .createOrUpdate(
      resourceGroupName,
      serverName,
      jobAgentName,
      targetGroupName,
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
  await createOrUpdateATargetGroupWithMinimalProperties();
}
main();
