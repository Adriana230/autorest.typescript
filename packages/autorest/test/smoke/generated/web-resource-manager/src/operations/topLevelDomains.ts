/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TopLevelDomains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  TopLevelDomain,
  TopLevelDomainsListNextOptionalParams,
  TopLevelDomainsListOptionalParams,
  TldLegalAgreement,
  TopLevelDomainAgreementOption,
  TopLevelDomainsListAgreementsNextOptionalParams,
  TopLevelDomainsListAgreementsOptionalParams,
  TopLevelDomainsListResponse,
  TopLevelDomainsGetOptionalParams,
  TopLevelDomainsGetResponse,
  TopLevelDomainsListAgreementsResponse,
  TopLevelDomainsListNextResponse,
  TopLevelDomainsListAgreementsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TopLevelDomains operations. */
export class TopLevelDomainsImpl implements TopLevelDomains {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class TopLevelDomains class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for Get all top-level domains supported for registration.
   * @param options The options parameters.
   */
  public list(
    options?: TopLevelDomainsListOptionalParams
  ): PagedAsyncIterableIterator<TopLevelDomain> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: TopLevelDomainsListOptionalParams
  ): AsyncIterableIterator<TopLevelDomain[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: TopLevelDomainsListOptionalParams
  ): AsyncIterableIterator<TopLevelDomain> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param options The options parameters.
   */
  public listAgreements(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams
  ): PagedAsyncIterableIterator<TldLegalAgreement> {
    const iter = this.listAgreementsPagingAll(name, agreementOption, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAgreementsPagingPage(name, agreementOption, options);
      }
    };
  }

  private async *listAgreementsPagingPage(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams
  ): AsyncIterableIterator<TldLegalAgreement[]> {
    let result = await this._listAgreements(name, agreementOption, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAgreementsNext(
        name,
        agreementOption,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAgreementsPagingAll(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams
  ): AsyncIterableIterator<TldLegalAgreement> {
    for await (const page of this.listAgreementsPagingPage(
      name,
      agreementOption,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Description for Get all top-level domains supported for registration.
   * @param options The options parameters.
   */
  private _list(
    options?: TopLevelDomainsListOptionalParams
  ): Promise<TopLevelDomainsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for Get details of a top-level domain.
   * @param name Name of the top-level domain.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: TopLevelDomainsGetOptionalParams
  ): Promise<TopLevelDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getOperationSpec
    );
  }

  /**
   * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param options The options parameters.
   */
  private _listAgreements(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    options?: TopLevelDomainsListAgreementsOptionalParams
  ): Promise<TopLevelDomainsListAgreementsResponse> {
    return this.client.sendOperationRequest(
      { name, agreementOption, options },
      listAgreementsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TopLevelDomainsListNextOptionalParams
  ): Promise<TopLevelDomainsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAgreementsNext
   * @param name Name of the top-level domain.
   * @param agreementOption Domain agreement options.
   * @param nextLink The nextLink from the previous successful call to the ListAgreements method.
   * @param options The options parameters.
   */
  private _listAgreementsNext(
    name: string,
    agreementOption: TopLevelDomainAgreementOption,
    nextLink: string,
    options?: TopLevelDomainsListAgreementsNextOptionalParams
  ): Promise<TopLevelDomainsListAgreementsNextResponse> {
    return this.client.sendOperationRequest(
      { name, agreementOption, nextLink, options },
      listAgreementsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const listAgreementsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}/listAgreements",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TldLegalAgreementCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.agreementOption,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId, Parameters.name],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopLevelDomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAgreementsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TldLegalAgreementCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.name,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};