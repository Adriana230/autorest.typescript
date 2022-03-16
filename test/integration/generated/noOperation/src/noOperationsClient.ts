/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { NoOperationsClientOptionalParams } from "./models";

export class NoOperationsClient extends coreClient.ServiceClient {
  /**
   * Initializes a new instance of the NoOperationsClient class.
   * @param options The parameter options
   */
  constructor(options?: NoOperationsClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: NoOperationsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-no-operation/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? ""
    };
    super(optionsWithDefaults);
  }
}
