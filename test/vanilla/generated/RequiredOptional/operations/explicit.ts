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
import * as Models from "../models";
import * as Mappers from "../models/explicitMappers";
import * as Parameters from "../models/parameters";
import { AutoRestRequiredOptionalTestServiceContext } from "../autoRestRequiredOptionalTestServiceContext";

/** Class representing a Explicit. */
export class Explicit {
  private readonly client: AutoRestRequiredOptionalTestServiceContext;

  /**
   * Create a Explicit.
   * @param {AutoRestRequiredOptionalTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestRequiredOptionalTestServiceContext) {
    this.client = client;
  }

  /**
   * Test explicitly required integer. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredIntegerParameterResponse>
   */
  postRequiredIntegerParameter(bodyParameter: number, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredIntegerParameterResponse>;
  /**
   * @param bodyParameter
   * @param callback The callback
   */
  postRequiredIntegerParameter(bodyParameter: number, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param bodyParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredIntegerParameter(bodyParameter: number, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredIntegerParameter(bodyParameter: number, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredIntegerParameterResponse> {
    return this.client.sendOperationRequest(
      {
        bodyParameter,
        optionsOrCallback
      },
      postRequiredIntegerParameterOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredIntegerParameterResponse>;
  }

  /**
   * Test explicitly optional integer. Please put null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalIntegerParameter(options?: Models.ExplicitPostOptionalIntegerParameterOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalIntegerParameter(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalIntegerParameter(optionsOrCallback: Models.ExplicitPostOptionalIntegerParameterOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalIntegerParameter(optionsOrCallback?: Models.ExplicitPostOptionalIntegerParameterOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalIntegerParameterOperationSpec,
      callback);
  }

  /**
   * Test explicitly required integer. Please put a valid int-wrapper with 'value' = null and the
   * client library should throw before the request is sent.
   * @param value
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredIntegerPropertyResponse>
   */
  postRequiredIntegerProperty(value: number, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredIntegerPropertyResponse>;
  /**
   * @param value
   * @param callback The callback
   */
  postRequiredIntegerProperty(value: number, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredIntegerProperty(value: number, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredIntegerProperty(value: number, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredIntegerPropertyResponse> {
    return this.client.sendOperationRequest(
      {
        value,
        optionsOrCallback
      },
      postRequiredIntegerPropertyOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredIntegerPropertyResponse>;
  }

  /**
   * Test explicitly optional integer. Please put a valid int-wrapper with 'value' = null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalIntegerProperty(options?: Models.ExplicitPostOptionalIntegerPropertyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalIntegerProperty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalIntegerProperty(optionsOrCallback: Models.ExplicitPostOptionalIntegerPropertyOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalIntegerProperty(optionsOrCallback?: Models.ExplicitPostOptionalIntegerPropertyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalIntegerPropertyOperationSpec,
      callback);
  }

  /**
   * Test explicitly required integer. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredIntegerHeaderResponse>
   */
  postRequiredIntegerHeader(headerParameter: number, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredIntegerHeaderResponse>;
  /**
   * @param headerParameter
   * @param callback The callback
   */
  postRequiredIntegerHeader(headerParameter: number, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param headerParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredIntegerHeader(headerParameter: number, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredIntegerHeader(headerParameter: number, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredIntegerHeaderResponse> {
    return this.client.sendOperationRequest(
      {
        headerParameter,
        optionsOrCallback
      },
      postRequiredIntegerHeaderOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredIntegerHeaderResponse>;
  }

  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalIntegerHeader(options?: Models.ExplicitPostOptionalIntegerHeaderOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalIntegerHeader(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalIntegerHeader(optionsOrCallback: Models.ExplicitPostOptionalIntegerHeaderOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalIntegerHeader(optionsOrCallback?: Models.ExplicitPostOptionalIntegerHeaderOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalIntegerHeaderOperationSpec,
      callback);
  }

  /**
   * Test explicitly required string. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredStringParameterResponse>
   */
  postRequiredStringParameter(bodyParameter: string, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredStringParameterResponse>;
  /**
   * @param bodyParameter
   * @param callback The callback
   */
  postRequiredStringParameter(bodyParameter: string, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param bodyParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredStringParameter(bodyParameter: string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredStringParameter(bodyParameter: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredStringParameterResponse> {
    return this.client.sendOperationRequest(
      {
        bodyParameter,
        optionsOrCallback
      },
      postRequiredStringParameterOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredStringParameterResponse>;
  }

  /**
   * Test explicitly optional string. Please put null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalStringParameter(options?: Models.ExplicitPostOptionalStringParameterOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalStringParameter(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalStringParameter(optionsOrCallback: Models.ExplicitPostOptionalStringParameterOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalStringParameter(optionsOrCallback?: Models.ExplicitPostOptionalStringParameterOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalStringParameterOperationSpec,
      callback);
  }

  /**
   * Test explicitly required string. Please put a valid string-wrapper with 'value' = null and the
   * client library should throw before the request is sent.
   * @param value
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredStringPropertyResponse>
   */
  postRequiredStringProperty(value: string, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredStringPropertyResponse>;
  /**
   * @param value
   * @param callback The callback
   */
  postRequiredStringProperty(value: string, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredStringProperty(value: string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredStringProperty(value: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredStringPropertyResponse> {
    return this.client.sendOperationRequest(
      {
        value,
        optionsOrCallback
      },
      postRequiredStringPropertyOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredStringPropertyResponse>;
  }

  /**
   * Test explicitly optional integer. Please put a valid string-wrapper with 'value' = null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalStringProperty(options?: Models.ExplicitPostOptionalStringPropertyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalStringProperty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalStringProperty(optionsOrCallback: Models.ExplicitPostOptionalStringPropertyOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalStringProperty(optionsOrCallback?: Models.ExplicitPostOptionalStringPropertyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalStringPropertyOperationSpec,
      callback);
  }

  /**
   * Test explicitly required string. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredStringHeaderResponse>
   */
  postRequiredStringHeader(headerParameter: string, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredStringHeaderResponse>;
  /**
   * @param headerParameter
   * @param callback The callback
   */
  postRequiredStringHeader(headerParameter: string, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param headerParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredStringHeader(headerParameter: string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredStringHeader(headerParameter: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredStringHeaderResponse> {
    return this.client.sendOperationRequest(
      {
        headerParameter,
        optionsOrCallback
      },
      postRequiredStringHeaderOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredStringHeaderResponse>;
  }

  /**
   * Test explicitly optional string. Please put a header 'headerParameter' => null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalStringHeader(options?: Models.ExplicitPostOptionalStringHeaderOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalStringHeader(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalStringHeader(optionsOrCallback: Models.ExplicitPostOptionalStringHeaderOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalStringHeader(optionsOrCallback?: Models.ExplicitPostOptionalStringHeaderOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalStringHeaderOperationSpec,
      callback);
  }

  /**
   * Test explicitly required complex object. Please put null and the client library should throw
   * before the request is sent.
   * @param bodyParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredClassParameterResponse>
   */
  postRequiredClassParameter(bodyParameter: Models.Product, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredClassParameterResponse>;
  /**
   * @param bodyParameter
   * @param callback The callback
   */
  postRequiredClassParameter(bodyParameter: Models.Product, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param bodyParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredClassParameter(bodyParameter: Models.Product, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredClassParameter(bodyParameter: Models.Product, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredClassParameterResponse> {
    return this.client.sendOperationRequest(
      {
        bodyParameter,
        optionsOrCallback
      },
      postRequiredClassParameterOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredClassParameterResponse>;
  }

  /**
   * Test explicitly optional complex object. Please put null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalClassParameter(options?: Models.ExplicitPostOptionalClassParameterOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalClassParameter(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalClassParameter(optionsOrCallback: Models.ExplicitPostOptionalClassParameterOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalClassParameter(optionsOrCallback?: Models.ExplicitPostOptionalClassParameterOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalClassParameterOperationSpec,
      callback);
  }

  /**
   * Test explicitly required complex object. Please put a valid class-wrapper with 'value' = null
   * and the client library should throw before the request is sent.
   * @param value
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredClassPropertyResponse>
   */
  postRequiredClassProperty(value: Models.Product, options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredClassPropertyResponse>;
  /**
   * @param value
   * @param callback The callback
   */
  postRequiredClassProperty(value: Models.Product, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredClassProperty(value: Models.Product, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredClassProperty(value: Models.Product, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredClassPropertyResponse> {
    return this.client.sendOperationRequest(
      {
        value,
        optionsOrCallback
      },
      postRequiredClassPropertyOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredClassPropertyResponse>;
  }

  /**
   * Test explicitly optional complex object. Please put a valid class-wrapper with 'value' = null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalClassProperty(options?: Models.ExplicitPostOptionalClassPropertyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalClassProperty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalClassProperty(optionsOrCallback: Models.ExplicitPostOptionalClassPropertyOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalClassProperty(optionsOrCallback?: Models.ExplicitPostOptionalClassPropertyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalClassPropertyOperationSpec,
      callback);
  }

  /**
   * Test explicitly required array. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredArrayParameterResponse>
   */
  postRequiredArrayParameter(bodyParameter: string[], options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredArrayParameterResponse>;
  /**
   * @param bodyParameter
   * @param callback The callback
   */
  postRequiredArrayParameter(bodyParameter: string[], callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param bodyParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredArrayParameter(bodyParameter: string[], optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredArrayParameter(bodyParameter: string[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredArrayParameterResponse> {
    return this.client.sendOperationRequest(
      {
        bodyParameter,
        optionsOrCallback
      },
      postRequiredArrayParameterOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredArrayParameterResponse>;
  }

  /**
   * Test explicitly optional array. Please put null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalArrayParameter(options?: Models.ExplicitPostOptionalArrayParameterOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalArrayParameter(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalArrayParameter(optionsOrCallback: Models.ExplicitPostOptionalArrayParameterOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalArrayParameter(optionsOrCallback?: Models.ExplicitPostOptionalArrayParameterOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalArrayParameterOperationSpec,
      callback);
  }

  /**
   * Test explicitly required array. Please put a valid array-wrapper with 'value' = null and the
   * client library should throw before the request is sent.
   * @param value
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredArrayPropertyResponse>
   */
  postRequiredArrayProperty(value: string[], options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredArrayPropertyResponse>;
  /**
   * @param value
   * @param callback The callback
   */
  postRequiredArrayProperty(value: string[], callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredArrayProperty(value: string[], optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredArrayProperty(value: string[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredArrayPropertyResponse> {
    return this.client.sendOperationRequest(
      {
        value,
        optionsOrCallback
      },
      postRequiredArrayPropertyOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredArrayPropertyResponse>;
  }

  /**
   * Test explicitly optional array. Please put a valid array-wrapper with 'value' = null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalArrayProperty(options?: Models.ExplicitPostOptionalArrayPropertyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalArrayProperty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalArrayProperty(optionsOrCallback: Models.ExplicitPostOptionalArrayPropertyOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalArrayProperty(optionsOrCallback?: Models.ExplicitPostOptionalArrayPropertyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalArrayPropertyOperationSpec,
      callback);
  }

  /**
   * Test explicitly required array. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.ExplicitPostRequiredArrayHeaderResponse>
   */
  postRequiredArrayHeader(headerParameter: string[], options?: msRest.RequestOptionsBase): Promise<Models.ExplicitPostRequiredArrayHeaderResponse>;
  /**
   * @param headerParameter
   * @param callback The callback
   */
  postRequiredArrayHeader(headerParameter: string[], callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param headerParameter
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postRequiredArrayHeader(headerParameter: string[], optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  postRequiredArrayHeader(headerParameter: string[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.ExplicitPostRequiredArrayHeaderResponse> {
    return this.client.sendOperationRequest(
      {
        headerParameter,
        optionsOrCallback
      },
      postRequiredArrayHeaderOperationSpec,
      callback) as Promise<Models.ExplicitPostRequiredArrayHeaderResponse>;
  }

  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  postOptionalArrayHeader(options?: Models.ExplicitPostOptionalArrayHeaderOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  postOptionalArrayHeader(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  postOptionalArrayHeader(optionsOrCallback: Models.ExplicitPostOptionalArrayHeaderOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  postOptionalArrayHeader(optionsOrCallback?: Models.ExplicitPostOptionalArrayHeaderOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      postOptionalArrayHeaderOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const postRequiredIntegerParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/integer/parameter",
  requestBody: {
    parameterPath: "bodyParameter",
    mapper: {
      required: true,
      serializedName: "bodyParameter",
      type: {
        name: "Number"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalIntegerParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/integer/parameter",
  requestBody: {
    parameterPath: [
      "options",
      "bodyParameter"
    ],
    mapper: {
      serializedName: "bodyParameter",
      type: {
        name: "Number"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredIntegerPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/integer/property",
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.IntWrapper,
      required: true
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalIntegerPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/integer/property",
  requestBody: {
    parameterPath: {
      value: [
        "options",
        "value"
      ]
    },
    mapper: Mappers.IntOptionalWrapper
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredIntegerHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/integer/header",
  headerParameters: [
    Parameters.headerParameter0
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalIntegerHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/integer/header",
  headerParameters: [
    Parameters.headerParameter1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredStringParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/string/parameter",
  requestBody: {
    parameterPath: "bodyParameter",
    mapper: {
      required: true,
      serializedName: "bodyParameter",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalStringParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/string/parameter",
  requestBody: {
    parameterPath: [
      "options",
      "bodyParameter"
    ],
    mapper: {
      serializedName: "bodyParameter",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredStringPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/string/property",
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.StringWrapper,
      required: true
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalStringPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/string/property",
  requestBody: {
    parameterPath: {
      value: [
        "options",
        "value"
      ]
    },
    mapper: Mappers.StringOptionalWrapper
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredStringHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/string/header",
  headerParameters: [
    Parameters.headerParameter2
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalStringHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/string/header",
  headerParameters: [
    Parameters.bodyParameter
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredClassParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/class/parameter",
  requestBody: {
    parameterPath: "bodyParameter",
    mapper: {
      ...Mappers.Product,
      required: true
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalClassParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/class/parameter",
  requestBody: {
    parameterPath: [
      "options",
      "bodyParameter"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredClassPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/class/property",
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.ClassWrapper,
      required: true
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalClassPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/class/property",
  requestBody: {
    parameterPath: {
      value: [
        "options",
        "value"
      ]
    },
    mapper: Mappers.ClassOptionalWrapper
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredArrayParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/array/parameter",
  requestBody: {
    parameterPath: "bodyParameter",
    mapper: {
      required: true,
      serializedName: "bodyParameter",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "String"
          }
        }
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalArrayParameterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/array/parameter",
  requestBody: {
    parameterPath: [
      "options",
      "bodyParameter"
    ],
    mapper: {
      serializedName: "bodyParameter",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "String"
          }
        }
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredArrayPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/array/property",
  requestBody: {
    parameterPath: {
      value: "value"
    },
    mapper: {
      ...Mappers.ArrayWrapper,
      required: true
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalArrayPropertyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/array/property",
  requestBody: {
    parameterPath: {
      value: [
        "options",
        "value"
      ]
    },
    mapper: Mappers.ArrayOptionalWrapper
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postRequiredArrayHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/requied/array/header",
  headerParameters: [
    Parameters.headerParameter3
  ],
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const postOptionalArrayHeaderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "reqopt/optional/array/header",
  headerParameters: [
    Parameters.headerParameter4
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
