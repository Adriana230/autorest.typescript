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
 * This sample demonstrates how to Get top resource consuming queries of a managed instance.
 *
 * @summary Get top resource consuming queries of a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceTopQueriesList.json
 */
import {
  QueryTimeGrainType,
  MetricType,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function obtainListOfInstanceTopResourceConsumingQueries() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const managedInstanceName = "sqlcrudtest-4645";
  const interval = "PT1H";
  const observationMetric = "duration";
  const options = {
    interval: interval as QueryTimeGrainType,
    observationMetric: observationMetric as MetricType
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByManagedInstance(
    resourceGroupName,
    managedInstanceName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

obtainListOfInstanceTopResourceConsumingQueries().catch(console.error);
