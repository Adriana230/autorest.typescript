/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const KeyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Key"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Key: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Key",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyValueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValue"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValue",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content_type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last_modified",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      locked: {
        serializedName: "locked",
        type: {
          name: "Boolean"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LabelListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabelListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Label"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Label: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Label",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientCheckKeysHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientCheckKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientCheckKeyValuesHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientCheckKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientPutKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientPutKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientDeleteKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientDeleteKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientCheckKeyValueHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientCheckKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientCheckLabelsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientCheckLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientPutLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientPutLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientDeleteLockHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientDeleteLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientCheckRevisionsHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientCheckRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetKeysNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetKeysNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetKeyValuesNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetKeyValuesNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetLabelsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetLabelsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppConfigurationClientGetRevisionsNextHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppConfigurationClientGetRevisionsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};