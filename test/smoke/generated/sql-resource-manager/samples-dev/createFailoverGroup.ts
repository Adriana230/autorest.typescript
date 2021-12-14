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
 * This sample demonstrates how to Creates or updates a failover group.
 *
 * @summary Creates or updates a failover group.
 */
import {
  InstanceFailoverGroup,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//instanceFailoverGroups.beginCreateOrUpdateAndWait
async function createFailoverGroup() {
  const resourceGroupName = "Default";
  const locationName = "Japan East";
  const failoverGroupName = "failover-group-test-3";
  const parameters: InstanceFailoverGroup = {
    managedInstancePairs: [
      {
        partnerManagedInstanceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-secondary-mngdInstance",
        primaryManagedInstanceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-primary-mngdInstance"
      }
    ],
    partnerRegions: [{ location: "Japan West" }],
    readOnlyEndpoint: { failoverPolicy: "Disabled" },
    readWriteEndpoint: {
      failoverPolicy: "Automatic",
      failoverWithDataLossGracePeriodMinutes: 480
    }
  };
  const result = await client.instanceFailoverGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    locationName,
    failoverGroupName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await createFailoverGroup();
}
main();
