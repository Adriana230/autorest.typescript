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
 * This sample demonstrates how to Get the specified public IP address in a virtual machine scale set.
 *
 * @summary Get the specified public IP address in a virtual machine scale set.
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//publicIPAddresses.getVirtualMachineScaleSetPublicIPAddress
async function getVMSSPublicIP() {
  const resourceGroupName = "vmss-tester";
  const virtualMachineScaleSetName = "vmss1";
  const virtualmachineIndex = "1";
  const networkInterfaceName = "nic1";
  const ipConfigurationName = "ip1";
  const publicIpAddressName = "pub1";
  await client.publicIPAddresses
    .getVirtualMachineScaleSetPublicIPAddress(
      resourceGroupName,
      virtualMachineScaleSetName,
      virtualmachineIndex,
      networkInterfaceName,
      ipConfigurationName,
      publicIpAddressName
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await getVMSSPublicIP();
}
main();
