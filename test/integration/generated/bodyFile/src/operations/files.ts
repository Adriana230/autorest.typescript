/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Files } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyFileClient } from "../bodyFileClient";
import {
  FilesGetFileOptionalParams,
  FilesGetFileResponse,
  FilesGetFileLargeOptionalParams,
  FilesGetFileLargeResponse,
  FilesGetEmptyFileOptionalParams,
  FilesGetEmptyFileResponse
} from "../models";

/** Class containing Files operations. */
export class FilesImpl implements Files {
  private readonly client: BodyFileClient;

  /**
   * Initialize a new instance of the class Files class.
   * @param client Reference to the service client
   */
  constructor(client: BodyFileClient) {
    this.client = client;
  }

  /**
   * Get file
   * @param options The options parameters.
   */
  getFile(options?: FilesGetFileOptionalParams): Promise<FilesGetFileResponse> {
    return this.client.sendOperationRequest({ options }, getFileOperationSpec);
  }

  /**
   * Get a large file
   * @param options The options parameters.
   */
  getFileLarge(
    options?: FilesGetFileLargeOptionalParams
  ): Promise<FilesGetFileLargeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getFileLargeOperationSpec
    );
  }

  /**
   * Get empty file
   * @param options The options parameters.
   */
  getEmptyFile(
    options?: FilesGetEmptyFileOptionalParams
  ): Promise<FilesGetEmptyFileResponse> {
    return this.client.sendOperationRequest(
      { options },
      getEmptyFileOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getFileOperationSpec: coreClient.OperationSpec = {
  path: "/files/stream/nonempty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getFileLargeOperationSpec: coreClient.OperationSpec = {
  path: "/files/stream/verylarge",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getEmptyFileOperationSpec: coreClient.OperationSpec = {
  path: "/files/stream/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
