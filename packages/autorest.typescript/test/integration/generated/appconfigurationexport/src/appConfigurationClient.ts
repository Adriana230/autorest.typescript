/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "./pagingHelper";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  AppConfigurationClientOptionalParams,
  Key,
  GetKeysNextOptionalParams,
  GetKeysOptionalParams,
  GetKeysResponse,
  KeyValue,
  GetKeyValuesNextOptionalParams,
  GetKeyValuesOptionalParams,
  GetKeyValuesResponse,
  Label,
  GetLabelsNextOptionalParams,
  GetLabelsOptionalParams,
  GetLabelsResponse,
  GetRevisionsNextOptionalParams,
  GetRevisionsOptionalParams,
  GetRevisionsResponse,
  CheckKeysOptionalParams,
  CheckKeysResponse,
  CheckKeyValuesOptionalParams,
  CheckKeyValuesResponse,
  GetKeyValueOptionalParams,
  GetKeyValueResponse,
  PutKeyValueOptionalParams,
  PutKeyValueResponse,
  DeleteKeyValueOptionalParams,
  DeleteKeyValueResponse,
  CheckKeyValueOptionalParams,
  CheckKeyValueResponse,
  CheckLabelsOptionalParams,
  CheckLabelsResponse,
  PutLockOptionalParams,
  PutLockResponse,
  DeleteLockOptionalParams,
  DeleteLockResponse,
  CheckRevisionsOptionalParams,
  CheckRevisionsResponse,
  GetKeysNextResponse,
  GetKeyValuesNextResponse,
  GetLabelsNextResponse,
  GetRevisionsNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
/** @internal */
export class AppConfigurationClient extends coreClient.ServiceClient {
  endpoint: string;
  syncToken?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AppConfigurationClient class.
   * @param endpoint The endpoint of the App Configuration instance to send requests to.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: AppConfigurationClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AppConfigurationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-appconfiguration/1.0.0-preview1`;
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
      baseUri: options.endpoint ?? options.baseUri ?? "{endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "1.0";
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  public listKeys(
    options?: GetKeysOptionalParams
  ): PagedAsyncIterableIterator<Key> {
    const iter = this.getKeysPagingAll(options);
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
        return this.getKeysPagingPage(options, settings);
      }
    };
  }

  private async *getKeysPagingPage(
    options?: GetKeysOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Key[]> {
    let result: GetKeysResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getKeys(options);
      let page = result.items || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getKeysNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.items || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getKeysPagingAll(
    options?: GetKeysOptionalParams
  ): AsyncIterableIterator<Key> {
    for await (const page of this.getKeysPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  public listKeyValues(
    options?: GetKeyValuesOptionalParams
  ): PagedAsyncIterableIterator<KeyValue> {
    const iter = this.getKeyValuesPagingAll(options);
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
        return this.getKeyValuesPagingPage(options, settings);
      }
    };
  }

  private async *getKeyValuesPagingPage(
    options?: GetKeyValuesOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<KeyValue[]> {
    let result: GetKeyValuesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getKeyValues(options);
      let page = result.items || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getKeyValuesNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.items || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getKeyValuesPagingAll(
    options?: GetKeyValuesOptionalParams
  ): AsyncIterableIterator<KeyValue> {
    for await (const page of this.getKeyValuesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  public listLabels(
    options?: GetLabelsOptionalParams
  ): PagedAsyncIterableIterator<Label> {
    const iter = this.getLabelsPagingAll(options);
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
        return this.getLabelsPagingPage(options, settings);
      }
    };
  }

  private async *getLabelsPagingPage(
    options?: GetLabelsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Label[]> {
    let result: GetLabelsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getLabels(options);
      let page = result.items || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getLabelsNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.items || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getLabelsPagingAll(
    options?: GetLabelsOptionalParams
  ): AsyncIterableIterator<Label> {
    for await (const page of this.getLabelsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  public listRevisions(
    options?: GetRevisionsOptionalParams
  ): PagedAsyncIterableIterator<KeyValue> {
    const iter = this.getRevisionsPagingAll(options);
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
        return this.getRevisionsPagingPage(options, settings);
      }
    };
  }

  private async *getRevisionsPagingPage(
    options?: GetRevisionsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<KeyValue[]> {
    let result: GetRevisionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getRevisions(options);
      let page = result.items || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getRevisionsNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.items || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getRevisionsPagingAll(
    options?: GetRevisionsOptionalParams
  ): AsyncIterableIterator<KeyValue> {
    for await (const page of this.getRevisionsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  private _getKeys(options?: GetKeysOptionalParams): Promise<GetKeysResponse> {
    return this.sendOperationRequest({ options }, getKeysOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeys(options?: CheckKeysOptionalParams): Promise<CheckKeysResponse> {
    return this.sendOperationRequest({ options }, checkKeysOperationSpec);
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  private _getKeyValues(
    options?: GetKeyValuesOptionalParams
  ): Promise<GetKeyValuesResponse> {
    return this.sendOperationRequest({ options }, getKeyValuesOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeyValues(
    options?: CheckKeyValuesOptionalParams
  ): Promise<CheckKeyValuesResponse> {
    return this.sendOperationRequest({ options }, checkKeyValuesOperationSpec);
  }

  /**
   * Gets a single key-value.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  getKeyValue(
    key: string,
    options?: GetKeyValueOptionalParams
  ): Promise<GetKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      getKeyValueOperationSpec
    );
  }

  /**
   * Creates a key-value.
   * @param key The key of the key-value to create.
   * @param options The options parameters.
   */
  putKeyValue(
    key: string,
    options?: PutKeyValueOptionalParams
  ): Promise<PutKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      putKeyValueOperationSpec
    );
  }

  /**
   * Deletes a key-value.
   * @param key The key of the key-value to delete.
   * @param options The options parameters.
   */
  deleteKeyValue(
    key: string,
    options?: DeleteKeyValueOptionalParams
  ): Promise<DeleteKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      deleteKeyValueOperationSpec
    );
  }

  /**
   * Requests the headers and status of the given resource.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  checkKeyValue(
    key: string,
    options?: CheckKeyValueOptionalParams
  ): Promise<CheckKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      checkKeyValueOperationSpec
    );
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  private _getLabels(
    options?: GetLabelsOptionalParams
  ): Promise<GetLabelsResponse> {
    return this.sendOperationRequest({ options }, getLabelsOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkLabels(
    options?: CheckLabelsOptionalParams
  ): Promise<CheckLabelsResponse> {
    return this.sendOperationRequest({ options }, checkLabelsOperationSpec);
  }

  /**
   * Locks a key-value.
   * @param key The key of the key-value to lock.
   * @param options The options parameters.
   */
  putLock(
    key: string,
    options?: PutLockOptionalParams
  ): Promise<PutLockResponse> {
    return this.sendOperationRequest({ key, options }, putLockOperationSpec);
  }

  /**
   * Unlocks a key-value.
   * @param key The key of the key-value to unlock.
   * @param options The options parameters.
   */
  deleteLock(
    key: string,
    options?: DeleteLockOptionalParams
  ): Promise<DeleteLockResponse> {
    return this.sendOperationRequest({ key, options }, deleteLockOperationSpec);
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  private _getRevisions(
    options?: GetRevisionsOptionalParams
  ): Promise<GetRevisionsResponse> {
    return this.sendOperationRequest({ options }, getRevisionsOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkRevisions(
    options?: CheckRevisionsOptionalParams
  ): Promise<CheckRevisionsResponse> {
    return this.sendOperationRequest({ options }, checkRevisionsOperationSpec);
  }

  /**
   * GetKeysNext
   * @param nextLink The nextLink from the previous successful call to the GetKeys method.
   * @param options The options parameters.
   */
  private _getKeysNext(
    nextLink: string,
    options?: GetKeysNextOptionalParams
  ): Promise<GetKeysNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getKeysNextOperationSpec
    );
  }

  /**
   * GetKeyValuesNext
   * @param nextLink The nextLink from the previous successful call to the GetKeyValues method.
   * @param options The options parameters.
   */
  private _getKeyValuesNext(
    nextLink: string,
    options?: GetKeyValuesNextOptionalParams
  ): Promise<GetKeyValuesNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getKeyValuesNextOperationSpec
    );
  }

  /**
   * GetLabelsNext
   * @param nextLink The nextLink from the previous successful call to the GetLabels method.
   * @param options The options parameters.
   */
  private _getLabelsNext(
    nextLink: string,
    options?: GetLabelsNextOptionalParams
  ): Promise<GetLabelsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getLabelsNextOperationSpec
    );
  }

  /**
   * GetRevisionsNext
   * @param nextLink The nextLink from the previous successful call to the GetRevisions method.
   * @param options The options parameters.
   */
  private _getRevisionsNext(
    nextLink: string,
    options?: GetRevisionsNextOptionalParams
  ): Promise<GetRevisionsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getRevisionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getKeysOperationSpec: coreClient.OperationSpec = {
  path: "/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeysHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const checkKeysOperationSpec: coreClient.OperationSpec = {
  path: "/keys",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeysHeaders
    },
    default: {}
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValuesOperationSpec: coreClient.OperationSpec = {
  path: "/kv",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeyValuesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkKeyValuesOperationSpec: coreClient.OperationSpec = {
  path: "/kv",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeyValuesHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select1
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientGetKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.label,
    Parameters.select2
  ],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const putKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientPutKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.entity,
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const deleteKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientDeleteKeyValueHeaders
    },
    204: {
      headersMapper: Mappers.AppConfigurationClientDeleteKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch
  ],
  serializer
};
const checkKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckKeyValueHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.label,
    Parameters.select3
  ],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getLabelsOperationSpec: coreClient.OperationSpec = {
  path: "/labels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationClientGetLabelsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept3
  ],
  serializer
};
const checkLabelsOperationSpec: coreClient.OperationSpec = {
  path: "/labels",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckLabelsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const putLockOperationSpec: coreClient.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientPutLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const deleteLockOperationSpec: coreClient.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationClientDeleteLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getRevisionsOperationSpec: coreClient.OperationSpec = {
  path: "/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetRevisionsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select5
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkRevisionsOperationSpec: coreClient.OperationSpec = {
  path: "/revisions",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationClientCheckRevisionsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select6
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeysNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeysNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const getKeyValuesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetKeyValuesNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const getLabelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationClientGetLabelsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select4
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept3
  ],
  serializer
};
const getRevisionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationClientGetRevisionsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select5
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
