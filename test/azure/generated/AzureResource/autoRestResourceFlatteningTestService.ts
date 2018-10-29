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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestResourceFlatteningTestServiceContext } from "./autoRestResourceFlatteningTestServiceContext";


class AutoRestResourceFlatteningTestService extends AutoRestResourceFlatteningTestServiceContext {
  /**
   * Initializes a new instance of the AutoRestResourceFlatteningTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AutoRestResourceFlatteningTestServiceOptions) {
    super(credentials, options);
  }

  /**
   * Put External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putArray(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  putArray(optionsOrCallback: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  putArray(optionsOrCallback?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      putArrayOperationSpec,
      callback);
  }

  /**
   * Get External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<Models.GetArrayResponse>
   */
  getArray(options?: msRest.RequestOptionsBase): Promise<Models.GetArrayResponse>;
  /**
   * @param callback The callback
   */
  getArray(callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getArray(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlattenedProduct[]>, callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  getArray(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlattenedProduct[]>, callback?: msRest.ServiceCallback<Models.FlattenedProduct[]>): Promise<Models.GetArrayResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      getArrayOperationSpec,
      callback) as Promise<Models.GetArrayResponse>;
  }

  /**
   * Put External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putDictionary(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  putDictionary(optionsOrCallback: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  putDictionary(optionsOrCallback?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      putDictionaryOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<Models.GetDictionaryResponse>
   */
  getDictionary(options?: msRest.RequestOptionsBase): Promise<Models.GetDictionaryResponse>;
  /**
   * @param callback The callback
   */
  getDictionary(callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getDictionary(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>, callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  getDictionary(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>, callback?: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): Promise<Models.GetDictionaryResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      getDictionaryOperationSpec,
      callback) as Promise<Models.GetDictionaryResponse>;
  }

  /**
   * Put External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putResourceCollection(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  putResourceCollection(optionsOrCallback: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  putResourceCollection(optionsOrCallback?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      putResourceCollectionOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<Models.GetResourceCollectionResponse>
   */
  getResourceCollection(options?: msRest.RequestOptionsBase): Promise<Models.GetResourceCollectionResponse>;
  /**
   * @param callback The callback
   */
  getResourceCollection(callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getResourceCollection(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceCollection>, callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  getResourceCollection(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceCollection>, callback?: msRest.ServiceCallback<Models.ResourceCollection>): Promise<Models.GetResourceCollectionResponse> {
    return this.sendOperationRequest(
      {
        optionsOrCallback
      },
      getResourceCollectionOperationSpec,
      callback) as Promise<Models.GetResourceCollectionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const putArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceArray"
    ],
    mapper: {
      serializedName: "ResourceArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Resource"
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

const getArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceDictionary"
    ],
    mapper: {
      serializedName: "ResourceDictionary",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Composite",
            className: "FlattenedProduct"
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

const getDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceComplexObject"
    ],
    mapper: Mappers.ResourceCollection
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestResourceFlatteningTestService,
  AutoRestResourceFlatteningTestServiceContext,
  Models as AutoRestResourceFlatteningTestServiceModels,
  Mappers as AutoRestResourceFlatteningTestServiceMappers
};
