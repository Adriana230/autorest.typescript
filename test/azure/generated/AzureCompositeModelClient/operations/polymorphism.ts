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
import * as Mappers from "../models/mappers";
import { AzureCompositeModel } from "../azureCompositeModel";

const WebResource = msRest.WebResource;

/** Class representing a Polymorphism. */
export class Polymorphism {
  private readonly client: AzureCompositeModel;
  /**
   * Create a Polymorphism.
   * @param {AzureCompositeModel} client Reference to the service client.
   */
  constructor(client: AzureCompositeModel) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Fish>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          }
          ,options),
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/valid",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.Fish;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that are polymorphic
   *
   * @param {Fish} complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putValidWithHttpOperationResponse(complexBody: Models.Fish, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (complexBody === null || complexBody === undefined) {
        throw new Error('complexBody cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = Mappers.Fish;
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            complexBody,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/valid",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ],
          requestBodyMapper: requestModelMapper,
          requestBodyName: "complexBody",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the
   * hierarchy; also have additional properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getComplicatedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Salmon>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            "this.client.acceptLanguage": this.client.acceptLanguage
          }
          ,options),
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/complicated",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.Salmon;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that are polymorphic, but not at the root of the
   * hierarchy; also have additional properties
   *
   * @param {Salmon} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putComplicatedWithHttpOperationResponse(complexBody: Models.Salmon, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (complexBody === null || complexBody === undefined) {
        throw new Error('complexBody cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = Mappers.Salmon;
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            complexBody,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/complicated",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ],
          requestBodyMapper: requestModelMapper,
          requestBodyName: "complexBody",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that are polymorphic, omitting the discriminator
   *
   * @param {Salmon} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putMissingDiscriminatorWithHttpOperationResponse(complexBody: Models.Salmon, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Salmon>> {
    let client = this.client;
    // Validate
    try {
      if (complexBody === null || complexBody === undefined) {
        throw new Error('complexBody cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = Mappers.Salmon;
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            complexBody,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/missingdiscriminator",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ],
          requestBodyMapper: requestModelMapper,
          requestBodyName: "complexBody",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.Salmon;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Put complex types that are polymorphic, attempting to omit required
   * 'birthday' field - the request should not be allowed from the client
   *
   * @param {Fish} complexBody Please attempt put a sawshark that looks like
   * this, the client should not allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async putValidMissingRequiredWithHttpOperationResponse(complexBody: Models.Fish, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let client = this.client;
    // Validate
    try {
      if (complexBody === null || complexBody === undefined) {
        throw new Error('complexBody cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = Mappers.Fish;
      operationRes = await client.sendOperationRequest(
        httpRequest,
        msRest.createOperationArguments(
          {
            complexBody,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          options),
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "complex/polymorphism/missingrequired/invalid",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              mapper: {
          serializedName: "accept-language",
          defaultValue: 'en-US',
          type: {
            name: "String"
          }
        }
            }
          ],
          requestBodyMapper: requestModelMapper,
          requestBodyName: "complexBody",
          contentType: "application/json; charset=utf-8"
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get complex types that are polymorphic
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Fish} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Fish} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.Fish>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.Fish>;
  getValid(callback: msRest.ServiceCallback<Models.Fish>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Fish>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Fish>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Fish>;
    if (!callback) {
      return this.getValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Fish);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Fish;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that are polymorphic
   *
   * @param {Fish} complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(complexBody: Models.Fish): Promise<void>;
  putValid(complexBody: Models.Fish, options: msRest.RequestOptionsBase): Promise<void>;
  putValid(complexBody: Models.Fish, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Fish, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Fish, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidWithHttpOperationResponse(complexBody, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidWithHttpOperationResponse(complexBody, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the
   * hierarchy; also have additional properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Salmon} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Salmon} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getComplicated(): Promise<Models.Salmon>;
  getComplicated(options: msRest.RequestOptionsBase): Promise<Models.Salmon>;
  getComplicated(callback: msRest.ServiceCallback<Models.Salmon>): void;
  getComplicated(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Salmon>): void;
  getComplicated(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Salmon>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Salmon>;
    if (!callback) {
      return this.getComplicatedWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Salmon);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getComplicatedWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Salmon;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that are polymorphic, but not at the root of the
   * hierarchy; also have additional properties
   *
   * @param {Salmon} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putComplicated(complexBody: Models.Salmon): Promise<void>;
  putComplicated(complexBody: Models.Salmon, options: msRest.RequestOptionsBase): Promise<void>;
  putComplicated(complexBody: Models.Salmon, callback: msRest.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.Salmon, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.Salmon, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putComplicatedWithHttpOperationResponse(complexBody, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putComplicatedWithHttpOperationResponse(complexBody, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that are polymorphic, omitting the discriminator
   *
   * @param {Salmon} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Salmon} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Salmon} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putMissingDiscriminator(complexBody: Models.Salmon): Promise<Models.Salmon>;
  putMissingDiscriminator(complexBody: Models.Salmon, options: msRest.RequestOptionsBase): Promise<Models.Salmon>;
  putMissingDiscriminator(complexBody: Models.Salmon, callback: msRest.ServiceCallback<Models.Salmon>): void;
  putMissingDiscriminator(complexBody: Models.Salmon, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Salmon>): void;
  putMissingDiscriminator(complexBody: Models.Salmon, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Salmon>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Salmon>;
    if (!callback) {
      return this.putMissingDiscriminatorWithHttpOperationResponse(complexBody, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Salmon);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putMissingDiscriminatorWithHttpOperationResponse(complexBody, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Salmon;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Put complex types that are polymorphic, attempting to omit required
   * 'birthday' field - the request should not be allowed from the client
   *
   * @param {Fish} complexBody Please attempt put a sawshark that looks like
   * this, the client should not allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValidMissingRequired(complexBody: Models.Fish): Promise<void>;
  putValidMissingRequired(complexBody: Models.Fish, options: msRest.RequestOptionsBase): Promise<void>;
  putValidMissingRequired(complexBody: Models.Fish, callback: msRest.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.Fish, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.Fish, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.putValidMissingRequiredWithHttpOperationResponse(complexBody, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.putValidMissingRequiredWithHttpOperationResponse(complexBody, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
