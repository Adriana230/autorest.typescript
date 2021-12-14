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
 * This sample demonstrates how to Create or update the object replication policy of the storage account.
 *
 * @summary Create or update the object replication policy of the storage account.
 */
import {
  ObjectReplicationPolicy,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//objectReplicationPoliciesOperations.createOrUpdate
async function storageAccountCreateObjectReplicationPolicyOnDestination() {
  const resourceGroupName = "res7687";
  const accountName = "dst112";
  const objectReplicationPolicyId = "default";
  const properties: ObjectReplicationPolicy = {
    destinationAccount: "dst112",
    rules: [
      {
        destinationContainer: "dcont139",
        filters: { prefixMatch: ["blobA", "blobB"] },
        sourceContainer: "scont139"
      }
    ],
    sourceAccount: "src1122"
  };
  const result = await client.objectReplicationPoliciesOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    objectReplicationPolicyId,
    properties
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountCreateObjectReplicationPolicyOnDestination();
}
main();
