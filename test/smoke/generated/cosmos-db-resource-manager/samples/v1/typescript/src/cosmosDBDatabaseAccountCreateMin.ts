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
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 *
 * @summary Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 */
import {
  DatabaseAccountCreateUpdateParameters,
  CosmosDBManagementClient
} from "@msinternal/cosmos-db-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: CosmosDBManagementClient;
//databaseAccounts.beginCreateOrUpdateAndWait
async function cosmosDBDatabaseAccountCreateMin() {
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const createUpdateParameters: DatabaseAccountCreateUpdateParameters = {
    databaseAccountOfferType: "Standard",
    location: "westus",
    locations: [
      {
        failoverPriority: 0,
        isZoneRedundant: false,
        locationName: "southcentralus"
      }
    ]
  };
  await client.databaseAccounts
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      accountName,
      createUpdateParameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new CosmosDBManagementClient(credential, subscriptionId);
  await cosmosDBDatabaseAccountCreateMin();
}
main();