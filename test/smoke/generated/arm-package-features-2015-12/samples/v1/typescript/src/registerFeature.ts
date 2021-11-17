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
 * This sample demonstrates how to Unregisters the preview feature for the subscription.
 *
 * @summary Unregisters the preview feature for the subscription.
 */
import { FeatureClient } from "@msinternal/arm-package-features-2015-12";
import { DefaultAzureCredential } from "@azure/identity";

let client: FeatureClient;
//features.unregister
async function registerFeature() {
  const resourceProviderNamespace = "Resource Provider Namespace";
  const featureName = "feature";
  await client.features
    .unregister(resourceProviderNamespace, featureName)
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ff23096b-f5a2-46ea-bd62-59c3e93fef9a";
  client = new FeatureClient(credential, subscriptionId);
  await registerFeature();
}
main();
