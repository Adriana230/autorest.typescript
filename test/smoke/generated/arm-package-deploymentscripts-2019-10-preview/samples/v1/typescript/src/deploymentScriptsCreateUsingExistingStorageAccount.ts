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
 * This sample demonstrates how to Creates a deployment script.
 *
 * @summary Creates a deployment script.
 */
import {
  AzurePowerShellScript,
  DeploymentScriptsClient
} from "@msinternal/arm-package-deploymentscripts-2019-10-preview";
import { DefaultAzureCredential } from "@azure/identity";

let client: DeploymentScriptsClient;
//deploymentScripts.beginCreateAndWait
async function deploymentScriptsCreateUsingExistingStorageAccount() {
  const resourceGroupName = "script-rg";
  const scriptName = "MyDeploymentScript";
  const deploymentScript: AzurePowerShellScript = {
    arguments: "-Location 'westus' -Name \"*rg2\"",
    azPowerShellVersion: "1.7.0",
    cleanupPreference: "Always",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/scriptRG/providers/MicrosoftManagedIdentity/userAssignedIdentities/uai": {}
      }
    },
    kind: "AzurePowerShell",
    location: "westus",
    retentionInterval: PT7D,
    scriptContent:
      "Param([string]$Location,[string]$Name) $deploymentScriptOutputs['test'] = 'value' Get-AzResourceGroup -Location $Location -Name $Name",
    storageAccountSettings: {
      storageAccountKey: "contosostoragekey",
      storageAccountName: "contosostorage"
    },
    supportingScriptUris: [
      "https://uri1.to.supporting.script",
      "https://uri2.to.supporting.script"
    ],
    timeout: PT1H
  };
  await client.deploymentScripts
    .beginCreateAndWait(resourceGroupName, scriptName, deploymentScript)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  client = new DeploymentScriptsClient(credential, subscriptionId);
  await deploymentScriptsCreateUsingExistingStorageAccount();
}
main();
