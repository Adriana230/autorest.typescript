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
 * This sample demonstrates how to Gets a logical database's transparent data encryption.
 *
 * @summary Gets a logical database's transparent data encryption.
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//transparentDataEncryptions.get
async function getADatabaseSTransparentDataEncryption() {
  const resourceGroupName = "security-tde-resourcegroup";
  const serverName = "securitytde";
  const databaseName = "testdb";
  const tdeName = "current";
  await client.transparentDataEncryptions
    .get(resourceGroupName, serverName, databaseName, tdeName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await getADatabaseSTransparentDataEncryption();
}
main();
