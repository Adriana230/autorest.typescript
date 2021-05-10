import { AppendBlob } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageBlobClientContext } from "../storageBlobClientContext";
import {
  AppendBlobAppendBlockOptionalParams,
  AppendBlobAppendBlockResponse
} from "../models";

/** Class representing a AppendBlob. */
export class AppendBlobImpl implements AppendBlob {
  private readonly client: StorageBlobClientContext;

  /**
   * Initialize a new instance of the class AppendBlob class.
   * @param client Reference to the service client
   */
  constructor(client: StorageBlobClientContext) {
    this.client = client;
  }

  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob. The
   * Append Block operation is permitted only if the blob was created with x-ms-blob-type set to
   * AppendBlob. Append Block is supported only on version 2015-02-21 version or later.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  appendBlock(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: AppendBlobAppendBlockOptionalParams
  ): Promise<AppendBlobAppendBlockResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      contentLength,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      appendBlockOperationSpec
    ) as Promise<AppendBlobAppendBlockResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const appendBlockOperationSpec: coreHttp.OperationSpec = {
  path: "/{containerName}/{blob}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobAppendBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobAppendBlockExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.timeout, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.encryptionScope,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.version,
    Parameters.requestId,
    Parameters.maxSize,
    Parameters.appendPosition
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};