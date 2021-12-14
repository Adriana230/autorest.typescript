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
 * This sample demonstrates how to Display information about a virtual machine scale set.
 *
 * @summary Display information about a virtual machine scale set.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//virtualMachineScaleSets.get
async function getAVirtualMachineScaleSetPlacedOnADedicatedHostGroupThroughAutomaticPlacement() {
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const result = await client.virtualMachineScaleSets.get(
    resourceGroupName,
    vmScaleSetName
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await getAVirtualMachineScaleSetPlacedOnADedicatedHostGroupThroughAutomaticPlacement();
}
main();
