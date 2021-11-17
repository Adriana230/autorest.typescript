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
 * This sample demonstrates how to Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.
 *
 * @summary Creates an import operation that imports a bacpac into an existing database. The existing database must be empty.
 */
import {
  ImportExtensionRequest,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: SqlManagementClient;
//databases.beginCreateImportOperationAndWait
async function importBacpacIntoAnExistingDatabaseMinWithStorageKey() {
  const resourceGroupName = "sqlcrudtest-4799";
  const serverName = "sqlcrudtest-5961";
  const databaseName = "testdb";
  const extensionName = "import";
  const parameters: ImportExtensionRequest = {
    administratorLogin: "dummyLogin",
    administratorLoginPassword: "Un53cuRE!",
    operationMode: "Import",
    storageKey:
      "sdlfkjdsf+sdlfkjsdlkfsjdfLDKFJSDLKFDFKLjsdfksjdflsdkfD2342309432849328479324/3RSD==",
    storageKeyType: "StorageAccessKey",
    storageUri: "https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac"
  };
  await client.databases
    .beginCreateImportOperationAndWait(
      resourceGroupName,
      serverName,
      databaseName,
      extensionName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  client = new SqlManagementClient(credential, subscriptionId);
  await importBacpacIntoAnExistingDatabaseMinWithStorageKey();
}
main();
