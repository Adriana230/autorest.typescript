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
 * This sample demonstrates how to Gets specific run command for a subscription in a location.
 *
 * @summary Gets specific run command for a subscription in a location.
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: ComputeManagementClient;
//virtualMachineRunCommands.get
async function virtualMachineRunCommandGet() {
  const location = "SoutheastAsia";
  const commandId = "RunPowerShellScript";
  await client.virtualMachineRunCommands
    .get(location, commandId)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "24fb23e3-6ba3-41f0-9b6e-e41131d5d61e";
  client = new ComputeManagementClient(credential, subscriptionId);
  await virtualMachineRunCommandGet();
}
main();