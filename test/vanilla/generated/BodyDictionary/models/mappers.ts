/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


export const Widget = {
  serializedName: "Widget",
  type: {
    name: "Composite",
    className: "Widget",
    modelProperties: {
      integer: {
  serializedName: "integer",
  type: {
    name: "Number"
  }
},
      string: {
  serializedName: "string",
  type: {
    name: "String"
  }
}
    }
  }
};

export const ErrorModel = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
  serializedName: "status",
  type: {
    name: "Number"
  }
},
      message: {
  serializedName: "message",
  type: {
    name: "String"
  }
}
    }
  }
};
