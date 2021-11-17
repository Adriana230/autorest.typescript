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
 * This sample demonstrates how to Creates or updates a database's threat detection policy.
 *
 * @summary Creates or updates a database's threat detection policy.
 */
import {
  DatabaseSecurityAlertPolicy,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databaseThreatDetectionPolicies.createOrUpdate
async function createDatabaseSecurityAlertPolicyMax() {
  const resourceGroupName = "securityalert-4799";
  const serverName = "securityalert-6440";
  const databaseName = "testdb";
  const securityAlertPolicyName = "default";
  const parameters: DatabaseSecurityAlertPolicy = {
    disabledAlerts: "Sql_Injection;Usage_Anomaly;",
    emailAccountAdmins: "Enabled",
    emailAddresses: "test@microsoft.com;user@microsoft.com",
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net",
    useServerDefault: "Enabled"
  };
  await client.databaseThreatDetectionPolicies
    .createOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      securityAlertPolicyName,
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
  await createDatabaseSecurityAlertPolicyMax();
}
main();
