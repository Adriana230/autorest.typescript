/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { PagingImpl } from "./operations";
import { Paging } from "./operationsInterfaces";
import { PagingNoIteratorsClientOptionalParams } from "./models";

export class PagingNoIteratorsClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the PagingNoIteratorsClient class.
   * @param options The parameter options
   */
  constructor(options?: PagingNoIteratorsClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PagingNoIteratorsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-paging-no-iterators/1.0.0-preview1`;
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
      baseUri: options.endpoint || "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.paging = new PagingImpl(this);
  }

  paging: Paging;
}
