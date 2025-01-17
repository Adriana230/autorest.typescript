// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { SpecialWordsClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class SpecialWordsClient class.
 *
 */
export default function createClient(
  options: ClientOptions = {}
): SpecialWordsClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-special-words-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as SpecialWordsClient;

  return {
    ...client,
    operation: {
      for: (options) => {
        return client.path("/special-words/operation/for").get(options);
      },
    },
    parameter: {
      getWithIf: (options) => {
        return client.path("/special-words/parameter/if").get(options);
      },
      getWithFilter: (options) => {
        return client.path("/special-words/parameter/filter").get(options);
      },
    },
    model: {
      get: (options) => {
        return client.path("/special-words/model/get").get(options);
      },
      put: (options) => {
        return client.path("/special-words/model/put").put(options);
      },
    },
  };
}
