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
 * This sample demonstrates how to Creates or updates a managed instance administrator.
 *
 * @summary Creates or updates a managed instance administrator.
 */
import {
  ManagedInstanceAdministrator,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedInstanceAdministrators.beginCreateOrUpdateAndWait
async function createAdministratorOfManagedInstance() {
  const resourceGroupName = "Default-SQL-SouthEastAsia";
  const managedInstanceName = "managedInstance";
  const parameters: ManagedInstanceAdministrator = {
    administratorType: "ActiveDirectory",
    login: "bob@contoso.com",
    sid: "44444444-3333-2222-1111-000000000000",
    tenantId: "55555555-4444-3333-2222-111111111111"
  };
  await client.managedInstanceAdministrators
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
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
  await createAdministratorOfManagedInstance();
}
main();
