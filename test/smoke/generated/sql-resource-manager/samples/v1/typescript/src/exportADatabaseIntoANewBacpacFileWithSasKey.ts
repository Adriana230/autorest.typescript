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
 * This sample demonstrates how to Exports a database to a bacpac.
 *
 * @summary Exports a database to a bacpac.
 */
import {
  ExportRequest,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databases.beginExportAndWait
async function exportADatabaseIntoANewBacpacFileWithSasKey() {
  const resourceGroupName = "sqlcrudtest-4799";
  const serverName = "sqlcrudtest-5961";
  const databaseName = "testdb";
  const parameters: ExportRequest = {
    administratorLogin: "dummyLogin",
    administratorLoginPassword: "Un53cuRE!",
    authenticationType: "SQL",
    storageKey:
      "?sr=b&sp=rw&se=2018-01-01T00%3A00%3A00Z&sig=sdfsdfklsdjflSLIFJLSIEJFLKSDJFDd/%2wdfskdjf3%3D&sv=2015-07-08",
    storageKeyType: "SharedAccessKey",
    storageUri: "https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac"
  };
  await client.databases
    .beginExportAndWait(resourceGroupName, serverName, databaseName, parameters)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await exportADatabaseIntoANewBacpacFileWithSasKey();
}
main();