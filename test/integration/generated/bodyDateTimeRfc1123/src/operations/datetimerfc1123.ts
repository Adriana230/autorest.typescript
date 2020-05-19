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
import { BodyDateTimeRfc1123Client } from "../bodyDateTimeRfc1123Client";
import {
  Datetimerfc1123GetNullResponse,
  Datetimerfc1123GetInvalidResponse,
  Datetimerfc1123GetOverflowResponse,
  Datetimerfc1123GetUnderflowResponse,
  Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse,
  Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse,
  Datetimerfc1123GetUtcMinDateTimeResponse
} from "../models";

/**
 * Class representing a Datetimerfc1123.
 */
export class Datetimerfc1123 {
  private readonly client: BodyDateTimeRfc1123Client;

  /**
   * Initialize a new instance of the class Datetimerfc1123 class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateTimeRfc1123Client) {
    this.client = client;
  }

  /**
   * Get null datetime value
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetNullResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getNullOperationSpec
    ) as Promise<Datetimerfc1123GetNullResponse>;
  }

  /**
   * Get invalid datetime value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetInvalidResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getInvalidOperationSpec
    ) as Promise<Datetimerfc1123GetInvalidResponse>;
  }

  /**
   * Get overflow datetime value
   * @param options The options parameters.
   */
  getOverflow(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetOverflowResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getOverflowOperationSpec
    ) as Promise<Datetimerfc1123GetOverflowResponse>;
  }

  /**
   * Get underflow datetime value
   * @param options The options parameters.
   */
  getUnderflow(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetUnderflowResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUnderflowOperationSpec
    ) as Promise<Datetimerfc1123GetUnderflowResponse>;
  }

  /**
   * Put max datetime value Fri, 31 Dec 9999 23:59:59 GMT
   * @param datetimeBody
   * @param options The options parameters.
   */
  putUtcMaxDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putUtcMaxDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get max datetime value fri, 31 dec 9999 23:59:59 gmt
   * @param options The options parameters.
   */
  getUtcLowercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcLowercaseMaxDateTimeOperationSpec
    ) as Promise<Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value FRI, 31 DEC 9999 23:59:59 GMT
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcUppercaseMaxDateTimeOperationSpec
    ) as Promise<Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse>;
  }

  /**
   * Put min datetime value Mon, 1 Jan 0001 00:00:00 GMT
   * @param datetimeBody
   * @param options The options parameters.
   */
  putUtcMinDateTime(
    datetimeBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { datetimeBody, options: operationOptions },
      putUtcMinDateTimeOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get min datetime value Mon, 1 Jan 0001 00:00:00 GMT
   * @param options The options parameters.
   */
  getUtcMinDateTime(
    options?: coreHttp.OperationOptions
  ): Promise<Datetimerfc1123GetUtcMinDateTimeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getUtcMinDateTimeOperationSpec
    ) as Promise<Datetimerfc1123GetUtcMinDateTimeResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getOverflowOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/overflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUnderflowOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/underflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putUtcMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/max",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcLowercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/max/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getUtcUppercaseMaxDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/max/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putUtcMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/min",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcMinDateTimeOperationSpec: coreHttp.OperationSpec = {
  path: "/datetimerfc1123/min",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
