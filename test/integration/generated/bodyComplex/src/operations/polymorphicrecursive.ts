/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";
import { PolymorphicrecursiveGetValidResponse, FishUnion } from "../models";

/**
 * Class representing a Polymorphicrecursive.
 */
export class Polymorphicrecursive {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Polymorphicrecursive class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   * @param options The options parameters.
   */
  getValid(
    options?: coreHttp.OperationOptions
  ): Promise<PolymorphicrecursiveGetValidResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getValidOperationSpec
    ) as Promise<PolymorphicrecursiveGetValidResponse>;
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   * @param complexBody Please put a salmon that looks like this:
   *                    {
   *                        "fishtype": "salmon",
   *                        "species": "king",
   *                        "length": 1,
   *                        "age": 1,
   *                        "location": "alaska",
   *                        "iswild": true,
   *                        "siblings": [
   *                            {
   *                                "fishtype": "shark",
   *                                "species": "predator",
   *                                "length": 20,
   *                                "age": 6,
   *                                "siblings": [
   *                                    {
   *                                        "fishtype": "salmon",
   *                                        "species": "coho",
   *                                        "length": 2,
   *                                        "age": 2,
   *                                        "location": "atlantic",
   *                                        "iswild": true,
   *                                        "siblings": [
   *                                            {
   *                                                "fishtype": "shark",
   *                                                "species": "predator",
   *                                                "length": 20,
   *                                                "age": 6
   *                                            },
   *                                            {
   *                                                "fishtype": "sawshark",
   *                                                "species": "dangerous",
   *                                                "length": 10,
   *                                                "age": 105
   *                                            }
   *                                        ]
   *                                    },
   *                                    {
   *                                        "fishtype": "sawshark",
   *                                        "species": "dangerous",
   *                                        "length": 10,
   *                                        "age": 105
   *                                    }
   *                                ]
   *                            },
   *                            {
   *                                "fishtype": "sawshark",
   *                                "species": "dangerous",
   *                                "length": 10,
   *                                "age": 105
   *                            }
   *                        ]
   *                    }
   * @param options The options parameters.
   */
  putValid(
    complexBody: FishUnion,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { complexBody, options: operationOptions },
      putValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/polymorphicrecursive/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/polymorphicrecursive/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody20,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
