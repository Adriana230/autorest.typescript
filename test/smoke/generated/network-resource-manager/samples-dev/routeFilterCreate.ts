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
 * This sample demonstrates how to Creates or updates a route filter in a specified resource group.
 *
 * @summary Creates or updates a route filter in a specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/RouteFilterCreate.json
 */
import {
  RouteFilter,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function routeFilterCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const routeFilterName = "filterName";
  const routeFilterParameters: RouteFilter = {
    location: "West US",
    rules: [
      {
        name: "ruleName",
        access: "Allow",
        communities: ["12076:5030", "12076:5040"],
        routeFilterRuleType: "Community"
      }
    ],
    tags: { key1: "value1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routeFilters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    routeFilterName,
    routeFilterParameters
  );
  console.log(result);
}

routeFilterCreate().catch(console.error);
