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
 * This sample demonstrates how to Creates a new managed application definition.
 *
 * @summary Creates a new managed application definition.
 */
import {
  ApplicationDefinition,
  ApplicationClient
} from "@msinternal/arm-package-managedapplications-2018-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: ApplicationClient;
//applicationDefinitions.beginCreateOrUpdateAndWait
async function createOrUpdateManagedApplicationDefinition() {
  const resourceGroupName = "rg";
  const parameters: ApplicationDefinition = {
    description: "myManagedApplicationDef description",
    authorizations: [
      { principalId: "validprincipalguid", roleDefinitionId: "validroleguid" }
    ],
    displayName: "myManagedApplicationDef",
    location: "East US 2",
    lockLevel: "None",
    packageFileUri: "https://path/to/packagezipfile"
  };
  await client.applicationDefinitions
    .beginCreateOrUpdateAndWait(resourceGroupName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new ApplicationClient(credential, subscriptionId);
  await createOrUpdateManagedApplicationDefinition();
}
main();
