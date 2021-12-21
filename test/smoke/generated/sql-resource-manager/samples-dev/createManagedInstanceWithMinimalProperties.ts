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
 * This sample demonstrates how to Creates or updates a managed instance.
 *
 * @summary Creates or updates a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceCreateMin.json
 */
import {
  ManagedInstance,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createManagedInstanceWithMinimalProperties() {
  const subscriptionId = "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = "testrg";
  const managedInstanceName = "testinstance";
  const parameters: ManagedInstance = {
    administratorLogin: "dummylogin",
    administratorLoginPassword: "PLACEHOLDER",
    licenseType: "LicenseIncluded",
    location: "Japan East",
    sku: { name: "GP_Gen4", tier: "GeneralPurpose" },
    storageSizeInGB: 1024,
    subnetId:
      "/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1",
    vCores: 8
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstances.beginCreateOrUpdateAndWait(
    resourceGroupName,
    managedInstanceName,
    parameters
  );
  console.log(result);
}

createManagedInstanceWithMinimalProperties().catch(console.error);