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
 * This sample demonstrates how to Updates the specified private endpoint connection on application gateway.
 *
 * @summary Updates the specified private endpoint connection on application gateway.
 */
import {
  ApplicationGatewayPrivateEndpointConnection,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//applicationGatewayPrivateEndpointConnections.beginUpdateAndWait
async function updateApplicationGatewayPrivateEndpointConnection() {
  const resourceGroupName = "rg1";
  const applicationGatewayName = "appgw";
  const connectionName = "connection1";
  const parameters: ApplicationGatewayPrivateEndpointConnection = {
    name: "connection1",
    privateEndpoint: {
      id:
        "/subscriptions/subId2/resourceGroups/rg1/providers/Microsoft.Network/privateEndpoints/testPe"
    },
    privateLinkServiceConnectionState: {
      description: "approved it for some reason.",
      status: "Approved"
    }
  };
  const result = await client.applicationGatewayPrivateEndpointConnections.beginUpdateAndWait(
    resourceGroupName,
    applicationGatewayName,
    connectionName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await updateApplicationGatewayPrivateEndpointConnection();
}
main();
