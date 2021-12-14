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
 * This sample demonstrates how to Get the specified network interface ip configuration in a virtual machine scale set.
 *
 * @summary Get the specified network interface ip configuration in a virtual machine scale set.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//networkInterfaces.getVirtualMachineScaleSetIpConfiguration
async function getVirtualMachineScaleSetNetworkInterface() {
  const resourceGroupName = "rg1";
  const virtualMachineScaleSetName = "vmss1";
  const virtualmachineIndex = "2";
  const networkInterfaceName = "nic1";
  const ipConfigurationName = "ip1";
  const result = await client.networkInterfaces.getVirtualMachineScaleSetIpConfiguration(
    resourceGroupName,
    virtualMachineScaleSetName,
    virtualmachineIndex,
    networkInterfaceName,
    ipConfigurationName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getVirtualMachineScaleSetNetworkInterface();
}
main();
