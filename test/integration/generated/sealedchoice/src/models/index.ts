/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Profile for the container service master. */
export interface ContainerServiceMasterProfile {
  /** Number of masters (VMs) in the container service cluster. Allowed values are 1, 3, and 5. The default value is 1. */
  count?: Count;
  /** DNS prefix to be used to create the FQDN for the master pool. */
  dnsPrefix: string;
  /** FirstConsecutiveStaticIP used to specify the first static ip of masters. */
  firstConsecutiveStaticIP?: string;
  /**
   * FQDN for the master pool.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly fqdn?: string;
}

export interface PathsV3R3RxOauth2TokenPostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Grant type is expected to be refresh_token */
  grantType: TokenGrantType;
}

/** Defines values for TokenGrantType. */
export type TokenGrantType = "refresh_token" | "password";
/** Defines values for Count. */
export type Count = 1 | 3 | 5;

/** Optional parameters. */
export interface AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SealedChoiceClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
