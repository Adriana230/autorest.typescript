/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GET } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Parameters from "../models/parameters";
import { UuidClient } from "../uuidClient";
import { GETUuidOptionalParams, GETUuidResponse } from "../models";

/** Class containing GET operations. */
export class GETImpl implements GET {
  private readonly client: UuidClient;

  /**
   * Initialize a new instance of the class GET class.
   * @param client Reference to the service client
   */
  constructor(client: UuidClient) {
    this.client = client;
  }

  /**
   * @param testUuid
   * @param options The options parameters.
   */
  uuid(
    testUuid: string,
    options?: GETUuidOptionalParams
  ): Promise<GETUuidResponse> {
    return this.client.sendOperationRequest(
      { testUuid, options },
      uuidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const uuidOperationSpec: coreClient.OperationSpec = {
  path: "/Uuid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.testUuid],
  serializer
};
