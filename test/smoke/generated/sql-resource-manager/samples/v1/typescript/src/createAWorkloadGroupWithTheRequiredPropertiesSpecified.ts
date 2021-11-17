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
 * This sample demonstrates how to Creates or updates a workload classifier.
 *
 * @summary Creates or updates a workload classifier.
 */
import {
  WorkloadClassifier,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//workloadClassifiers.beginCreateOrUpdateAndWait
async function createAWorkloadGroupWithTheRequiredPropertiesSpecified() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const workloadGroupName = "wlm_workloadgroup";
  const workloadClassifierName = "wlm_workloadclassifier";
  const parameters: WorkloadClassifier = { memberName: "dbo" };
  await client.workloadClassifiers
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      workloadClassifierName,
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
  await createAWorkloadGroupWithTheRequiredPropertiesSpecified();
}
main();
