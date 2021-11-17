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
 * This sample demonstrates how to Update a key vault in the specified subscription.
 *
 * @summary Update a key vault in the specified subscription.
 */
import {
  VaultPatchParameters,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//vaults.update
async function updateAnExistingVault() {
  const resourceGroupName = "sample-resource-group";
  const vaultName = "sample-vault";
  const parameters: VaultPatchParameters = {
    properties: {
      accessPolicies: [
        {
          objectId: "00000000-0000-0000-0000-000000000000",
          permissions: {
            certificates: [
              "get",
              "list",
              "delete",
              "create",
              "import",
              "update",
              "managecontacts",
              "getissuers",
              "listissuers",
              "setissuers",
              "deleteissuers",
              "manageissuers",
              "recover",
              "purge"
            ],
            keys: [
              "encrypt",
              "decrypt",
              "wrapKey",
              "unwrapKey",
              "sign",
              "verify",
              "get",
              "list",
              "create",
              "update",
              "import",
              "delete",
              "backup",
              "restore",
              "recover",
              "purge"
            ],
            secrets: [
              "get",
              "list",
              "set",
              "delete",
              "backup",
              "restore",
              "recover",
              "purge"
            ]
          },
          tenantId: "00000000-0000-0000-0000-000000000000"
        }
      ],
      enabledForDeployment: true,
      enabledForDiskEncryption: true,
      enabledForTemplateDeployment: true,
      sku: { name: "standard", family: "A" },
      tenantId: "00000000-0000-0000-0000-000000000000"
    }
  };
  await client.vaults
    .update(resourceGroupName, vaultName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await updateAnExistingVault();
}
main();