/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SubscriptionUsage,
  SubscriptionUsagesListByLocationOptionalParams,
  SubscriptionUsagesGetOptionalParams,
  SubscriptionUsagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SubscriptionUsages. */
export interface SubscriptionUsages {
  /**
   * Gets all subscription usage metrics in a given location.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<SubscriptionUsage>;
  /**
   * Gets a subscription usage metric.
   * @param locationName The name of the region where the resource is located.
   * @param usageName Name of usage metric to return.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    usageName: string,
    options?: SubscriptionUsagesGetOptionalParams
  ): Promise<SubscriptionUsagesGetResponse>;
}
