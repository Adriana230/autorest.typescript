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
 * This sample demonstrates how to Creates or updates the sensitivity label of a given column
 *
 * @summary Creates or updates the sensitivity label of a given column
 */
import {
  SensitivityLabel,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedDatabaseSensitivityLabels.createOrUpdate
async function updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase() {
  const resourceGroupName = "myRG";
  const managedInstanceName = "myManagedInstanceName";
  const databaseName = "myDatabase";
  const schemaName = "dbo";
  const tableName = "myTable";
  const columnName = "myColumn";
  const parameters: SensitivityLabel = {
    informationType: "PhoneNumber",
    informationTypeId: "d22fa6e9-5ee4-3bde-4c2b-a409604c4646",
    labelId: "bf91e08c-f4f0-478a-b016-25164b2a65ff",
    labelName: "PII",
    rank: "High"
  };
  const result = await client.managedDatabaseSensitivityLabels.createOrUpdate(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    schemaName,
    tableName,
    columnName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase();
}
main();
