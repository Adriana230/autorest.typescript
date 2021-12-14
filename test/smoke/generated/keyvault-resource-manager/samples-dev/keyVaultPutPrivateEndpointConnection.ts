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
 * This sample demonstrates how to Updates the specified private endpoint connection associated with the key vault.
 *
 * @summary Updates the specified private endpoint connection associated with the key vault.
 */
import {
  PrivateEndpointConnection,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: KeyVaultManagementClient;
//privateEndpointConnections.put
async function keyVaultPutPrivateEndpointConnection() {
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
  const result = await client.privateEndpointConnections.put(
    resourceGroupName,
    vaultName,
    privateEndpointConnectionName,
    properties
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new KeyVaultManagementClient(credential, subscriptionId);
  await keyVaultPutPrivateEndpointConnection();
}
main();
