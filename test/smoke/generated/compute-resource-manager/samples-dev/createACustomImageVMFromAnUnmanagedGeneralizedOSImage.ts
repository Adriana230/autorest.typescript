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
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/CreateACustomImageVmFromAnUnmanagedGeneralizedOsImage.json
 */
import {
  VirtualMachine,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createACustomImageVMFromAnUnmanagedGeneralizedOSImage() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmName = "{vm-name}";
  const parameters: VirtualMachine = {
    hardwareProfile: { vmSize: "Standard_D1_v2" },
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
    storageProfile: {
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadWrite",
        createOption: "FromImage",
        image: {
          uri:
            "http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/{existing-generalized-os-image-blob-name}.vhd"
        },
        osType: "Windows",
        vhd: {
          uri:
            "http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk.vhd"
        }
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

createACustomImageVMFromAnUnmanagedGeneralizedOSImage().catch(console.error);
