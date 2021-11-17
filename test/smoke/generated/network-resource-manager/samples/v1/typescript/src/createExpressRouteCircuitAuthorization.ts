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
 * This sample demonstrates how to Creates or updates an authorization in the specified express route circuit.
 *
 * @summary Creates or updates an authorization in the specified express route circuit.
 */
import {
  ExpressRouteCircuitAuthorization,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRouteCircuitAuthorizations.beginCreateOrUpdateAndWait
async function createExpressRouteCircuitAuthorization() {
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const authorizationName = "authorizatinName";
  const authorizationParameters: ExpressRouteCircuitAuthorization = {};
  await client.expressRouteCircuitAuthorizations
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      circuitName,
      authorizationName,
      authorizationParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createExpressRouteCircuitAuthorization();
}
main();