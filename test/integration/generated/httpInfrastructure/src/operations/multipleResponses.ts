/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MultipleResponses } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HttpInfrastructureClientContext } from "../httpInfrastructureClientContext";
import {
  MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError200ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError201ValidResponse,
  MultipleResponsesGet200Model201ModelDefaultError400ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse,
  MultipleResponsesGetDefaultModelA200ValidResponse,
  MultipleResponsesGetDefaultModelA200NoneResponse,
  MultipleResponsesGet200ModelA200NoneResponse,
  MultipleResponsesGet200ModelA200ValidResponse,
  MultipleResponsesGet200ModelA200InvalidResponse,
  MultipleResponsesGet200ModelA400NoneResponse,
  MultipleResponsesGet200ModelA400ValidResponse,
  MultipleResponsesGet200ModelA400InvalidResponse,
  MultipleResponsesGet200ModelA202ValidResponse
} from "../models";

/** Class representing a MultipleResponses. */
export class MultipleResponsesImpl implements MultipleResponses {
  private readonly client: HttpInfrastructureClientContext;

  /**
   * Initialize a new instance of the class MultipleResponses class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClientContext) {
    this.client = client;
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError200Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model204NoModelDefaultError200ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse
    >;
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError204Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model204NoModelDefaultError204ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse
    >;
  }

  /**
   * Send a 201 response with valid payload: {'statusCode': '201'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError201Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model204NoModelDefaultError201InvalidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse
    >;
  }

  /**
   * Send a 202 response with no payload:
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError202None(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model204NoModelDefaultError202NoneOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse
    >;
  }

  /**
   * Send a 400 response with valid error payload: {'status': 400, 'message': 'client error'}
   * @param options The options parameters.
   */
  get200Model204NoModelDefaultError400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model204NoModelDefaultError400ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse
    >;
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError200Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError200ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model201ModelDefaultError200ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model201ModelDefaultError200ValidResponse
    >;
  }

  /**
   * Send a 201 response with valid payload: {'statusCode': '201', 'textStatusCode': 'Created'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError201Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError201ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model201ModelDefaultError201ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model201ModelDefaultError201ValidResponse
    >;
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get200Model201ModelDefaultError400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200Model201ModelDefaultError400ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200Model201ModelDefaultError400ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200Model201ModelDefaultError400ValidResponse
    >;
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError200Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA201ModelC404ModelDDefaultError200ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse
    >;
  }

  /**
   * Send a 200 response with valid payload: {'httpCode': '201'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError201Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA201ModelC404ModelDDefaultError201ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse
    >;
  }

  /**
   * Send a 200 response with valid payload: {'httpStatusCode': '404'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError404Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA201ModelC404ModelDDefaultError404ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse
    >;
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get200ModelA201ModelC404ModelDDefaultError400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<
    MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA201ModelC404ModelDDefaultError400ValidOperationSpec
    ) as Promise<
      MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse
    >;
  }

  /**
   * Send a 202 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultError202None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultError202NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultError204None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultError204NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with valid payload: {'code': '400', 'message': 'client error'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultError400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultError400ValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 202 response with an unexpected payload {'property': 'value'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone202Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultNone202InvalidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 204 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone204None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultNone204NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone400None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultNone400NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with an unexpected payload {'property': 'value'}
   * @param options The options parameters.
   */
  get202None204NoneDefaultNone400Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get202None204NoneDefaultNone400InvalidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 200 response with valid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  getDefaultModelA200Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGetDefaultModelA200ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultModelA200ValidOperationSpec
    ) as Promise<MultipleResponsesGetDefaultModelA200ValidResponse>;
  }

  /**
   * Send a 200 response with no payload
   * @param options The options parameters.
   */
  getDefaultModelA200None(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGetDefaultModelA200NoneResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultModelA200NoneOperationSpec
    ) as Promise<MultipleResponsesGetDefaultModelA200NoneResponse>;
  }

  /**
   * Send a 400 response with valid payload: {'statusCode': '400'}
   * @param options The options parameters.
   */
  getDefaultModelA400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultModelA400ValidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  getDefaultModelA400None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultModelA400NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 200 response with invalid payload: {'statusCode': '200'}
   * @param options The options parameters.
   */
  getDefaultNone200Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultNone200InvalidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 200 response with no payload
   * @param options The options parameters.
   */
  getDefaultNone200None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultNone200NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with valid payload: {'statusCode': '400'}
   * @param options The options parameters.
   */
  getDefaultNone400Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultNone400InvalidOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 400 response with no payload
   * @param options The options parameters.
   */
  getDefaultNone400None(
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getDefaultNone400NoneOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Send a 200 response with no payload, when a payload is expected - client should return a null object
   * of thde type for model A
   * @param options The options parameters.
   */
  get200ModelA200None(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA200NoneResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA200NoneOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA200NoneResponse>;
  }

  /**
   * Send a 200 response with payload {'statusCode': '200'}
   * @param options The options parameters.
   */
  get200ModelA200Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA200ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA200ValidOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA200ValidResponse>;
  }

  /**
   * Send a 200 response with invalid payload {'statusCodeInvalid': '200'}
   * @param options The options parameters.
   */
  get200ModelA200Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA200InvalidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA200InvalidOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA200InvalidResponse>;
  }

  /**
   * Send a 400 response with no payload client should treat as an http error with no error model
   * @param options The options parameters.
   */
  get200ModelA400None(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA400NoneResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA400NoneOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA400NoneResponse>;
  }

  /**
   * Send a 200 response with payload {'statusCode': '400'}
   * @param options The options parameters.
   */
  get200ModelA400Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA400ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA400ValidOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA400ValidResponse>;
  }

  /**
   * Send a 200 response with invalid payload {'statusCodeInvalid': '400'}
   * @param options The options parameters.
   */
  get200ModelA400Invalid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA400InvalidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA400InvalidOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA400InvalidResponse>;
  }

  /**
   * Send a 202 response with payload {'statusCode': '202'}
   * @param options The options parameters.
   */
  get200ModelA202Valid(
    options?: coreHttp.OperationOptions
  ): Promise<MultipleResponsesGet200ModelA202ValidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      get200ModelA202ValidOperationSpec
    ) as Promise<MultipleResponsesGet200ModelA202ValidResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const get200Model204NoModelDefaultError200ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError204ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/204/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError201InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError202NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/202/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model204NoModelDefaultError400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/204/none/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError200ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError201ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200Model201ModelDefaultError400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/B/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.B
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError200ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError201ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/201/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError404ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/404/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA201ModelC404ModelDDefaultError400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/201/C/404/D/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    },
    201: {
      bodyMapper: Mappers.C
    },
    404: {
      bodyMapper: Mappers.D
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError202NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/202/none",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError204NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/204/none",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultError400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/Error/response/400/valid",
  httpMethod: "GET",
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get202None204NoneDefaultNone202InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/202/invalid",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone204NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/204/none",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone400NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/400/none",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get202None204NoneDefaultNone400InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/202/none/204/none/default/none/response/400/invalid",
  httpMethod: "GET",
  responses: { 202: {}, 204: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultModelA200ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/A/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA200NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/A/response/200/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/A/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultModelA400NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/A/response/400/none",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getDefaultNone200InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/none/response/200/invalid",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone200NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/none/response/200/none",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone400InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/none/response/400/invalid",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const getDefaultNone400NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/default/none/response/400/none",
  httpMethod: "GET",
  responses: { 200: {}, default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const get200ModelA200NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/200/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA200ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/200/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA200InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/200/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400NoneOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/400/none",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/400/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA400InvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/400/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200ModelA202ValidOperationSpec: coreHttp.OperationSpec = {
  path: "/http/payloads/200/A/response/202/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MyException
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};