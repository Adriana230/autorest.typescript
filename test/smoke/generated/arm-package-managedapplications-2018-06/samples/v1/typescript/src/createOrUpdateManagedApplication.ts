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
 * This sample demonstrates how to Creates a new managed application.
 *
 * @summary Creates a new managed application.
 */
import {
  Application,
  ApplicationClient
} from "@msinternal/arm-package-managedapplications-2018-06";
import { DefaultAzureCredential } from "@azure/identity";

let client: ApplicationClient;
//applications.beginCreateOrUpdateAndWait
async function createOrUpdateManagedApplication() {
  const resourceGroupName = "rg";
  const parameters: Application = {
    name: "myManagedApplication",
    kind: "ServiceCatalog",
    location: "East US 2",
    managedResourceGroupId: "/subscriptions/subid/resourceGroups/myManagedRG"
  };
  await client.applications
    .beginCreateOrUpdateAndWait(resourceGroupName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new ApplicationClient(credential, subscriptionId);
  await createOrUpdateManagedApplication();
}
main();
