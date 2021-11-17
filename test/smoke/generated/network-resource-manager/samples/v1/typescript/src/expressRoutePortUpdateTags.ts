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
 * This sample demonstrates how to Update ExpressRoutePort tags.
 *
 * @summary Update ExpressRoutePort tags.
 */
import {
  TagsObject,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//expressRoutePorts.updateTags
async function expressRoutePortUpdateTags() {
  const resourceGroupName = "rg1";
  const expressRoutePortName = "portName";
  const parameters: TagsObject = { tags: { tag1: "value1", tag2: "value2" } };
  await client.expressRoutePorts
    .updateTags(resourceGroupName, expressRoutePortName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await expressRoutePortUpdateTags();
}
main();