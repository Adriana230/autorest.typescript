/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Paging } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CustomUrlPagingClient } from "../customUrlPagingClient";
import {
  Product,
  PagingGetPagesPartialUrlNextOptionalParams,
  PagingGetPagesPartialUrlOptionalParams,
  PagingGetPagesPartialUrlResponse,
  PagingGetPagesPartialUrlOperationNextOptionalParams,
  PagingGetPagesPartialUrlOperationOptionalParams,
  PagingGetPagesPartialUrlOperationResponse,
  PagingGetPagesPartialUrlOperationNextResponse,
  PagingGetPagesPartialUrlNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Paging operations. */
export class PagingImpl implements Paging {
  private readonly client: CustomUrlPagingClient;

  /**
   * Initialize a new instance of the class Paging class.
   * @param client Reference to the service client
   */
  constructor(client: CustomUrlPagingClient) {
    this.client = client;
  }

  /**
   * A paging operation that combines custom url, paging and partial URL and expect to concat after host
   * @param accountName Account Name
   * @param options The options parameters.
   */
  public listPagesPartialUrl(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.getPagesPartialUrlPagingAll(accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.getPagesPartialUrlPagingPage(
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *getPagesPartialUrlPagingPage(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Product[]> {
    let result: PagingGetPagesPartialUrlResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getPagesPartialUrl(accountName, options);
      let page = result.values || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getPagesPartialUrlNext(
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.values || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagesPartialUrlPagingAll(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams
  ): AsyncIterableIterator<Product> {
    for await (const page of this.getPagesPartialUrlPagingPage(
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * A paging operation that combines custom url, paging and partial URL with next operation
   * @param accountName Account Name
   * @param options The options parameters.
   */
  public listPagesPartialUrlOperation(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.getPagesPartialUrlOperationPagingAll(
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.getPagesPartialUrlOperationPagingPage(
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *getPagesPartialUrlOperationPagingPage(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Product[]> {
    let result: PagingGetPagesPartialUrlOperationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getPagesPartialUrlOperation(accountName, options);
      let page = result.values || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getPagesPartialUrlOperationNext(
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.values || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagesPartialUrlOperationPagingAll(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams
  ): AsyncIterableIterator<Product> {
    for await (const page of this.getPagesPartialUrlOperationPagingPage(
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * A paging operation that combines custom url, paging and partial URL
   * @param accountName Account Name
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listPagesPartialUrlOperationNext(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams
  ): PagedAsyncIterableIterator<Product> {
    const iter = this.getPagesPartialUrlOperationNextPagingAll(
      accountName,
      nextLink,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.getPagesPartialUrlOperationNextPagingPage(
          accountName,
          nextLink,
          options,
          settings
        );
      }
    };
  }

  private async *getPagesPartialUrlOperationNextPagingPage(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Product[]> {
    let result: PagingGetPagesPartialUrlOperationNextResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getPagesPartialUrlOperationNext(
        accountName,
        nextLink,
        options
      );
      let page = result.values || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getPagesPartialUrlOperationNext(
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.values || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagesPartialUrlOperationNextPagingAll(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams
  ): AsyncIterableIterator<Product> {
    for await (const page of this.getPagesPartialUrlOperationNextPagingPage(
      accountName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * A paging operation that combines custom url, paging and partial URL and expect to concat after host
   * @param accountName Account Name
   * @param options The options parameters.
   */
  private _getPagesPartialUrl(
    accountName: string,
    options?: PagingGetPagesPartialUrlOptionalParams
  ): Promise<PagingGetPagesPartialUrlResponse> {
    return this.client.sendOperationRequest(
      { accountName, options },
      getPagesPartialUrlOperationSpec
    );
  }

  /**
   * A paging operation that combines custom url, paging and partial URL with next operation
   * @param accountName Account Name
   * @param options The options parameters.
   */
  private _getPagesPartialUrlOperation(
    accountName: string,
    options?: PagingGetPagesPartialUrlOperationOptionalParams
  ): Promise<PagingGetPagesPartialUrlOperationResponse> {
    return this.client.sendOperationRequest(
      { accountName, options },
      getPagesPartialUrlOperationOperationSpec
    );
  }

  /**
   * A paging operation that combines custom url, paging and partial URL
   * @param accountName Account Name
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _getPagesPartialUrlOperationNext(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlOperationNextOptionalParams
  ): Promise<PagingGetPagesPartialUrlOperationNextResponse> {
    return this.client.sendOperationRequest(
      { accountName, nextLink, options },
      getPagesPartialUrlOperationNextOperationSpec
    );
  }

  /**
   * GetPagesPartialUrlNext
   * @param accountName Account Name
   * @param nextLink The nextLink from the previous successful call to the GetPagesPartialUrl method.
   * @param options The options parameters.
   */
  private _getPagesPartialUrlNext(
    accountName: string,
    nextLink: string,
    options?: PagingGetPagesPartialUrlNextOptionalParams
  ): Promise<PagingGetPagesPartialUrlNextResponse> {
    return this.client.sendOperationRequest(
      { accountName, nextLink, options },
      getPagesPartialUrlNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getPagesPartialUrlOperationSpec: coreClient.OperationSpec = {
  path: "/paging/customurl/partialnextlink",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host],
  headerParameters: [Parameters.accept],
  serializer
};
const getPagesPartialUrlOperationOperationSpec: coreClient.OperationSpec = {
  path: "/paging/customurl/partialnextlinkop",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host],
  headerParameters: [Parameters.accept],
  serializer
};
const getPagesPartialUrlOperationNextOperationSpec: coreClient.OperationSpec = {
  path: "/paging/customurl/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getPagesPartialUrlNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductResult
    },
    default: {}
  },
  urlParameters: [Parameters.accountName, Parameters.host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
