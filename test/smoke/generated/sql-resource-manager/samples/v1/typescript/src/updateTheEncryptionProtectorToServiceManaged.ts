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
 * This sample demonstrates how to Updates an existing encryption protector.
 *
 * @summary Updates an existing encryption protector.
 */
import {
  ManagedInstanceEncryptionProtector,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//managedInstanceEncryptionProtectors.beginCreateOrUpdateAndWait
async function updateTheEncryptionProtectorToServiceManaged() {
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const encryptionProtectorName = "current";
  const parameters: ManagedInstanceEncryptionProtector = {
    serverKeyName: "ServiceManaged",
    serverKeyType: "ServiceManaged"
  };
  await client.managedInstanceEncryptionProtectors
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      encryptionProtectorName,
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
  await updateTheEncryptionProtectorToServiceManaged();
}
main();