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
 * This sample demonstrates how to Description for Get Diagnostics Category
 *
 * @summary Description for Get Diagnostics Category
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: WebSiteManagementClient;
//diagnostics.getSiteDiagnosticCategorySlot
async function getAppSlotDiagnosticCategory() {
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const diagnosticCategory = "availability";
  const slot = "staging";
  const result = await client.diagnostics.getSiteDiagnosticCategorySlot(
    resourceGroupName,
    siteName,
    diagnosticCategory,
    slot
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  client = new WebSiteManagementClient(credential, subscriptionId);
  await getAppSlotDiagnosticCategory();
}
main();
