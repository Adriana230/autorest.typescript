/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnection,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the specified private endpoint connection associated with the key vault.
 *
 * @summary Updates the specified private endpoint connection associated with the key vault.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-06-01-preview/examples/putPrivateEndpointConnection.json
 */
async function keyVaultPutPrivateEndpointConnection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sample-group";
  const vaultName = "sample-vault";
  const privateEndpointConnectionName = "sample-pec";
  const properties: PrivateEndpointConnection = {
    etag: "",
    privateLinkServiceConnectionState: {
      description: "My name is Joe and I'm approving this.",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.put(
    resourceGroupName,
    vaultName,
    privateEndpointConnectionName,
    properties
  );
  console.log(result);
}

keyVaultPutPrivateEndpointConnection().catch(console.error);