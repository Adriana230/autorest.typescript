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
 * This sample demonstrates how to Retrieves information about the run-time state of a virtual machine.
 *
 * @summary Retrieves information about the run-time state of a virtual machine.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//virtualMachines.instanceView
async function getVirtualMachineInstanceView() {
  const resourceGroupName = "myResourceGroup";
  const vmName = "myVM";
  await client.virtualMachines
    .instanceView(resourceGroupName, vmName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await getVirtualMachineInstanceView();
}
main();