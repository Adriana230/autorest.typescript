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
 * This sample demonstrates how to Gets the managed application definition.
 *
 * @summary Gets the managed application definition.
 */
import { ApplicationClient } from "@msinternal/arm-package-managedapplications-2018-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: ApplicationClient;
//applicationDefinitions.get
async function getManagedApplicationDefinition() {
  const resourceGroupName = "rg";
  await client.applicationDefinitions.get(resourceGroupName).then((res) => {
    console.log(res);
  });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new ApplicationClient(credential, subscriptionId);
  await getManagedApplicationDefinition();
}
main();