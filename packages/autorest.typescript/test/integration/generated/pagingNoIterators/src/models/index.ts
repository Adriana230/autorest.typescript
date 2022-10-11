/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ProductResultValue {
  value?: Product[];
  nextLink?: string;
}

export interface Product {
  properties?: ProductProperties;
}

export interface ProductProperties {
  id?: number;
  name?: string;
}

export interface ProductResult {
  values?: Product[];
  nextLink?: string;
}

export interface BodyParam {
  name?: string;
}

export interface OdataProductResult {
  values?: Product[];
  odataNextLink?: string;
}

export interface ProductResultValueWithXMSClientName {
  indexes?: Product[];
  nextLink?: string;
}

export interface OperationResult {
  /** The status of the request */
  status?: OperationResultStatus;
}

/** Parameter group */
export interface PagingGetMultiplePagesOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface PagingGetOdataMultiplePagesOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface PagingGetMultiplePagesWithOffsetOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Offset of return value */
  offset: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Parameter group */
export interface CustomParameterGroup {
  /** Sets the api version to use. */
  apiVersion: string;
  /** Sets the tenant to use. */
  tenant: string;
}

/** Parameter group */
export interface PagingGetMultiplePagesLroOptions {
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Known values of {@link OperationResultStatus} that the service accepts. */
export enum KnownOperationResultStatus {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "canceled",
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Created */
  Created = "Created",
  /** Updating */
  Updating = "Updating",
  /** Updated */
  Updated = "Updated",
  /** Deleting */
  Deleting = "Deleting",
  /** Deleted */
  Deleted = "Deleted",
  /** OK */
  OK = "OK"
}

/**
 * Defines values for OperationResultStatus. \
 * {@link KnownOperationResultStatus} can be used interchangeably with OperationResultStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **canceled** \
 * **Accepted** \
 * **Creating** \
 * **Created** \
 * **Updating** \
 * **Updated** \
 * **Deleting** \
 * **Deleted** \
 * **OK**
 */
export type OperationResultStatus = string;

/** Optional parameters. */
export interface PagingGetNoItemNamePagesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNoItemNamePages operation. */
export type PagingGetNoItemNamePagesResponse = ProductResultValue;

/** Optional parameters. */
export interface PagingGetNullNextLinkNamePagesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNullNextLinkNamePages operation. */
export type PagingGetNullNextLinkNamePagesResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetSinglePagesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePages operation. */
export type PagingGetSinglePagesResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetSinglePagesWithBodyParamsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePagesWithBodyParams operation. */
export type PagingGetSinglePagesWithBodyParamsResponse = ProductResult;

/** Optional parameters. */
export interface PagingFirstResponseEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the firstResponseEmpty operation. */
export type PagingFirstResponseEmptyResponse = ProductResultValue;

/** Optional parameters. */
export interface PagingGetMultiplePagesOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePages operation. */
export type PagingGetMultiplePagesResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetWithQueryParamsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWithQueryParams operation. */
export type PagingGetWithQueryParamsResponse = ProductResult;

/** Optional parameters. */
export interface PagingDuplicateParamsOptionalParams
  extends coreClient.OperationOptions {
  /** OData filter options. Pass in 'foo' */
  filter?: string;
}

/** Contains response data for the duplicateParams operation. */
export type PagingDuplicateParamsResponse = ProductResult;

/** Optional parameters. */
export interface PagingPageWithMaxPageSizeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the pageWithMaxPageSize operation. */
export type PagingPageWithMaxPageSizeResponse = ProductResult;

/** Optional parameters. */
export interface PagingNextOperationWithQueryParamsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the nextOperationWithQueryParams operation. */
export type PagingNextOperationWithQueryParamsResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetOdataMultiplePagesOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getOdataMultiplePages operation. */
export type PagingGetOdataMultiplePagesResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesWithOffsetOptionalParams
  extends coreClient.OperationOptions {
  clientRequestId?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Contains response data for the getMultiplePagesWithOffset operation. */
export type PagingGetMultiplePagesWithOffsetResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesRetryFirstOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesRetryFirst operation. */
export type PagingGetMultiplePagesRetryFirstResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesRetrySecondOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesRetrySecond operation. */
export type PagingGetMultiplePagesRetrySecondResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetSinglePagesFailureOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePagesFailure operation. */
export type PagingGetSinglePagesFailureResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFailure operation. */
export type PagingGetMultiplePagesFailureResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureUriOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureUri operation. */
export type PagingGetMultiplePagesFailureUriResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFragmentNextLinkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFragmentNextLink operation. */
export type PagingGetMultiplePagesFragmentNextLinkResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFragmentWithGroupingNextLink operation. */
export type PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesLROOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the getMultiplePagesLRO operation. */
export type PagingGetMultiplePagesLROResponse = ProductResult;

/** Optional parameters. */
export interface PagingAppendApiVersionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the appendApiVersion operation. */
export type PagingAppendApiVersionResponse = ProductResult;

/** Optional parameters. */
export interface PagingReplaceApiVersionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the replaceApiVersion operation. */
export type PagingReplaceApiVersionResponse = ProductResult;

/** Optional parameters. */
export interface PagingNextFragmentOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the nextFragment operation. */
export type PagingNextFragmentResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingNextFragmentWithGroupingOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the nextFragmentWithGrouping operation. */
export type PagingNextFragmentWithGroupingResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPagingModelWithItemNameWithXMSClientName operation. */
export type PagingGetPagingModelWithItemNameWithXMSClientNameResponse = ProductResultValueWithXMSClientName;

/** Optional parameters. */
export interface PagingGetNoItemNamePagesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNoItemNamePagesNext operation. */
export type PagingGetNoItemNamePagesNextResponse = ProductResultValue;

/** Optional parameters. */
export interface PagingGetSinglePagesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePagesNext operation. */
export type PagingGetSinglePagesNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetSinglePagesWithBodyParamsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePagesWithBodyParamsNext operation. */
export type PagingGetSinglePagesWithBodyParamsNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingFirstResponseEmptyNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the firstResponseEmptyNext operation. */
export type PagingFirstResponseEmptyNextResponse = ProductResultValue;

/** Optional parameters. */
export interface PagingGetMultiplePagesNextOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePagesNext operation. */
export type PagingGetMultiplePagesNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingDuplicateParamsNextOptionalParams
  extends coreClient.OperationOptions {
  /** OData filter options. Pass in 'foo' */
  filter?: string;
}

/** Contains response data for the duplicateParamsNext operation. */
export type PagingDuplicateParamsNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingPageWithMaxPageSizeNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the pageWithMaxPageSizeNext operation. */
export type PagingPageWithMaxPageSizeNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetOdataMultiplePagesNextOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
  clientRequestId?: string;
}

/** Contains response data for the getOdataMultiplePagesNext operation. */
export type PagingGetOdataMultiplePagesNextResponse = OdataProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesWithOffsetNextOptionalParams
  extends coreClient.OperationOptions {
  clientRequestId?: string;
  /** Sets the maximum number of items to return in the response. */
  maxresults?: number;
  /** Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds. */
  timeout?: number;
}

/** Contains response data for the getMultiplePagesWithOffsetNext operation. */
export type PagingGetMultiplePagesWithOffsetNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesRetryFirstNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesRetryFirstNext operation. */
export type PagingGetMultiplePagesRetryFirstNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesRetrySecondNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesRetrySecondNext operation. */
export type PagingGetMultiplePagesRetrySecondNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetSinglePagesFailureNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSinglePagesFailureNext operation. */
export type PagingGetSinglePagesFailureNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureNext operation. */
export type PagingGetMultiplePagesFailureNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesFailureUriNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMultiplePagesFailureUriNext operation. */
export type PagingGetMultiplePagesFailureUriNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetMultiplePagesLRONextOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  pagingGetMultiplePagesLroOptions?: PagingGetMultiplePagesLroOptions;
  clientRequestId?: string;
}

/** Contains response data for the getMultiplePagesLRONext operation. */
export type PagingGetMultiplePagesLRONextResponse = ProductResult;

/** Optional parameters. */
export interface PagingAppendApiVersionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the appendApiVersionNext operation. */
export type PagingAppendApiVersionNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingReplaceApiVersionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the replaceApiVersionNext operation. */
export type PagingReplaceApiVersionNextResponse = ProductResult;

/** Optional parameters. */
export interface PagingGetPagingModelWithItemNameWithXMSClientNameNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPagingModelWithItemNameWithXMSClientNameNext operation. */
export type PagingGetPagingModelWithItemNameWithXMSClientNameNextResponse = ProductResultValueWithXMSClientName;

/** Optional parameters. */
export interface PagingNoIteratorsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
