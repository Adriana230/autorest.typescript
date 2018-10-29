/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/subscriptionInCredentialsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a SubscriptionInCredentials. */
export class SubscriptionInCredentials {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a SubscriptionInCredentials.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postMethodGlobalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postMethodGlobalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postMethodGlobalValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postMethodGlobalValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * null, and client-side validation should prevent you from making this call
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postMethodGlobalNull(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postMethodGlobalNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postMethodGlobalNull(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNull(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postMethodGlobalNullOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postMethodGlobalNotProvidedValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postMethodGlobalNotProvidedValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postMethodGlobalNotProvidedValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNotProvidedValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postMethodGlobalNotProvidedValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postPathGlobalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postPathGlobalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postPathGlobalValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postPathGlobalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postPathGlobalValidOperationSpec,
      callback);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential subscriptionId to
   * '1234-5678-9012-3456' to succeed
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postSwaggerGlobalValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postSwaggerGlobalValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postSwaggerGlobalValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postSwaggerGlobalValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postSwaggerGlobalValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const postMethodGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postMethodGlobalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/global/null/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postMethodGlobalNotProvidedValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/globalNotProvided/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postPathGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/path/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postSwaggerGlobalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/swagger/string/none/path/global/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
