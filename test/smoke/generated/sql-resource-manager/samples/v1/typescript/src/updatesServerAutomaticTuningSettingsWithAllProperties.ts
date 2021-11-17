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
 * This sample demonstrates how to Update automatic tuning options on server.
 *
 * @summary Update automatic tuning options on server.
 */
import {
  ServerAutomaticTuning,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//serverAutomaticTuning.update
async function updatesServerAutomaticTuningSettingsWithAllProperties() {
  const resourceGroupName = "default-sql-onebox";
  const serverName = "testsvr11";
  const parameters: ServerAutomaticTuning = {
    desiredState: "Auto",
    options: {
      createIndex: { desiredState: "Off" },
      dropIndex: { desiredState: "On" },
      forceLastGoodPlan: { desiredState: "Default" }
    }
  };
  await client.serverAutomaticTuning
    .update(resourceGroupName, serverName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "c3aa9078-0000-0000-0000-e36f151182d7";
  client = new SqlManagementClient(credential, subscriptionId);
  await updatesServerAutomaticTuningSettingsWithAllProperties();
}
main();
