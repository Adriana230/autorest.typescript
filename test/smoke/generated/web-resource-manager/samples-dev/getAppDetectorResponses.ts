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
 * This sample demonstrates how to Description for List Site Detector Responses
 *
 * @summary Description for List Site Detector Responses
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/Diagnostics_ListSiteDetectorResponses.json
 */
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getAppDetectorResponses() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const siteName = "SampleApp";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.diagnostics.listSiteDetectorResponsesSlot(
    resourceGroupName,
    siteName,
    slot
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAppDetectorResponses().catch(console.error);
