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
 * This sample demonstrates how to Grants access to a diskRestorePoint.
 *
 * @summary Grants access to a diskRestorePoint.
 */
import {
  GrantAccessData,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//diskRestorePointOperations.beginGrantAccessAndWait
async function grantsAccessToADiskRestorePoint() {
  const resourceGroupName = "myResourceGroup";
  const restorePointCollectionName = "rpc";
  const vmRestorePointName = "vmrp";
  const diskRestorePointName =
    "TestDisk45ceb03433006d1baee0_b70cd924-3362-4a80-93c2-9415eaa12745";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300
  };
  const result = await client.diskRestorePointOperations.beginGrantAccessAndWait(
    resourceGroupName,
    restorePointCollectionName,
    vmRestorePointName,
    diskRestorePointName,
    grantAccessData
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await grantsAccessToADiskRestorePoint();
}
main();
