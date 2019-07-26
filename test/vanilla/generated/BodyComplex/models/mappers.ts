/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
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

export const Basic: msRest.CompositeMapper = {
  serializedName: "basic",
  type: {
    name: "Composite",
    className: "Basic",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet: msRest.CompositeMapper = {
  serializedName: "pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dog: msRest.CompositeMapper = {
  serializedName: "dog",
  type: {
    name: "Composite",
    className: "Dog",
    modelProperties: {
      ...Pet.type.modelProperties,
      food: {
        serializedName: "food",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cat: msRest.CompositeMapper = {
  serializedName: "cat",
  type: {
    name: "Composite",
    className: "Cat",
    modelProperties: {
      ...Pet.type.modelProperties,
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      },
      hates: {
        serializedName: "hates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dog"
            }
          }
        }
      }
    }
  }
};

export const Siamese: msRest.CompositeMapper = {
  serializedName: "siamese",
  type: {
    name: "Composite",
    className: "Siamese",
    modelProperties: {
      ...Cat.type.modelProperties,
      breed: {
        serializedName: "breed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DotFish: msRest.CompositeMapper = {
  serializedName: "DotFish",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "fish.type",
      clientName: "fishtype"
    },
    uberParent: "DotFish",
    className: "DotFish",
    modelProperties: {
      species: {
        serializedName: "species",
        type: {
          name: "String"
        }
      },
      fishtype: {
        required: true,
        serializedName: "fish\\.type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DotSalmon: msRest.CompositeMapper = {
  serializedName: "DotSalmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: DotFish.type.polymorphicDiscriminator,
    uberParent: "DotFish",
    className: "DotSalmon",
    modelProperties: {
      ...DotFish.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      iswild: {
        serializedName: "iswild",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DotFishMarket: msRest.CompositeMapper = {
  serializedName: "DotFishMarket",
  type: {
    name: "Composite",
    className: "DotFishMarket",
    modelProperties: {
      sampleSalmon: {
        serializedName: "sampleSalmon",
        type: {
          name: "Composite",
          className: "DotSalmon"
        }
      },
      salmons: {
        serializedName: "salmons",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DotSalmon"
            }
          }
        }
      },
      sampleFish: {
        serializedName: "sampleFish",
        type: {
          name: "Composite",
          className: "DotFish"
        }
      },
      fishes: {
        serializedName: "fishes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DotFish"
            }
          }
        }
      }
    }
  }
};

export const Fish: msRest.CompositeMapper = {
  serializedName: "Fish",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "fishtype",
      clientName: "fishtype"
    },
    uberParent: "Fish",
    className: "Fish",
    modelProperties: {
      species: {
        serializedName: "species",
        type: {
          name: "String"
        }
      },
      length: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      },
      siblings: {
        serializedName: "siblings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Fish"
            }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: "fishtype",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Salmon: msRest.CompositeMapper = {
  serializedName: "salmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Salmon",
    modelProperties: {
      ...Fish.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      iswild: {
        serializedName: "iswild",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SmartSalmon: msRest.CompositeMapper = {
  serializedName: "smart_salmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "SmartSalmon",
    modelProperties: {
      ...Salmon.type.modelProperties,
      collegeDegree: {
        serializedName: "college_degree",
        type: {
          name: "String"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const Shark: msRest.CompositeMapper = {
  serializedName: "shark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Shark",
    modelProperties: {
      ...Fish.type.modelProperties,
      age: {
        serializedName: "age",
        type: {
          name: "Number"
        }
      },
      birthday: {
        required: true,
        serializedName: "birthday",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Sawshark: msRest.CompositeMapper = {
  serializedName: "sawshark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Sawshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      picture: {
        serializedName: "picture",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const Goblinshark: msRest.CompositeMapper = {
  serializedName: "goblin",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Goblinshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      jawsize: {
        serializedName: "jawsize",
        type: {
          name: "Number"
        }
      },
      color: {
        serializedName: "color",
        defaultValue: 'gray',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cookiecuttershark: msRest.CompositeMapper = {
  serializedName: "cookiecuttershark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Cookiecuttershark",
    modelProperties: {
      ...Shark.type.modelProperties
    }
  }
};

export const IntWrapper: msRest.CompositeMapper = {
  serializedName: "int-wrapper",
  type: {
    name: "Composite",
    className: "IntWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LongWrapper: msRest.CompositeMapper = {
  serializedName: "long-wrapper",
  type: {
    name: "Composite",
    className: "LongWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FloatWrapper: msRest.CompositeMapper = {
  serializedName: "float-wrapper",
  type: {
    name: "Composite",
    className: "FloatWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DoubleWrapper: msRest.CompositeMapper = {
  serializedName: "double-wrapper",
  type: {
    name: "Composite",
    className: "DoubleWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: {
        serializedName: "field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BooleanWrapper: msRest.CompositeMapper = {
  serializedName: "boolean-wrapper",
  type: {
    name: "Composite",
    className: "BooleanWrapper",
    modelProperties: {
      fieldTrue: {
        serializedName: "field_true",
        type: {
          name: "Boolean"
        }
      },
      fieldFalse: {
        serializedName: "field_false",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StringWrapper: msRest.CompositeMapper = {
  serializedName: "string-wrapper",
  type: {
    name: "Composite",
    className: "StringWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "String"
        }
      },
      empty: {
        serializedName: "empty",
        type: {
          name: "String"
        }
      },
      nullProperty: {
        serializedName: "null",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DateWrapper: msRest.CompositeMapper = {
  serializedName: "date-wrapper",
  type: {
    name: "Composite",
    className: "DateWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "Date"
        }
      },
      leap: {
        serializedName: "leap",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const DatetimeWrapper: msRest.CompositeMapper = {
  serializedName: "datetime-wrapper",
  type: {
    name: "Composite",
    className: "DatetimeWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTime"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Datetimerfc1123Wrapper: msRest.CompositeMapper = {
  serializedName: "datetimerfc1123-wrapper",
  type: {
    name: "Composite",
    className: "Datetimerfc1123Wrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DurationWrapper: msRest.CompositeMapper = {
  serializedName: "duration-wrapper",
  type: {
    name: "Composite",
    className: "DurationWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const ByteWrapper: msRest.CompositeMapper = {
  serializedName: "byte-wrapper",
  type: {
    name: "Composite",
    className: "ByteWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ArrayWrapper: msRest.CompositeMapper = {
  serializedName: "array-wrapper",
  type: {
    name: "Composite",
    className: "ArrayWrapper",
    modelProperties: {
      arrayProperty: {
        serializedName: "array",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DictionaryWrapper: msRest.CompositeMapper = {
  serializedName: "dictionary-wrapper",
  type: {
    name: "Composite",
    className: "DictionaryWrapper",
    modelProperties: {
      defaultProgram: {
        serializedName: "defaultProgram",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ReadonlyObj: msRest.CompositeMapper = {
  serializedName: "readonly-obj",
  type: {
    name: "Composite",
    className: "ReadonlyObj",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MyBaseType: msRest.CompositeMapper = {
  serializedName: "MyBaseType",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    uberParent: "MyBaseType",
    className: "MyBaseType",
    modelProperties: {
      propB1: {
        serializedName: "propB1",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      propBH1: {
        serializedName: "helper.propBH1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MyDerivedType: msRest.CompositeMapper = {
  serializedName: "Kind1",
  type: {
    name: "Composite",
    polymorphicDiscriminator: MyBaseType.type.polymorphicDiscriminator,
    uberParent: "MyBaseType",
    className: "MyDerivedType",
    modelProperties: {
      ...MyBaseType.type.modelProperties,
      propD1: {
        serializedName: "propD1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'DotFish' : DotFish,
  'DotFish.DotSalmon' : DotSalmon,
  'Fish' : Fish,
  'Fish.salmon' : Salmon,
  'Fish.smart_salmon' : SmartSalmon,
  'Fish.shark' : Shark,
  'Fish.sawshark' : Sawshark,
  'Fish.goblin' : Goblinshark,
  'Fish.cookiecuttershark' : Cookiecuttershark,
  'MyBaseType' : MyBaseType,
  'MyBaseType.Kind1' : MyDerivedType

};
