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
 * This sample demonstrates how to The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
 *
 * @summary The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/CreateAVmWithUefiSettings.json
 */
import {
  VirtualMachine,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createAVMWithUefiSettingsOfSecureBootAndVTpm() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmName = "myVM";
  const parameters: VirtualMachine = {
    hardwareProfile: { vmSize: "Standard_D2s_v3" },
    location: "westus",
    networkProfile: {
      networkInterfaces: [
        {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}",
          primary: true
        }
      ]
    },
    osProfile: {
      adminPassword: "{your-password}",
      adminUsername: "{your-username}",
      computerName: "myVM"
    },
    securityProfile: {
      securityType: "TrustedLaunch",
      uefiSettings: { secureBootEnabled: true, vTpmEnabled: true }
    },
    storageProfile: {
      imageReference: {
        offer: "windowsserver-gen2preview-preview",
        publisher: "MicrosoftWindowsServer",
        sku: "windows10-tvm",
        version: "18363.592.2001092016"
      },
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadOnly",
        createOption: "FromImage",
        managedDisk: { storageAccountType: "StandardSSD_LRS" }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

createAVMWithUefiSettingsOfSecureBootAndVTpm().catch(console.error);
