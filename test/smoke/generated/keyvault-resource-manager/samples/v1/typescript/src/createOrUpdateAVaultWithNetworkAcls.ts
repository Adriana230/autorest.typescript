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
 * This sample demonstrates how to Create or update a key vault in the specified subscription.
 *
 * @summary Create or update a key vault in the specified subscription.
 */
import {
  VaultCreateOrUpdateParameters,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//vaults.beginCreateOrUpdateAndWait
async function createOrUpdateAVaultWithNetworkAcls() {
  const resourceGroupName = "sample-resource-group";
  const vaultName = "sample-vault";
  const parameters: VaultCreateOrUpdateParameters = {
    location: "westus",
    properties: {
      enabledForDeployment: true,
      enabledForDiskEncryption: true,
      enabledForTemplateDeployment: true,
      networkAcls: {
        bypass: "AzureServices",
        defaultAction: "Deny",
        ipRules: [{ value: "124.56.78.91" }, { value: "'10.91.4.0/24'" }],
        virtualNetworkRules: [
          {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1"
          }
        ]
      },
      sku: { name: "standard", family: "A" },
      tenantId: "00000000-0000-0000-0000-000000000000"
    }
  };
  await client.vaults
    .beginCreateOrUpdateAndWait(resourceGroupName, vaultName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await createOrUpdateAVaultWithNetworkAcls();
}
main();
