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
 * This sample demonstrates how to Gets the specified network interface ip configuration.
 *
 * @summary Gets the specified network interface ip configuration.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkInterfaceIPConfigurations.get
async function networkInterfaceIPConfigurationGet() {
  const resourceGroupName = "testrg";
  const networkInterfaceName = "mynic";
  const ipConfigurationName = "ipconfig1";
  await client.networkInterfaceIPConfigurations
    .get(resourceGroupName, networkInterfaceName, ipConfigurationName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await networkInterfaceIPConfigurationGet();
}
main();