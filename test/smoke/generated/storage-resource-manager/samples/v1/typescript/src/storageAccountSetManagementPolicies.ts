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
 * This sample demonstrates how to Sets the managementpolicy to the specified storage account.
 *
 * @summary Sets the managementpolicy to the specified storage account.
 */
import {
  ManagementPolicy,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: StorageManagementClient;
//managementPolicies.createOrUpdate
async function storageAccountSetManagementPolicies() {
  const resourceGroupName = "res7687";
  const accountName = "sto9699";
  const managementPolicyName = "default";
  const properties: ManagementPolicy = {
    policy: {
      rules: [
        {
          name: "olcmtest1",
          type: "Lifecycle",
          definition: {
            actions: {
              baseBlob: {
                delete: { daysAfterModificationGreaterThan: 1000 },
                tierToArchive: { daysAfterModificationGreaterThan: 90 },
                tierToCool: { daysAfterModificationGreaterThan: 30 }
              },
              snapshot: { delete: { daysAfterCreationGreaterThan: 30 } }
            },
            filters: {
              blobTypes: ["blockBlob"],
              prefixMatch: ["olcmtestcontainer1"]
            }
          },
          enabled: true
        },
        {
          name: "olcmtest2",
          type: "Lifecycle",
          definition: {
            actions: {
              baseBlob: {
                delete: { daysAfterModificationGreaterThan: 1000 },
                tierToArchive: { daysAfterModificationGreaterThan: 90 },
                tierToCool: { daysAfterModificationGreaterThan: 30 }
              }
            },
            filters: {
              blobIndexMatch: [
                { name: "tag1", op: "==", value: "val1" },
                { name: "tag2", op: "==", value: "val2" }
              ],
              blobTypes: ["blockBlob"],
              prefixMatch: ["olcmtestcontainer2"]
            }
          },
          enabled: true
        }
      ]
    }
  };
  await client.managementPolicies
    .createOrUpdate(
      resourceGroupName,
      accountName,
      managementPolicyName,
      properties
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new StorageManagementClient(credential, subscriptionId);
  await storageAccountSetManagementPolicies();
}
main();
