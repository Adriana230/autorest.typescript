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
 * This sample demonstrates how to Create or update a VM scale set.
 *
 * @summary Create or update a VM scale set.
 */
import {
  VirtualMachineScaleSet,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//virtualMachineScaleSets.beginCreateOrUpdateAndWait
async function createAScaleSetWithEmptyDataDisksOnEachVM() {
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "{vmss-name}";
  const parameters: VirtualMachineScaleSet = {
    location: "westus",
    overprovision: true,
    sku: { name: "Standard_D2_v2", capacity: 3, tier: "Standard" },
    upgradePolicy: { mode: "Manual" },
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: "{vmss-name}",
            enableIPForwarding: true,
            ipConfigurations: [
              {
                name: "{vmss-name}",
                subnet: {
                  id:
                    "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}"
                }
              }
            ],
            primary: true
          }
        ]
      },
      osProfile: {
        adminPassword: "{your-password}",
        adminUsername: "{your-username}",
        computerNamePrefix: "{vmss-name}"
      },
      storageProfile: {
        dataDisks: [
          { createOption: "Empty", diskSizeGB: 1023, lun: 0 },
          { createOption: "Empty", diskSizeGB: 1023, lun: 1 }
        ],
        imageReference: {
          offer: "WindowsServer",
          publisher: "MicrosoftWindowsServer",
          sku: "2016-Datacenter",
          version: "latest"
        },
        osDisk: {
          caching: "ReadWrite",
          createOption: "FromImage",
          diskSizeGB: 512,
          managedDisk: { storageAccountType: "Standard_LRS" }
        }
      }
    }
  };
  const result = await client.virtualMachineScaleSets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "{subscription-id}";
  client = new ComputeManagementClient(credential, subscriptionId);
  await createAScaleSetWithEmptyDataDisksOnEachVM();
}
main();
