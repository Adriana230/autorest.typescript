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
 * This sample demonstrates how to Creates or updates a Tap configuration in the specified NetworkInterface.
 *
 * @summary Creates or updates a Tap configuration in the specified NetworkInterface.
 */
import {
  NetworkInterfaceTapConfiguration,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkInterfaceTapConfigurations.beginCreateOrUpdateAndWait
async function createNetworkInterfaceTapConfigurations() {
  const resourceGroupName = "testrg";
  const networkInterfaceName = "mynic";
  const tapConfigurationName = "tapconfiguration1";
  const tapConfigurationParameters: NetworkInterfaceTapConfiguration = {
    virtualNetworkTap: {
      id:
        "/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworkTaps/testvtap"
    }
  };
  await client.networkInterfaceTapConfigurations
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      networkInterfaceName,
      tapConfigurationName,
      tapConfigurationParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createNetworkInterfaceTapConfigurations();
}
main();