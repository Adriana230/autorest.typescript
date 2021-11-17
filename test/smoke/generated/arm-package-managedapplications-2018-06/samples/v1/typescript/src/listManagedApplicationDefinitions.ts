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
 * This sample demonstrates how to Lists the managed application definitions in a resource group.
 *
 * @summary Lists the managed application definitions in a resource group.
 */
import { ApplicationClient } from "@msinternal/arm-package-managedapplications-2018-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: ApplicationClient;
//applicationDefinitions.listByResourceGroup
async function listManagedApplicationDefinitions() {
  const resourceGroupName = "rg";
  const resArray = new Array();
  for await (let item of client.applicationDefinitions.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new ApplicationClient(credential, subscriptionId);
  await listManagedApplicationDefinitions();
}
main();
