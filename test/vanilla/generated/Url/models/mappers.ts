/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


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

export const AutoRestUrlTestServiceOptions = {
  type: {
    name: "Composite",
    className: "AutoRestUrlTestServiceOptions",
    modelProperties: {
      globalStringQuery: {
  serializedName: "globalStringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};

export const QueriesGetBooleanNullOptionalParams = {
  serializedName: "GetBooleanNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetBooleanNullOptionalParams",
    modelProperties: {
      boolQuery: {
  serializedName: "boolQuery",
  type: {
    name: "Boolean"
  }
}
    }
  }
};

export const QueriesGetIntNullOptionalParams = {
  serializedName: "GetIntNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetIntNullOptionalParams",
    modelProperties: {
      intQuery: {
  serializedName: "intQuery",
  type: {
    name: "Number"
  }
}
    }
  }
};

export const QueriesGetLongNullOptionalParams = {
  serializedName: "GetLongNullOptions",
  type: {
    name: "Composite",
    className: "QueriesGetLongNullOptionalParams",
    modelProperties: {
      longQuery: {
  serializedName: "longQuery",
  type: {
    name: "Number"
  }
}
    }
  }
};

export const QueriesFloatNullOptionalParams = {
  serializedName: "FloatNullOptions",
  type: {
    name: "Composite",
    className: "QueriesFloatNullOptionalParams",
    modelProperties: {
      floatQuery: {
  serializedName: "floatQuery",
  type: {
    name: "Number"
  }
}
    }
  }
};

export const QueriesDoubleNullOptionalParams = {
  serializedName: "DoubleNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDoubleNullOptionalParams",
    modelProperties: {
      doubleQuery: {
  serializedName: "doubleQuery",
  type: {
    name: "Number"
  }
}
    }
  }
};

export const QueriesStringNullOptionalParams = {
  serializedName: "StringNullOptions",
  type: {
    name: "Composite",
    className: "QueriesStringNullOptionalParams",
    modelProperties: {
      stringQuery: {
  serializedName: "stringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};

export const QueriesEnumValidOptionalParams = {
  serializedName: "EnumValidOptions",
  type: {
    name: "Composite",
    className: "QueriesEnumValidOptionalParams",
    modelProperties: {
      enumQuery: {
  serializedName: "enumQuery",
  type: {
    name: "Enum",
    allowedValues: [
      "red color",
      "green color",
      "blue color"
    ]
  }
}
    }
  }
};

export const QueriesEnumNullOptionalParams = {
  serializedName: "EnumNullOptions",
  type: {
    name: "Composite",
    className: "QueriesEnumNullOptionalParams",
    modelProperties: {
      enumQuery: {
  serializedName: "enumQuery",
  type: {
    name: "Enum",
    allowedValues: [
      "red color",
      "green color",
      "blue color"
    ]
  }
}
    }
  }
};

export const QueriesByteMultiByteOptionalParams = {
  serializedName: "ByteMultiByteOptions",
  type: {
    name: "Composite",
    className: "QueriesByteMultiByteOptionalParams",
    modelProperties: {
      byteQuery: {
  serializedName: "byteQuery",
  type: {
    name: "ByteArray"
  }
}
    }
  }
};

export const QueriesByteNullOptionalParams = {
  serializedName: "ByteNullOptions",
  type: {
    name: "Composite",
    className: "QueriesByteNullOptionalParams",
    modelProperties: {
      byteQuery: {
  serializedName: "byteQuery",
  type: {
    name: "ByteArray"
  }
}
    }
  }
};

export const QueriesDateNullOptionalParams = {
  serializedName: "DateNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDateNullOptionalParams",
    modelProperties: {
      dateQuery: {
  serializedName: "dateQuery",
  type: {
    name: "Date"
  }
}
    }
  }
};

export const QueriesDateTimeNullOptionalParams = {
  serializedName: "DateTimeNullOptions",
  type: {
    name: "Composite",
    className: "QueriesDateTimeNullOptionalParams",
    modelProperties: {
      dateTimeQuery: {
  serializedName: "dateTimeQuery",
  type: {
    name: "DateTime"
  }
}
    }
  }
};

export const QueriesArrayStringCsvValidOptionalParams = {
  serializedName: "ArrayStringCsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvValidOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const QueriesArrayStringCsvNullOptionalParams = {
  serializedName: "ArrayStringCsvNullOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvNullOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const QueriesArrayStringCsvEmptyOptionalParams = {
  serializedName: "ArrayStringCsvEmptyOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringCsvEmptyOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const QueriesArrayStringSsvValidOptionalParams = {
  serializedName: "ArrayStringSsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringSsvValidOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const QueriesArrayStringTsvValidOptionalParams = {
  serializedName: "ArrayStringTsvValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringTsvValidOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const QueriesArrayStringPipesValidOptionalParams = {
  serializedName: "ArrayStringPipesValidOptions",
  type: {
    name: "Composite",
    className: "QueriesArrayStringPipesValidOptionalParams",
    modelProperties: {
      arrayQuery: {
  serializedName: "arrayQuery",
  type: {
    name: "Sequence",
    element: {
  serializedName: "stringElementType",
  type: {
    name: "String"
  }
}
  }
}
    }
  }
};

export const PathItemsGetAllWithValuesOptionalParams = {
  serializedName: "GetAllWithValuesOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetAllWithValuesOptionalParams",
    modelProperties: {
      localStringQuery: {
  serializedName: "localStringQuery",
  type: {
    name: "String"
  }
},
      pathItemStringQuery: {
  serializedName: "pathItemStringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};

export const PathItemsGetGlobalQueryNullOptionalParams = {
  serializedName: "GetGlobalQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetGlobalQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
  serializedName: "localStringQuery",
  type: {
    name: "String"
  }
},
      pathItemStringQuery: {
  serializedName: "pathItemStringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};

export const PathItemsGetGlobalAndLocalQueryNullOptionalParams = {
  serializedName: "GetGlobalAndLocalQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetGlobalAndLocalQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
  serializedName: "localStringQuery",
  type: {
    name: "String"
  }
},
      pathItemStringQuery: {
  serializedName: "pathItemStringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};

export const PathItemsGetLocalPathItemQueryNullOptionalParams = {
  serializedName: "GetLocalPathItemQueryNullOptions",
  type: {
    name: "Composite",
    className: "PathItemsGetLocalPathItemQueryNullOptionalParams",
    modelProperties: {
      localStringQuery: {
  serializedName: "localStringQuery",
  type: {
    name: "String"
  }
},
      pathItemStringQuery: {
  serializedName: "pathItemStringQuery",
  type: {
    name: "String"
  }
}
    }
  }
};
