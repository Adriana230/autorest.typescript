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
 * This sample demonstrates how to Creates or updates an express route circuit.
 *
 * @summary Creates or updates an express route circuit.
 */
import {
  ExpressRouteCircuit,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRouteCircuits.beginCreateOrUpdateAndWait
async function createExpressRouteCircuit() {
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const parameters: ExpressRouteCircuit = {
    allowClassicOperations: false,
    authorizations: [],
    location: "Brazil South",
    peerings: [],
    serviceProviderProperties: {
      bandwidthInMbps: 200,
      peeringLocation: "Silicon Valley",
      serviceProviderName: "Equinix"
    },
    sku: {
      name: "Standard_MeteredData",
      family: "MeteredData",
      tier: "Standard"
    }
  };
  await client.expressRouteCircuits
    .beginCreateOrUpdateAndWait(resourceGroupName, circuitName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createExpressRouteCircuit();
}
main();
