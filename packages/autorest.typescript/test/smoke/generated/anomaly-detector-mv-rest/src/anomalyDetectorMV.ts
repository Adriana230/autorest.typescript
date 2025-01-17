// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorMVClient } from "./clientDefinitions";

export interface AnomalyDetectorMVClientOptions extends ClientOptions {
  ApiVersion?: "v1.1";
}

/**
 * Initialize a new instance of the class AnomalyDetectorMVClient class.
 * @param Endpoint type: string Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials type: KeyCredential
 */
export default function createClient(
  Endpoint: string,
  credentials: KeyCredential,
  options: AnomalyDetectorMVClientOptions = {}
): AnomalyDetectorMVClient {
  const ApiVersion = options.ApiVersion ?? "v1.1";
  const baseUrl =
    options.baseUrl ?? `${Endpoint}/anomalydetector/${ApiVersion}`;

  options = {
    ...options,
    credentials: {
      apiKeyHeaderName: "Ocp-Apim-Subscription-Key"
    }
  };

  const userAgentInfo = `azsdk-js-anomaly-detector-mv-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as AnomalyDetectorMVClient;

  return client;
}
