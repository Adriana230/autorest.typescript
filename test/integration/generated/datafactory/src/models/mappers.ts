import * as coreClient from "@azure/core-client";

export const OperationListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "OperationServiceSpecification"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationLogSpecification"
            }
          }
        }
      },
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const OperationLogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationLogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      enableRegionalMdmAccount: {
        serializedName: "enableRegionalMdmAccount",
        type: {
          name: "String"
        }
      },
      sourceMdmAccount: {
        serializedName: "sourceMdmAccount",
        type: {
          name: "String"
        }
      },
      sourceMdmNamespace: {
        serializedName: "sourceMdmNamespace",
        type: {
          name: "String"
        }
      },
      availabilities: {
        serializedName: "availabilities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetricAvailability"
            }
          }
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetricDimension"
            }
          }
        }
      }
    }
  }
};

export const OperationMetricAvailability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetricAvailability",
    modelProperties: {
      timeGrain: {
        serializedName: "timeGrain",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetricDimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetricDimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      code: {
        serializedName: "error.code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "error.message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudError"
            }
          }
        }
      }
    }
  }
};

export const FactoryListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FactoryListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Factory"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FactoryIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FactoryIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const FactoryRepoConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FactoryRepoConfiguration",
    uberParent: "FactoryRepoConfiguration",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      accountName: {
        serializedName: "accountName",
        required: true,
        type: {
          name: "String"
        }
      },
      repositoryName: {
        serializedName: "repositoryName",
        required: true,
        type: {
          name: "String"
        }
      },
      collaborationBranch: {
        serializedName: "collaborationBranch",
        required: true,
        type: {
          name: "String"
        }
      },
      rootFolder: {
        serializedName: "rootFolder",
        required: true,
        type: {
          name: "String"
        }
      },
      lastCommitId: {
        serializedName: "lastCommitId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GlobalParameterSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GlobalParameterSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const EncryptionConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionConfiguration",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        required: true,
        type: {
          name: "String"
        }
      },
      vaultBaseUrl: {
        serializedName: "vaultBaseUrl",
        required: true,
        type: {
          name: "String"
        }
      },
      keyVersion: {
        serializedName: "keyVersion",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "CMKIdentityDefinition"
        }
      }
    }
  }
};

export const CMKIdentityDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CMKIdentityDefinition",
    modelProperties: {
      userAssignedIdentity: {
        serializedName: "userAssignedIdentity",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      eTag: {
        serializedName: "eTag",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FactoryRepoUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FactoryRepoUpdate",
    modelProperties: {
      factoryResourceId: {
        serializedName: "factoryResourceId",
        type: {
          name: "String"
        }
      },
      repoConfiguration: {
        serializedName: "repoConfiguration",
        type: {
          name: "Composite",
          className: "FactoryRepoConfiguration"
        }
      }
    }
  }
};

export const ExposureControlRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlRequest",
    modelProperties: {
      featureName: {
        serializedName: "featureName",
        type: {
          name: "String"
        }
      },
      featureType: {
        serializedName: "featureType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExposureControlResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlResponse",
    modelProperties: {
      featureName: {
        serializedName: "featureName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExposureControlBatchRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlBatchRequest",
    modelProperties: {
      exposureControlRequests: {
        serializedName: "exposureControlRequests",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExposureControlRequest"
            }
          }
        }
      }
    }
  }
};

export const ExposureControlBatchResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlBatchResponse",
    modelProperties: {
      exposureControlResponses: {
        serializedName: "exposureControlResponses",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExposureControlResponse"
            }
          }
        }
      }
    }
  }
};

export const FactoryUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FactoryUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "FactoryIdentity"
        }
      },
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GitHubAccessTokenRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubAccessTokenRequest",
    modelProperties: {
      gitHubAccessCode: {
        serializedName: "gitHubAccessCode",
        required: true,
        type: {
          name: "String"
        }
      },
      gitHubClientId: {
        serializedName: "gitHubClientId",
        type: {
          name: "String"
        }
      },
      gitHubClientSecret: {
        serializedName: "gitHubClientSecret",
        type: {
          name: "Composite",
          className: "GitHubClientSecret"
        }
      },
      gitHubAccessTokenBaseUrl: {
        serializedName: "gitHubAccessTokenBaseUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GitHubClientSecret: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubClientSecret",
    modelProperties: {
      byoaSecretAkvUrl: {
        serializedName: "byoaSecretAkvUrl",
        type: {
          name: "String"
        }
      },
      byoaSecretName: {
        serializedName: "byoaSecretName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GitHubAccessTokenResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubAccessTokenResponse",
    modelProperties: {
      gitHubAccessToken: {
        serializedName: "gitHubAccessToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserAccessPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAccessPolicy",
    modelProperties: {
      permissions: {
        serializedName: "permissions",
        type: {
          name: "String"
        }
      },
      accessResourcePath: {
        serializedName: "accessResourcePath",
        type: {
          name: "String"
        }
      },
      profileName: {
        serializedName: "profileName",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      expireTime: {
        serializedName: "expireTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessPolicyResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessPolicyResponse",
    modelProperties: {
      policy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "UserAccessPolicy"
        }
      },
      accessToken: {
        serializedName: "accessToken",
        type: {
          name: "String"
        }
      },
      dataPlaneUrl: {
        serializedName: "dataPlaneUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IntegrationRuntimeResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntime: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateIntegrationRuntimeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateIntegrationRuntimeRequest",
    modelProperties: {
      autoUpdate: {
        serializedName: "autoUpdate",
        type: {
          name: "String"
        }
      },
      updateDelayOffset: {
        serializedName: "updateDelayOffset",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeStatusResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeStatusResponse",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeStatus"
        }
      }
    }
  }
};

export const IntegrationRuntimeStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeStatus",
    uberParent: "IntegrationRuntimeStatus",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      dataFactoryName: {
        serializedName: "dataFactoryName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeOutboundNetworkDependenciesEndpointsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeOutboundNetworkDependenciesEndpointsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "IntegrationRuntimeOutboundNetworkDependenciesCategoryEndpoint"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeOutboundNetworkDependenciesCategoryEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeOutboundNetworkDependenciesCategoryEndpoint",
    modelProperties: {
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IntegrationRuntimeOutboundNetworkDependenciesEndpoint"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeOutboundNetworkDependenciesEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeOutboundNetworkDependenciesEndpoint",
    modelProperties: {
      domainName: {
        serializedName: "domainName",
        type: {
          name: "String"
        }
      },
      endpointDetails: {
        serializedName: "endpointDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className:
                "IntegrationRuntimeOutboundNetworkDependenciesEndpointDetails"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeOutboundNetworkDependenciesEndpointDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeOutboundNetworkDependenciesEndpointDetails",
    modelProperties: {
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IntegrationRuntimeConnectionInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeConnectionInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      serviceToken: {
        serializedName: "serviceToken",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identityCertThumbprint: {
        serializedName: "identityCertThumbprint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      hostServiceUri: {
        serializedName: "hostServiceUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicKey: {
        serializedName: "publicKey",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isIdentityCertExprired: {
        serializedName: "isIdentityCertExprired",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const IntegrationRuntimeRegenerateKeyParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeRegenerateKeyParameters",
    modelProperties: {
      keyName: {
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeAuthKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeAuthKeys",
    modelProperties: {
      authKey1: {
        serializedName: "authKey1",
        type: {
          name: "String"
        }
      },
      authKey2: {
        serializedName: "authKey2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeMonitoringData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeMonitoringData",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nodes: {
        serializedName: "nodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IntegrationRuntimeNodeMonitoringData"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeNodeMonitoringData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeNodeMonitoringData",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      nodeName: {
        serializedName: "nodeName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      availableMemoryInMB: {
        serializedName: "availableMemoryInMB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      cpuUtilization: {
        serializedName: "cpuUtilization",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      concurrentJobsLimit: {
        serializedName: "concurrentJobsLimit",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      concurrentJobsRunning: {
        serializedName: "concurrentJobsRunning",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxConcurrentJobs: {
        serializedName: "maxConcurrentJobs",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      sentBytes: {
        serializedName: "sentBytes",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      receivedBytes: {
        serializedName: "receivedBytes",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeRequest",
    modelProperties: {
      linkedFactoryName: {
        serializedName: "factoryName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateLinkedIntegrationRuntimeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateLinkedIntegrationRuntimeRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      dataFactoryName: {
        serializedName: "dataFactoryName",
        type: {
          name: "String"
        }
      },
      dataFactoryLocation: {
        serializedName: "dataFactoryLocation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisObjectMetadataStatusResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisObjectMetadataStatusResponse",
    modelProperties: {
      status: {
        serializedName: "status",
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
      properties: {
        serializedName: "properties",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetSsisObjectMetadataRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetSsisObjectMetadataRequest",
    modelProperties: {
      metadataPath: {
        serializedName: "metadataPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisObjectMetadataListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisObjectMetadataListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisObjectMetadata"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisObjectMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisObjectMetadata",
    uberParent: "SsisObjectMetadata",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
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
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SelfHostedIntegrationRuntimeNode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SelfHostedIntegrationRuntimeNode",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      nodeName: {
        serializedName: "nodeName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      machineName: {
        serializedName: "machineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      hostServiceUri: {
        serializedName: "hostServiceUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      versionStatus: {
        serializedName: "versionStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      registerTime: {
        serializedName: "registerTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastConnectTime: {
        serializedName: "lastConnectTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      expiryTime: {
        serializedName: "expiryTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastStartTime: {
        serializedName: "lastStartTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastStopTime: {
        serializedName: "lastStopTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdateResult: {
        serializedName: "lastUpdateResult",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastStartUpdateTime: {
        serializedName: "lastStartUpdateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastEndUpdateTime: {
        serializedName: "lastEndUpdateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      isActiveDispatcher: {
        serializedName: "isActiveDispatcher",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      concurrentJobsLimit: {
        serializedName: "concurrentJobsLimit",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxConcurrentJobs: {
        serializedName: "maxConcurrentJobs",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UpdateIntegrationRuntimeNodeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateIntegrationRuntimeNodeRequest",
    modelProperties: {
      concurrentJobsLimit: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "concurrentJobsLimit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IntegrationRuntimeNodeIpAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeNodeIpAddress",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedServiceListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      connectVia: {
        serializedName: "connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeReference",
    modelProperties: {
      type: {
        defaultValue: "IntegrationRuntimeReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const ParameterSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParameterSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dataset: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Dataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      structure: {
        serializedName: "structure",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schema: {
        serializedName: "schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      folder: {
        serializedName: "folder",
        type: {
          name: "Composite",
          className: "DatasetFolder"
        }
      }
    }
  }
};

export const LinkedServiceReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceReference",
    modelProperties: {
      type: {
        defaultValue: "LinkedServiceReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const DatasetFolder: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Activity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Activity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      dependsOn: {
        serializedName: "dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActivityDependency"
            }
          }
        }
      },
      userProperties: {
        serializedName: "userProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserProperty"
            }
          }
        }
      }
    }
  }
};

export const ActivityDependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityDependency",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      activity: {
        serializedName: "activity",
        required: true,
        type: {
          name: "String"
        }
      },
      dependencyConditions: {
        serializedName: "dependencyConditions",
        required: true,
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

export const UserProperty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserProperty",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const VariableSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VariableSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PipelineFolder: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelinePolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelinePolicy",
    modelProperties: {
      elapsedTimeMetric: {
        serializedName: "elapsedTimeMetric",
        type: {
          name: "Composite",
          className: "PipelineElapsedTimeMetricPolicy"
        }
      }
    }
  }
};

export const PipelineElapsedTimeMetricPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineElapsedTimeMetricPolicy",
    modelProperties: {
      duration: {
        serializedName: "duration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CreateRunResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRunResponse",
    modelProperties: {
      runId: {
        serializedName: "runId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunFilterParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunFilterParameters",
    modelProperties: {
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      },
      lastUpdatedAfter: {
        serializedName: "lastUpdatedAfter",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedBefore: {
        serializedName: "lastUpdatedBefore",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      filters: {
        serializedName: "filters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunQueryFilter"
            }
          }
        }
      },
      orderBy: {
        serializedName: "orderBy",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunQueryOrderBy"
            }
          }
        }
      }
    }
  }
};

export const RunQueryFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunQueryFilter",
    modelProperties: {
      operand: {
        serializedName: "operand",
        required: true,
        type: {
          name: "String"
        }
      },
      operator: {
        serializedName: "operator",
        required: true,
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        required: true,
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

export const RunQueryOrderBy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunQueryOrderBy",
    modelProperties: {
      orderBy: {
        serializedName: "orderBy",
        required: true,
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRunsQueryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRun: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      runId: {
        serializedName: "runId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      runGroupId: {
        serializedName: "runGroupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isLatest: {
        serializedName: "isLatest",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      pipelineName: {
        serializedName: "pipelineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      runDimensions: {
        serializedName: "runDimensions",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      invokedBy: {
        serializedName: "invokedBy",
        type: {
          name: "Composite",
          className: "PipelineRunInvokedBy"
        }
      },
      lastUpdated: {
        serializedName: "lastUpdated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      runStart: {
        serializedName: "runStart",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      runEnd: {
        serializedName: "runEnd",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      durationInMs: {
        serializedName: "durationInMs",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRunInvokedBy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRunInvokedBy",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      invokedByType: {
        serializedName: "invokedByType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      pipelineName: {
        serializedName: "pipelineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      pipelineRunId: {
        serializedName: "pipelineRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityRunsQueryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActivityRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityRun: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      pipelineName: {
        serializedName: "pipelineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      pipelineRunId: {
        serializedName: "pipelineRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityName: {
        serializedName: "activityName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityType: {
        serializedName: "activityType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityRunId: {
        serializedName: "activityRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityRunStart: {
        serializedName: "activityRunStart",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      activityRunEnd: {
        serializedName: "activityRunEnd",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      durationInMs: {
        serializedName: "durationInMs",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      input: {
        serializedName: "input",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      output: {
        serializedName: "output",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      error: {
        serializedName: "error",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TriggerListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Trigger: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Trigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      runtimeState: {
        serializedName: "runtimeState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const TriggerFilterParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerFilterParameters",
    modelProperties: {
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      },
      parentTriggerName: {
        serializedName: "parentTriggerName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerQueryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerResource"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerSubscriptionOperationStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerSubscriptionOperationStatus",
    modelProperties: {
      triggerName: {
        serializedName: "triggerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerRunsQueryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerRun: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      triggerRunId: {
        serializedName: "triggerRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerName: {
        serializedName: "triggerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerType: {
        serializedName: "triggerType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerRunTimestamp: {
        serializedName: "triggerRunTimestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      triggeredPipelines: {
        serializedName: "triggeredPipelines",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      runDimension: {
        serializedName: "runDimension",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      dependencyStatus: {
        serializedName: "dependencyStatus",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const DataFlow: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlow",
    uberParent: "DataFlow",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      folder: {
        serializedName: "folder",
        type: {
          name: "Composite",
          className: "DataFlowFolder"
        }
      }
    }
  }
};

export const DataFlowFolder: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateDataFlowDebugSessionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDataFlowDebugSessionRequest",
    modelProperties: {
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      },
      timeToLive: {
        serializedName: "timeToLive",
        type: {
          name: "Number"
        }
      },
      integrationRuntime: {
        serializedName: "integrationRuntime",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeDebugResource"
        }
      }
    }
  }
};

export const SubResourceDebugResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResourceDebugResource",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateDataFlowDebugSessionResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDataFlowDebugSessionResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryDataFlowDebugSessionsResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryDataFlowDebugSessionsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowDebugSessionInfo"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugSessionInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      },
      nodeCount: {
        serializedName: "nodeCount",
        type: {
          name: "Number"
        }
      },
      integrationRuntimeName: {
        serializedName: "integrationRuntimeName",
        type: {
          name: "String"
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      timeToLiveInMinutes: {
        serializedName: "timeToLiveInMinutes",
        type: {
          name: "Number"
        }
      },
      lastActivityTime: {
        serializedName: "lastActivityTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugPackage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugPackage",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlow: {
        serializedName: "dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowDebugResource"
        }
      },
      dataFlows: {
        serializedName: "dataFlows",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowDebugResource"
            }
          }
        }
      },
      datasets: {
        serializedName: "datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetDebugResource"
            }
          }
        }
      },
      linkedServices: {
        serializedName: "linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceDebugResource"
            }
          }
        }
      },
      staging: {
        serializedName: "staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      debugSettings: {
        serializedName: "debugSettings",
        type: {
          name: "Composite",
          className: "DataFlowDebugPackageDebugSettings"
        }
      }
    }
  }
};

export const DataFlowStagingInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowStagingInfo",
    modelProperties: {
      linkedService: {
        serializedName: "linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      folderPath: {
        serializedName: "folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataFlowDebugPackageDebugSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugPackageDebugSettings",
    modelProperties: {
      sourceSettings: {
        serializedName: "sourceSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSourceSetting"
            }
          }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      datasetParameters: {
        serializedName: "datasetParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataFlowSourceSetting: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSourceSetting",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      sourceName: {
        serializedName: "sourceName",
        type: {
          name: "String"
        }
      },
      rowLimit: {
        serializedName: "rowLimit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddDataFlowToDebugSessionResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddDataFlowToDebugSessionResponse",
    modelProperties: {
      jobVersion: {
        serializedName: "jobVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeleteDataFlowDebugSessionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeleteDataFlowDebugSessionRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugCommandRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugCommandRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      command: {
        serializedName: "command",
        type: {
          name: "String"
        }
      },
      commandPayload: {
        serializedName: "commandPayload",
        type: {
          name: "Composite",
          className: "DataFlowDebugCommandPayload"
        }
      }
    }
  }
};

export const DataFlowDebugCommandPayload: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugCommandPayload",
    modelProperties: {
      streamName: {
        serializedName: "streamName",
        required: true,
        type: {
          name: "String"
        }
      },
      rowLimits: {
        serializedName: "rowLimits",
        type: {
          name: "Number"
        }
      },
      columns: {
        serializedName: "columns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      expression: {
        serializedName: "expression",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugCommandResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugCommandResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedVirtualNetworkListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedVirtualNetworkListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedVirtualNetworkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedVirtualNetwork: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedVirtualNetwork",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      vNetId: {
        serializedName: "vNetId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      alias: {
        serializedName: "alias",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedPrivateEndpointListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedPrivateEndpointListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedPrivateEndpointResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedPrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedPrivateEndpoint",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      connectionState: {
        serializedName: "connectionState",
        type: {
          name: "Composite",
          className: "ConnectionStateProperties"
        }
      },
      fqdns: {
        serializedName: "fqdns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      groupId: {
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      isReserved: {
        serializedName: "isReserved",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      privateLinkResourceId: {
        serializedName: "privateLinkResourceId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConnectionStateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConnectionStateProperties",
    modelProperties: {
      actionsRequired: {
        serializedName: "actionsRequired",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemotePrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemotePrivateEndpointConnection",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "ArmIdWrapper"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkConnectionState"
        }
      }
    }
  }
};

export const ArmIdWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArmIdWrapper",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkConnectionApprovalRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkConnectionApprovalRequest",
    modelProperties: {
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkConnectionState"
        }
      }
    }
  }
};

export const PrivateLinkResourcesWrapper: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourcesWrapper",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "requiredZoneNames",
        readOnly: true,
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

export const Expression: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Expression",
    modelProperties: {
      type: {
        defaultValue: "Expression",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretBase",
    uberParent: "SecretBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeStatusListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeStatusListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IntegrationRuntimeStatusResponse"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineReference",
    modelProperties: {
      type: {
        defaultValue: "PipelineReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
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

export const TriggerPipelineReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerPipelineReference",
    modelProperties: {
      pipelineReference: {
        serializedName: "pipelineReference",
        type: {
          name: "Composite",
          className: "PipelineReference"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const DatasetReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetReference",
    modelProperties: {
      type: {
        defaultValue: "DatasetReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const GetDataFactoryOperationStatusResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetDataFactoryOperationStatusResponse",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowReference",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      type: {
        defaultValue: "DataFlowReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      datasetParameters: {
        serializedName: "datasetParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ManagedVirtualNetworkReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedVirtualNetworkReference",
    modelProperties: {
      type: {
        defaultValue: "ManagedVirtualNetworkReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CredentialReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CredentialReference",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      type: {
        defaultValue: "CredentialReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Credential: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Credential",
    uberParent: "Credential",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const Transformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Transformation",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      flowlet: {
        serializedName: "flowlet",
        type: {
          name: "Composite",
          className: "DataFlowReference"
        }
      }
    }
  }
};

export const DatasetLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      folderPath: {
        serializedName: "folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileName: {
        serializedName: "fileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetDataElement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetDataElement",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetSchemaDataElement: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetSchemaDataElement",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetStorageFormat: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetStorageFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      serializer: {
        serializedName: "serializer",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deserializer: {
        serializedName: "deserializer",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetCompression: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const IntegrationRuntimeComputeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeComputeProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      nodeSize: {
        serializedName: "nodeSize",
        type: {
          name: "String"
        }
      },
      numberOfNodes: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "numberOfNodes",
        type: {
          name: "Number"
        }
      },
      maxParallelExecutionsPerNode: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "maxParallelExecutionsPerNode",
        type: {
          name: "Number"
        }
      },
      dataFlowProperties: {
        serializedName: "dataFlowProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeDataFlowProperties"
        }
      },
      vNetProperties: {
        serializedName: "vNetProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeVNetProperties"
        }
      }
    }
  }
};

export const IntegrationRuntimeDataFlowProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeDataFlowProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      },
      timeToLive: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "timeToLive",
        type: {
          name: "Number"
        }
      },
      cleanup: {
        serializedName: "cleanup",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const IntegrationRuntimeVNetProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeVNetProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      vNetId: {
        serializedName: "vNetId",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "String"
        }
      },
      publicIPs: {
        serializedName: "publicIPs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      subnetId: {
        serializedName: "subnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeSsisProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeSsisProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      catalogInfo: {
        serializedName: "catalogInfo",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeSsisCatalogInfo"
        }
      },
      licenseType: {
        serializedName: "licenseType",
        type: {
          name: "String"
        }
      },
      customSetupScriptProperties: {
        serializedName: "customSetupScriptProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeCustomSetupScriptProperties"
        }
      },
      dataProxyProperties: {
        serializedName: "dataProxyProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeDataProxyProperties"
        }
      },
      edition: {
        serializedName: "edition",
        type: {
          name: "String"
        }
      },
      expressCustomSetupProperties: {
        serializedName: "expressCustomSetupProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CustomSetupBase"
            }
          }
        }
      },
      packageStores: {
        serializedName: "packageStores",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PackageStore"
            }
          }
        }
      },
      credential: {
        serializedName: "credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const IntegrationRuntimeSsisCatalogInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeSsisCatalogInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      catalogServerEndpoint: {
        serializedName: "catalogServerEndpoint",
        type: {
          name: "String"
        }
      },
      catalogAdminUserName: {
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        serializedName: "catalogAdminUserName",
        type: {
          name: "String"
        }
      },
      catalogAdminPassword: {
        serializedName: "catalogAdminPassword",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      },
      catalogPricingTier: {
        serializedName: "catalogPricingTier",
        type: {
          name: "String"
        }
      },
      dualStandbyPairName: {
        serializedName: "dualStandbyPairName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeCustomSetupScriptProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeCustomSetupScriptProperties",
    modelProperties: {
      blobContainerUri: {
        serializedName: "blobContainerUri",
        type: {
          name: "String"
        }
      },
      sasToken: {
        serializedName: "sasToken",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const IntegrationRuntimeDataProxyProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeDataProxyProperties",
    modelProperties: {
      connectVia: {
        serializedName: "connectVia",
        type: {
          name: "Composite",
          className: "EntityReference"
        }
      },
      stagingLinkedService: {
        serializedName: "stagingLinkedService",
        type: {
          name: "Composite",
          className: "EntityReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EntityReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EntityReference",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CustomSetupBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomSetupBase",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PackageStore: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PackageStore",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      packageStoreLinkedService: {
        serializedName: "packageStoreLinkedService",
        type: {
          name: "Composite",
          className: "EntityReference"
        }
      }
    }
  }
};

export const IntegrationRuntimeCustomerVirtualNetwork: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeCustomerVirtualNetwork",
    modelProperties: {
      subnetId: {
        serializedName: "subnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeType",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator: {
      serializedName: "authorizationType",
      clientName: "authorizationType"
    },
    modelProperties: {
      authorizationType: {
        serializedName: "authorizationType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedIntegrationRuntimeNode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntimeNode",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      nodeId: {
        serializedName: "nodeId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedIntegrationRuntimeError"
            }
          }
        }
      }
    }
  }
};

export const ManagedIntegrationRuntimeError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntimeError",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      time: {
        serializedName: "time",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedIntegrationRuntimeOperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntimeOperationResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      result: {
        serializedName: "result",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      activityId: {
        serializedName: "activityId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntime: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntime",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      dataFactoryName: {
        serializedName: "dataFactoryName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      dataFactoryLocation: {
        serializedName: "dataFactoryLocation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "createTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const SsisEnvironmentReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisEnvironmentReference",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      environmentFolderName: {
        serializedName: "environmentFolderName",
        type: {
          name: "String"
        }
      },
      environmentName: {
        serializedName: "environmentName",
        type: {
          name: "String"
        }
      },
      referenceType: {
        serializedName: "referenceType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisParameter",
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
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      dataType: {
        serializedName: "dataType",
        type: {
          name: "String"
        }
      },
      required: {
        serializedName: "required",
        type: {
          name: "Boolean"
        }
      },
      sensitive: {
        serializedName: "sensitive",
        type: {
          name: "Boolean"
        }
      },
      designDefaultValue: {
        serializedName: "designDefaultValue",
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "String"
        }
      },
      sensitiveDefaultValue: {
        serializedName: "sensitiveDefaultValue",
        type: {
          name: "String"
        }
      },
      valueType: {
        serializedName: "valueType",
        type: {
          name: "String"
        }
      },
      valueSet: {
        serializedName: "valueSet",
        type: {
          name: "Boolean"
        }
      },
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisVariable: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisVariable",
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
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      dataType: {
        serializedName: "dataType",
        type: {
          name: "String"
        }
      },
      sensitive: {
        serializedName: "sensitive",
        type: {
          name: "Boolean"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      sensitiveValue: {
        serializedName: "sensitiveValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlAlwaysEncryptedProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlAlwaysEncryptedProperties",
    modelProperties: {
      alwaysEncryptedAkvAuthType: {
        serializedName: "alwaysEncryptedAkvAuthType",
        required: true,
        type: {
          name: "String"
        }
      },
      servicePrincipalId: {
        serializedName: "servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      credential: {
        serializedName: "credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const WebLinkedServiceTypeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebLinkedServiceTypeProperties",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator: {
      serializedName: "authenticationType",
      clientName: "authenticationType"
    },
    modelProperties: {
      url: {
        serializedName: "url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "authenticationType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptAction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptAction",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        required: true,
        type: {
          name: "String"
        }
      },
      roles: {
        serializedName: "roles",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityPolicy",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      timeout: {
        serializedName: "timeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      retry: {
        serializedName: "retry",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      retryIntervalInSeconds: {
        constraints: {
          InclusiveMaximum: 86400,
          InclusiveMinimum: 30
        },
        serializedName: "retryIntervalInSeconds",
        type: {
          name: "Number"
        }
      },
      secureInput: {
        serializedName: "secureInput",
        type: {
          name: "Boolean"
        }
      },
      secureOutput: {
        serializedName: "secureOutput",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StoreReadSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StoreReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      disableMetricsCollection: {
        serializedName: "disableMetricsCollection",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const StoreWriteSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StoreWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      disableMetricsCollection: {
        serializedName: "disableMetricsCollection",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DistcpSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DistcpSettings",
    modelProperties: {
      resourceManagerEndpoint: {
        serializedName: "resourceManagerEndpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tempScriptPath: {
        serializedName: "tempScriptPath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      distcpOptions: {
        serializedName: "distcpOptions",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FormatReadSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FormatReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CompressionReadSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CompressionReadSettings",
    uberParent: "CompressionReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FormatWriteSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FormatWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CopySource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceRetryCount: {
        serializedName: "sourceRetryCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sourceRetryWait: {
        serializedName: "sourceRetryWait",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      disableMetricsCollection: {
        serializedName: "disableMetricsCollection",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CopySink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopySink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      writeBatchSize: {
        serializedName: "writeBatchSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBatchTimeout: {
        serializedName: "writeBatchTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sinkRetryCount: {
        serializedName: "sinkRetryCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sinkRetryWait: {
        serializedName: "sinkRetryWait",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      disableMetricsCollection: {
        serializedName: "disableMetricsCollection",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const StagingSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StagingSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableCompression: {
        serializedName: "enableCompression",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RedirectIncompatibleRowSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedirectIncompatibleRowSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LogStorageSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogStorageSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      logLevel: {
        serializedName: "logLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableReliableLogging: {
        serializedName: "enableReliableLogging",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LogSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogSettings",
    modelProperties: {
      enableCopyActivityLog: {
        serializedName: "enableCopyActivityLog",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      copyActivityLogSettings: {
        serializedName: "copyActivityLogSettings",
        type: {
          name: "Composite",
          className: "CopyActivityLogSettings"
        }
      },
      logLocationSettings: {
        serializedName: "logLocationSettings",
        type: {
          name: "Composite",
          className: "LogLocationSettings"
        }
      }
    }
  }
};

export const CopyActivityLogSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyActivityLogSettings",
    modelProperties: {
      logLevel: {
        serializedName: "logLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableReliableLogging: {
        serializedName: "enableReliableLogging",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LogLocationSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogLocationSettings",
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SkipErrorFile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkipErrorFile",
    modelProperties: {
      fileMissing: {
        serializedName: "fileMissing",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataInconsistency: {
        serializedName: "dataInconsistency",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapHanaPartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapHanaPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapTablePartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapTablePartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxPartitionsNumber: {
        serializedName: "maxPartitionsNumber",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const StoredProcedureParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StoredProcedureParameter",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlPartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OraclePartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OraclePartitionSettings",
    modelProperties: {
      partitionNames: {
        serializedName: "partitionNames",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRdsForOraclePartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AmazonRdsForOraclePartitionSettings",
    modelProperties: {
      partitionNames: {
        serializedName: "partitionNames",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TeradataPartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TeradataPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbCursorMethodsProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoDbCursorMethodsProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      project: {
        serializedName: "project",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sort: {
        serializedName: "sort",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      skip: {
        serializedName: "skip",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const NetezzaPartitionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetezzaPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RedshiftUnloadSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedshiftUnloadSettings",
    modelProperties: {
      s3LinkedServiceName: {
        serializedName: "s3LinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      bucketName: {
        serializedName: "bucketName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExportSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportSettings",
    uberParent: "ExportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImportSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ImportSettings",
    uberParent: "ImportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetadataItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SqlUpsertSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlUpsertSettings",
    modelProperties: {
      useTempDB: {
        serializedName: "useTempDB",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      interimSchemaName: {
        serializedName: "interimSchemaName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      keys: {
        serializedName: "keys",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PolybaseSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolybaseSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      rejectType: {
        serializedName: "rejectType",
        type: {
          name: "String"
        }
      },
      rejectValue: {
        serializedName: "rejectValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rejectSampleValue: {
        serializedName: "rejectSampleValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useTypeDefault: {
        serializedName: "useTypeDefault",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DWCopyCommandSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DWCopyCommandSettings",
    modelProperties: {
      defaultValues: {
        serializedName: "defaultValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DWCopyCommandDefaultValue"
            }
          }
        }
      },
      additionalOptions: {
        serializedName: "additionalOptions",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DWCopyCommandDefaultValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DWCopyCommandDefaultValue",
    modelProperties: {
      columnName: {
        serializedName: "columnName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SqlDWUpsertSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlDWUpsertSettings",
    modelProperties: {
      interimSchemaName: {
        serializedName: "interimSchemaName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      keys: {
        serializedName: "keys",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AdditionalColumns: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AdditionalColumns",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CopyTranslator: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyTranslator",
    uberParent: "CopyTranslator",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TypeConversionSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TypeConversionSettings",
    modelProperties: {
      allowDataTruncation: {
        serializedName: "allowDataTruncation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      treatBooleanAsNumber: {
        serializedName: "treatBooleanAsNumber",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dateTimeFormat: {
        serializedName: "dateTimeFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dateTimeOffsetFormat: {
        serializedName: "dateTimeOffsetFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timeSpanFormat: {
        serializedName: "timeSpanFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      culture: {
        serializedName: "culture",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SsisPackageLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisPackageLocation",
    modelProperties: {
      packagePath: {
        serializedName: "packagePath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      packagePassword: {
        serializedName: "typeProperties.packagePassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessCredential: {
        serializedName: "typeProperties.accessCredential",
        type: {
          name: "Composite",
          className: "SsisAccessCredential"
        }
      },
      configurationPath: {
        serializedName: "typeProperties.configurationPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      configurationAccessCredential: {
        serializedName: "typeProperties.configurationAccessCredential",
        type: {
          name: "Composite",
          className: "SsisAccessCredential"
        }
      },
      packageName: {
        serializedName: "typeProperties.packageName",
        type: {
          name: "String"
        }
      },
      packageContent: {
        serializedName: "typeProperties.packageContent",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      packageLastModifiedDate: {
        serializedName: "typeProperties.packageLastModifiedDate",
        type: {
          name: "String"
        }
      },
      childPackages: {
        serializedName: "typeProperties.childPackages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisChildPackage"
            }
          }
        }
      }
    }
  }
};

export const SsisAccessCredential: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisAccessCredential",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const SsisChildPackage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisChildPackage",
    modelProperties: {
      packagePath: {
        serializedName: "packagePath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      packageName: {
        serializedName: "packageName",
        type: {
          name: "String"
        }
      },
      packageContent: {
        serializedName: "packageContent",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      packageLastModifiedDate: {
        serializedName: "packageLastModifiedDate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisExecutionCredential: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisExecutionCredential",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const SsisExecutionParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisExecutionParameter",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SsisPropertyOverride: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisPropertyOverride",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      isSensitive: {
        serializedName: "isSensitive",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SsisLogLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisLogLocation",
    modelProperties: {
      logPath: {
        serializedName: "logPath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      accessCredential: {
        serializedName: "typeProperties.accessCredential",
        type: {
          name: "Composite",
          className: "SsisAccessCredential"
        }
      },
      logRefreshInterval: {
        serializedName: "typeProperties.logRefreshInterval",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CustomActivityReferenceObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomActivityReferenceObject",
    modelProperties: {
      linkedServices: {
        serializedName: "linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      datasets: {
        serializedName: "datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      }
    }
  }
};

export const WebActivityAuthentication: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebActivityAuthentication",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      pfx: {
        serializedName: "pfx",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      username: {
        serializedName: "username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userTenant: {
        serializedName: "userTenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const SwitchCase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SwitchCase",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      activities: {
        serializedName: "activities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const AzureMLWebServiceFile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMLWebServiceFile",
    modelProperties: {
      filePath: {
        serializedName: "filePath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const ExecuteDataFlowActivityTypeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExecuteDataFlowActivityTypeProperties",
    modelProperties: {
      dataFlow: {
        serializedName: "dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowReference"
        }
      },
      staging: {
        serializedName: "staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      integrationRuntime: {
        serializedName: "integrationRuntime",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      compute: {
        serializedName: "compute",
        type: {
          name: "Composite",
          className: "ExecuteDataFlowActivityTypePropertiesCompute"
        }
      },
      traceLevel: {
        serializedName: "traceLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      continueOnError: {
        serializedName: "continueOnError",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      runConcurrently: {
        serializedName: "runConcurrently",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExecuteDataFlowActivityTypePropertiesCompute: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExecuteDataFlowActivityTypePropertiesCompute",
    modelProperties: {
      computeType: {
        serializedName: "computeType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PowerQuerySinkMapping: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PowerQuerySinkMapping",
    modelProperties: {
      queryName: {
        serializedName: "queryName",
        type: {
          name: "String"
        }
      },
      dataflowSinks: {
        serializedName: "dataflowSinks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PowerQuerySink"
            }
          }
        }
      }
    }
  }
};

export const ScheduleTriggerRecurrence: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScheduleTriggerRecurrence",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      frequency: {
        serializedName: "frequency",
        type: {
          name: "String"
        }
      },
      interval: {
        serializedName: "interval",
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      timeZone: {
        serializedName: "timeZone",
        type: {
          name: "String"
        }
      },
      schedule: {
        serializedName: "schedule",
        type: {
          name: "Composite",
          className: "RecurrenceSchedule"
        }
      }
    }
  }
};

export const RecurrenceSchedule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecurrenceSchedule",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      minutes: {
        serializedName: "minutes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      hours: {
        serializedName: "hours",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      weekDays: {
        serializedName: "weekDays",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ]
            }
          }
        }
      },
      monthDays: {
        serializedName: "monthDays",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      monthlyOccurrences: {
        serializedName: "monthlyOccurrences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecurrenceScheduleOccurrence"
            }
          }
        }
      }
    }
  }
};

export const RecurrenceScheduleOccurrence: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecurrenceScheduleOccurrence",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      day: {
        serializedName: "day",
        type: {
          name: "Enum",
          allowedValues: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      occurrence: {
        serializedName: "occurrence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RetryPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RetryPolicy",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      intervalInSeconds: {
        constraints: {
          InclusiveMaximum: 86400,
          InclusiveMinimum: 30
        },
        serializedName: "intervalInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DependencyReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerReference",
    modelProperties: {
      type: {
        defaultValue: "TriggerReference",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FactoryVstsConfiguration: coreClient.CompositeMapper = {
  serializedName: "FactoryVSTSConfiguration",
  type: {
    name: "Composite",
    className: "FactoryVstsConfiguration",
    uberParent: "FactoryRepoConfiguration",
    polymorphicDiscriminator:
      FactoryRepoConfiguration.type.polymorphicDiscriminator,
    modelProperties: {
      ...FactoryRepoConfiguration.type.modelProperties,
      projectName: {
        serializedName: "projectName",
        required: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FactoryGitHubConfiguration: coreClient.CompositeMapper = {
  serializedName: "FactoryGitHubConfiguration",
  type: {
    name: "Composite",
    className: "FactoryGitHubConfiguration",
    uberParent: "FactoryRepoConfiguration",
    polymorphicDiscriminator:
      FactoryRepoConfiguration.type.polymorphicDiscriminator,
    modelProperties: {
      ...FactoryRepoConfiguration.type.modelProperties,
      hostName: {
        serializedName: "hostName",
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
        }
      },
      clientSecret: {
        serializedName: "clientSecret",
        type: {
          name: "Composite",
          className: "GitHubClientSecret"
        }
      }
    }
  }
};

export const Factory: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Factory",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...Resource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "FactoryIdentity"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createTime: {
        serializedName: "properties.createTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      version: {
        serializedName: "properties.version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      repoConfiguration: {
        serializedName: "properties.repoConfiguration",
        type: {
          name: "Composite",
          className: "FactoryRepoConfiguration"
        }
      },
      globalParameters: {
        serializedName: "properties.globalParameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "GlobalParameterSpecification"
            }
          }
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionConfiguration"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedIntegrationRuntime: coreClient.CompositeMapper = {
  serializedName: "Managed",
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: IntegrationRuntime.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntime.type.modelProperties,
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedVirtualNetwork: {
        serializedName: "managedVirtualNetwork",
        type: {
          name: "Composite",
          className: "ManagedVirtualNetworkReference"
        }
      },
      computeProperties: {
        serializedName: "typeProperties.computeProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeComputeProperties"
        }
      },
      ssisProperties: {
        serializedName: "typeProperties.ssisProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeSsisProperties"
        }
      },
      customerVirtualNetwork: {
        serializedName: "typeProperties.customerVirtualNetwork",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeCustomerVirtualNetwork"
        }
      }
    }
  }
};

export const SelfHostedIntegrationRuntime: coreClient.CompositeMapper = {
  serializedName: "SelfHosted",
  type: {
    name: "Composite",
    className: "SelfHostedIntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: IntegrationRuntime.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntime.type.modelProperties,
      linkedInfo: {
        serializedName: "typeProperties.linkedInfo",
        type: {
          name: "Composite",
          className: "LinkedIntegrationRuntimeType"
        }
      }
    }
  }
};

export const IntegrationRuntimeResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IntegrationRuntime"
        }
      }
    }
  }
};

export const LinkedServiceResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LinkedService"
        }
      }
    }
  }
};

export const DatasetResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Dataset"
        }
      }
    }
  }
};

export const PipelineResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineResource",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...SubResource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      activities: {
        serializedName: "properties.activities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      variables: {
        serializedName: "properties.variables",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "VariableSpecification" }
          }
        }
      },
      concurrency: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.concurrency",
        type: {
          name: "Number"
        }
      },
      annotations: {
        serializedName: "properties.annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      runDimensions: {
        serializedName: "properties.runDimensions",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      folder: {
        serializedName: "properties.folder",
        type: {
          name: "Composite",
          className: "PipelineFolder"
        }
      },
      policy: {
        serializedName: "properties.policy",
        type: {
          name: "Composite",
          className: "PipelinePolicy"
        }
      }
    }
  }
};

export const TriggerResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Trigger"
        }
      }
    }
  }
};

export const DataFlowResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DataFlow"
        }
      }
    }
  }
};

export const ManagedVirtualNetworkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedVirtualNetworkResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ManagedVirtualNetwork"
        }
      }
    }
  }
};

export const ManagedPrivateEndpointResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedPrivateEndpointResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ManagedPrivateEndpoint"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "RemotePrivateEndpointConnection"
        }
      }
    }
  }
};

export const PrivateLinkConnectionApprovalRequestResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkConnectionApprovalRequestResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkConnectionApprovalRequest"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkResourceProperties"
        }
      }
    }
  }
};

export const CredentialResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CredentialResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Credential"
        }
      }
    }
  }
};

export const ManagedIntegrationRuntimeStatus: coreClient.CompositeMapper = {
  serializedName: "Managed",
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntimeStatus",
    uberParent: "IntegrationRuntimeStatus",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      IntegrationRuntimeStatus.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntimeStatus.type.modelProperties,
      createTime: {
        serializedName: "typeProperties.createTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      nodes: {
        serializedName: "typeProperties.nodes",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedIntegrationRuntimeNode"
            }
          }
        }
      },
      otherErrors: {
        serializedName: "typeProperties.otherErrors",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagedIntegrationRuntimeError"
            }
          }
        }
      },
      lastOperation: {
        serializedName: "typeProperties.lastOperation",
        type: {
          name: "Composite",
          className: "ManagedIntegrationRuntimeOperationResult"
        }
      }
    }
  }
};

export const SelfHostedIntegrationRuntimeStatus: coreClient.CompositeMapper = {
  serializedName: "SelfHosted",
  type: {
    name: "Composite",
    className: "SelfHostedIntegrationRuntimeStatus",
    uberParent: "IntegrationRuntimeStatus",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      IntegrationRuntimeStatus.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntimeStatus.type.modelProperties,
      createTime: {
        serializedName: "typeProperties.createTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      taskQueueId: {
        serializedName: "typeProperties.taskQueueId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      internalChannelEncryption: {
        serializedName: "typeProperties.internalChannelEncryption",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "typeProperties.version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      nodes: {
        serializedName: "typeProperties.nodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SelfHostedIntegrationRuntimeNode"
            }
          }
        }
      },
      scheduledUpdateDate: {
        serializedName: "typeProperties.scheduledUpdateDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      updateDelayOffset: {
        serializedName: "typeProperties.updateDelayOffset",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      localTimeZoneOffset: {
        serializedName: "typeProperties.localTimeZoneOffset",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capabilities: {
        serializedName: "typeProperties.capabilities",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      serviceUrls: {
        serializedName: "typeProperties.serviceUrls",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      autoUpdate: {
        serializedName: "typeProperties.autoUpdate",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      versionStatus: {
        serializedName: "typeProperties.versionStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      links: {
        serializedName: "typeProperties.links",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedIntegrationRuntime"
            }
          }
        }
      },
      pushedVersion: {
        serializedName: "typeProperties.pushedVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      latestVersion: {
        serializedName: "typeProperties.latestVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      autoUpdateETA: {
        serializedName: "typeProperties.autoUpdateETA",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const SsisFolder: coreClient.CompositeMapper = {
  serializedName: "Folder",
  type: {
    name: "Composite",
    className: "SsisFolder",
    uberParent: "SsisObjectMetadata",
    polymorphicDiscriminator: SsisObjectMetadata.type.polymorphicDiscriminator,
    modelProperties: {
      ...SsisObjectMetadata.type.modelProperties
    }
  }
};

export const SsisProject: coreClient.CompositeMapper = {
  serializedName: "Project",
  type: {
    name: "Composite",
    className: "SsisProject",
    uberParent: "SsisObjectMetadata",
    polymorphicDiscriminator: SsisObjectMetadata.type.polymorphicDiscriminator,
    modelProperties: {
      ...SsisObjectMetadata.type.modelProperties,
      folderId: {
        serializedName: "folderId",
        type: {
          name: "Number"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Number"
        }
      },
      environmentRefs: {
        serializedName: "environmentRefs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisEnvironmentReference"
            }
          }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisParameter"
            }
          }
        }
      }
    }
  }
};

export const SsisPackage: coreClient.CompositeMapper = {
  serializedName: "Package",
  type: {
    name: "Composite",
    className: "SsisPackage",
    uberParent: "SsisObjectMetadata",
    polymorphicDiscriminator: SsisObjectMetadata.type.polymorphicDiscriminator,
    modelProperties: {
      ...SsisObjectMetadata.type.modelProperties,
      folderId: {
        serializedName: "folderId",
        type: {
          name: "Number"
        }
      },
      projectVersion: {
        serializedName: "projectVersion",
        type: {
          name: "Number"
        }
      },
      projectId: {
        serializedName: "projectId",
        type: {
          name: "Number"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisParameter"
            }
          }
        }
      }
    }
  }
};

export const SsisEnvironment: coreClient.CompositeMapper = {
  serializedName: "Environment",
  type: {
    name: "Composite",
    className: "SsisEnvironment",
    uberParent: "SsisObjectMetadata",
    polymorphicDiscriminator: SsisObjectMetadata.type.polymorphicDiscriminator,
    modelProperties: {
      ...SsisObjectMetadata.type.modelProperties,
      folderId: {
        serializedName: "folderId",
        type: {
          name: "Number"
        }
      },
      variables: {
        serializedName: "variables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisVariable"
            }
          }
        }
      }
    }
  }
};

export const AzureStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureStorage",
  type: {
    name: "Composite",
    className: "AzureStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureBlobStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureBlobStorage",
  type: {
    name: "Composite",
    className: "AzureBlobStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      serviceEndpoint: {
        serializedName: "typeProperties.serviceEndpoint",
        type: {
          name: "String"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKind: {
        serializedName: "typeProperties.accountKind",
        type: {
          name: "String"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureTableStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureTableStorage",
  type: {
    name: "Composite",
    className: "AzureTableStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureSqlDWLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureSqlDW",
  type: {
    name: "Composite",
    className: "AzureSqlDWLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const SqlServerLinkedService: coreClient.CompositeMapper = {
  serializedName: "SqlServer",
  type: {
    name: "Composite",
    className: "SqlServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alwaysEncryptedSettings: {
        serializedName: "typeProperties.alwaysEncryptedSettings",
        type: {
          name: "Composite",
          className: "SqlAlwaysEncryptedProperties"
        }
      }
    }
  }
};

export const AmazonRdsForSqlServerLinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForSqlServer",
  type: {
    name: "Composite",
    className: "AmazonRdsForSqlServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alwaysEncryptedSettings: {
        serializedName: "typeProperties.alwaysEncryptedSettings",
        type: {
          name: "Composite",
          className: "SqlAlwaysEncryptedProperties"
        }
      }
    }
  }
};

export const AzureSqlDatabaseLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureSqlDatabase",
  type: {
    name: "Composite",
    className: "AzureSqlDatabaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alwaysEncryptedSettings: {
        serializedName: "typeProperties.alwaysEncryptedSettings",
        type: {
          name: "Composite",
          className: "SqlAlwaysEncryptedProperties"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureSqlMILinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureSqlMI",
  type: {
    name: "Composite",
    className: "AzureSqlMILinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alwaysEncryptedSettings: {
        serializedName: "typeProperties.alwaysEncryptedSettings",
        type: {
          name: "Composite",
          className: "SqlAlwaysEncryptedProperties"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureBatchLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureBatch",
  type: {
    name: "Composite",
    className: "AzureBatchLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accountName: {
        serializedName: "typeProperties.accountName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessKey: {
        serializedName: "typeProperties.accessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      batchUri: {
        serializedName: "typeProperties.batchUri",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      poolName: {
        serializedName: "typeProperties.poolName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureKeyVaultLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureKeyVault",
  type: {
    name: "Composite",
    className: "AzureKeyVaultLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      baseUrl: {
        serializedName: "typeProperties.baseUrl",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const CosmosDbLinkedService: coreClient.CompositeMapper = {
  serializedName: "CosmosDb",
  type: {
    name: "Composite",
    className: "CosmosDbLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountEndpoint: {
        serializedName: "typeProperties.accountEndpoint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      connectionMode: {
        serializedName: "typeProperties.connectionMode",
        type: {
          name: "String"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsLinkedService: coreClient.CompositeMapper = {
  serializedName: "Dynamics",
  type: {
    name: "Composite",
    className: "DynamicsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsCrmLinkedService: coreClient.CompositeMapper = {
  serializedName: "DynamicsCrm",
  type: {
    name: "Composite",
    className: "DynamicsCrmLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CommonDataServiceForAppsLinkedService: coreClient.CompositeMapper = {
  serializedName: "CommonDataServiceForApps",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HDInsightLinkedService: coreClient.CompositeMapper = {
  serializedName: "HDInsight",
  type: {
    name: "Composite",
    className: "HDInsightLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clusterUri: {
        serializedName: "typeProperties.clusterUri",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      hcatalogLinkedServiceName: {
        serializedName: "typeProperties.hcatalogLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      isEspEnabled: {
        serializedName: "typeProperties.isEspEnabled",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileSystem: {
        serializedName: "typeProperties.fileSystem",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileServerLinkedService: coreClient.CompositeMapper = {
  serializedName: "FileServer",
  type: {
    name: "Composite",
    className: "FileServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "typeProperties.userId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureFileStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureFileStorage",
  type: {
    name: "Composite",
    className: "AzureFileStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userId: {
        serializedName: "typeProperties.userId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      fileShare: {
        serializedName: "typeProperties.fileShare",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      snapshot: {
        serializedName: "typeProperties.snapshot",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonS3CompatibleLinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonS3Compatible",
  type: {
    name: "Composite",
    className: "AmazonS3CompatibleLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      forcePathStyle: {
        serializedName: "typeProperties.forcePathStyle",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleCloudStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "OracleCloudStorage",
  type: {
    name: "Composite",
    className: "OracleCloudStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleCloudStorageLinkedService: coreClient.CompositeMapper = {
  serializedName: "GoogleCloudStorage",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleLinkedService: coreClient.CompositeMapper = {
  serializedName: "Oracle",
  type: {
    name: "Composite",
    className: "OracleLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRdsForOracleLinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForOracle",
  type: {
    name: "Composite",
    className: "AmazonRdsForOracleLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMySqlLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureMySql",
  type: {
    name: "Composite",
    className: "AzureMySqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MySqlLinkedService: coreClient.CompositeMapper = {
  serializedName: "MySql",
  type: {
    name: "Composite",
    className: "MySqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PostgreSqlLinkedService: coreClient.CompositeMapper = {
  serializedName: "PostgreSql",
  type: {
    name: "Composite",
    className: "PostgreSqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SybaseLinkedService: coreClient.CompositeMapper = {
  serializedName: "Sybase",
  type: {
    name: "Composite",
    className: "SybaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Db2LinkedService: coreClient.CompositeMapper = {
  serializedName: "Db2",
  type: {
    name: "Composite",
    className: "Db2LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      packageCollection: {
        serializedName: "typeProperties.packageCollection",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      certificateCommonName: {
        serializedName: "typeProperties.certificateCommonName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TeradataLinkedService: coreClient.CompositeMapper = {
  serializedName: "Teradata",
  type: {
    name: "Composite",
    className: "TeradataLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMLLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureML",
  type: {
    name: "Composite",
    className: "AzureMLLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      mlEndpoint: {
        serializedName: "typeProperties.mlEndpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      apiKey: {
        serializedName: "typeProperties.apiKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      updateResourceEndpoint: {
        serializedName: "typeProperties.updateResourceEndpoint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMLServiceLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureMLService",
  type: {
    name: "Composite",
    className: "AzureMLServiceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mlWorkspaceName: {
        serializedName: "typeProperties.mlWorkspaceName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OdbcLinkedService: coreClient.CompositeMapper = {
  serializedName: "Odbc",
  type: {
    name: "Composite",
    className: "OdbcLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InformixLinkedService: coreClient.CompositeMapper = {
  serializedName: "Informix",
  type: {
    name: "Composite",
    className: "InformixLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MicrosoftAccessLinkedService: coreClient.CompositeMapper = {
  serializedName: "MicrosoftAccess",
  type: {
    name: "Composite",
    className: "MicrosoftAccessLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HdfsLinkedService: coreClient.CompositeMapper = {
  serializedName: "Hdfs",
  type: {
    name: "Composite",
    className: "HdfsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const ODataLinkedService: coreClient.CompositeMapper = {
  serializedName: "OData",
  type: {
    name: "Composite",
    className: "ODataLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authHeaders: {
        serializedName: "typeProperties.authHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      aadServicePrincipalCredentialType: {
        serializedName: "typeProperties.aadServicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalEmbeddedCert: {
        serializedName: "typeProperties.servicePrincipalEmbeddedCert",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalEmbeddedCertPassword: {
        serializedName: "typeProperties.servicePrincipalEmbeddedCertPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WebLinkedService: coreClient.CompositeMapper = {
  serializedName: "Web",
  type: {
    name: "Composite",
    className: "WebLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        type: {
          name: "Composite",
          className: "WebLinkedServiceTypeProperties"
        }
      }
    }
  }
};

export const CassandraLinkedService: coreClient.CompositeMapper = {
  serializedName: "Cassandra",
  type: {
    name: "Composite",
    className: "CassandraLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbLinkedService: coreClient.CompositeMapper = {
  serializedName: "MongoDb",
  type: {
    name: "Composite",
    className: "MongoDbLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      databaseName: {
        serializedName: "typeProperties.databaseName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authSource: {
        serializedName: "typeProperties.authSource",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbAtlasLinkedService: coreClient.CompositeMapper = {
  serializedName: "MongoDbAtlas",
  type: {
    name: "Composite",
    className: "MongoDbAtlasLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbV2LinkedService: coreClient.CompositeMapper = {
  serializedName: "MongoDbV2",
  type: {
    name: "Composite",
    className: "MongoDbV2LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiLinkedService: coreClient.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApi",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      isServerVersionAbove32: {
        serializedName: "typeProperties.isServerVersionAbove32",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStore",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      dataLakeStoreUri: {
        serializedName: "typeProperties.dataLakeStoreUri",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountName: {
        serializedName: "typeProperties.accountName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureBlobFSLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFS",
  type: {
    name: "Composite",
    className: "AzureBlobFSLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const Office365LinkedService: coreClient.CompositeMapper = {
  serializedName: "Office365",
  type: {
    name: "Composite",
    className: "Office365LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      office365TenantId: {
        serializedName: "typeProperties.office365TenantId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalTenantId: {
        serializedName: "typeProperties.servicePrincipalTenantId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceLinkedService: coreClient.CompositeMapper = {
  serializedName: "Salesforce",
  type: {
    name: "Composite",
    className: "SalesforceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      environmentUrl: {
        serializedName: "typeProperties.environmentUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      securityToken: {
        serializedName: "typeProperties.securityToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      apiVersion: {
        serializedName: "typeProperties.apiVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceServiceCloudLinkedService: coreClient.CompositeMapper = {
  serializedName: "SalesforceServiceCloud",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      environmentUrl: {
        serializedName: "typeProperties.environmentUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      securityToken: {
        serializedName: "typeProperties.securityToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      apiVersion: {
        serializedName: "typeProperties.apiVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      extendedProperties: {
        serializedName: "typeProperties.extendedProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapCloudForCustomerLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapCloudForCustomer",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapEccLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapEcc",
  type: {
    name: "Composite",
    className: "SapEccLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapOpenHubLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapOpenHub",
  type: {
    name: "Composite",
    className: "SapOpenHubLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      language: {
        serializedName: "typeProperties.language",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      systemId: {
        serializedName: "typeProperties.systemId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      messageServer: {
        serializedName: "typeProperties.messageServer",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      messageServerService: {
        serializedName: "typeProperties.messageServerService",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      logonGroup: {
        serializedName: "typeProperties.logonGroup",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RestServiceLinkedService: coreClient.CompositeMapper = {
  serializedName: "RestService",
  type: {
    name: "Composite",
    className: "RestServiceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authHeaders: {
        serializedName: "typeProperties.authHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureCloudType: {
        serializedName: "typeProperties.azureCloudType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AmazonS3LinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonS3",
  type: {
    name: "Composite",
    className: "AmazonS3LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sessionToken: {
        serializedName: "typeProperties.sessionToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRedshiftLinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonRedshift",
  type: {
    name: "Composite",
    className: "AmazonRedshiftLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CustomDataSourceLinkedService: coreClient.CompositeMapper = {
  serializedName: "CustomDataSource",
  type: {
    name: "Composite",
    className: "CustomDataSourceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSearchLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureSearch",
  type: {
    name: "Composite",
    className: "AzureSearchLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      key: {
        serializedName: "typeProperties.key",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HttpLinkedService: coreClient.CompositeMapper = {
  serializedName: "HttpServer",
  type: {
    name: "Composite",
    className: "HttpLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authHeaders: {
        serializedName: "typeProperties.authHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      embeddedCertData: {
        serializedName: "typeProperties.embeddedCertData",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      certThumbprint: {
        serializedName: "typeProperties.certThumbprint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FtpServerLinkedService: coreClient.CompositeMapper = {
  serializedName: "FtpServer",
  type: {
    name: "Composite",
    className: "FtpServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SftpServerLinkedService: coreClient.CompositeMapper = {
  serializedName: "Sftp",
  type: {
    name: "Composite",
    className: "SftpServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      privateKeyPath: {
        serializedName: "typeProperties.privateKeyPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      privateKeyContent: {
        serializedName: "typeProperties.privateKeyContent",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      passPhrase: {
        serializedName: "typeProperties.passPhrase",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      skipHostKeyValidation: {
        serializedName: "typeProperties.skipHostKeyValidation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hostKeyFingerprint: {
        serializedName: "typeProperties.hostKeyFingerprint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapBWLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapBW",
  type: {
    name: "Composite",
    className: "SapBWLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapHanaLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapHana",
  type: {
    name: "Composite",
    className: "SapHanaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonMWSLinkedService: coreClient.CompositeMapper = {
  serializedName: "AmazonMWS",
  type: {
    name: "Composite",
    className: "AmazonMWSLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      marketplaceID: {
        serializedName: "typeProperties.marketplaceID",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sellerID: {
        serializedName: "typeProperties.sellerID",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mwsAuthToken: {
        serializedName: "typeProperties.mwsAuthToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretKey: {
        serializedName: "typeProperties.secretKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzurePostgreSqlLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzurePostgreSql",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ConcurLinkedService: coreClient.CompositeMapper = {
  serializedName: "Concur",
  type: {
    name: "Composite",
    className: "ConcurLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CouchbaseLinkedService: coreClient.CompositeMapper = {
  serializedName: "Couchbase",
  type: {
    name: "Composite",
    className: "CouchbaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credString: {
        serializedName: "typeProperties.credString",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DrillLinkedService: coreClient.CompositeMapper = {
  serializedName: "Drill",
  type: {
    name: "Composite",
    className: "DrillLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const EloquaLinkedService: coreClient.CompositeMapper = {
  serializedName: "Eloqua",
  type: {
    name: "Composite",
    className: "EloquaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleBigQueryLinkedService: coreClient.CompositeMapper = {
  serializedName: "GoogleBigQuery",
  type: {
    name: "Composite",
    className: "GoogleBigQueryLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      project: {
        serializedName: "typeProperties.project",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalProjects: {
        serializedName: "typeProperties.additionalProjects",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestGoogleDriveScope: {
        serializedName: "typeProperties.requestGoogleDriveScope",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      email: {
        serializedName: "typeProperties.email",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      keyFilePath: {
        serializedName: "typeProperties.keyFilePath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GreenplumLinkedService: coreClient.CompositeMapper = {
  serializedName: "Greenplum",
  type: {
    name: "Composite",
    className: "GreenplumLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HBaseLinkedService: coreClient.CompositeMapper = {
  serializedName: "HBase",
  type: {
    name: "Composite",
    className: "HBaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HiveLinkedService: coreClient.CompositeMapper = {
  serializedName: "Hive",
  type: {
    name: "Composite",
    className: "HiveLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serverType: {
        serializedName: "typeProperties.serverType",
        type: {
          name: "String"
        }
      },
      thriftTransportProtocol: {
        serializedName: "typeProperties.thriftTransportProtocol",
        type: {
          name: "String"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      serviceDiscoveryMode: {
        serializedName: "typeProperties.serviceDiscoveryMode",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      zooKeeperNameSpace: {
        serializedName: "typeProperties.zooKeeperNameSpace",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useNativeQuery: {
        serializedName: "typeProperties.useNativeQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HubspotLinkedService: coreClient.CompositeMapper = {
  serializedName: "Hubspot",
  type: {
    name: "Composite",
    className: "HubspotLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ImpalaLinkedService: coreClient.CompositeMapper = {
  serializedName: "Impala",
  type: {
    name: "Composite",
    className: "ImpalaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JiraLinkedService: coreClient.CompositeMapper = {
  serializedName: "Jira",
  type: {
    name: "Composite",
    className: "JiraLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MagentoLinkedService: coreClient.CompositeMapper = {
  serializedName: "Magento",
  type: {
    name: "Composite",
    className: "MagentoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MariaDBLinkedService: coreClient.CompositeMapper = {
  serializedName: "MariaDB",
  type: {
    name: "Composite",
    className: "MariaDBLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMariaDBLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureMariaDB",
  type: {
    name: "Composite",
    className: "AzureMariaDBLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MarketoLinkedService: coreClient.CompositeMapper = {
  serializedName: "Marketo",
  type: {
    name: "Composite",
    className: "MarketoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PaypalLinkedService: coreClient.CompositeMapper = {
  serializedName: "Paypal",
  type: {
    name: "Composite",
    className: "PaypalLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PhoenixLinkedService: coreClient.CompositeMapper = {
  serializedName: "Phoenix",
  type: {
    name: "Composite",
    className: "PhoenixLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PrestoLinkedService: coreClient.CompositeMapper = {
  serializedName: "Presto",
  type: {
    name: "Composite",
    className: "PrestoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serverVersion: {
        serializedName: "typeProperties.serverVersion",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      catalog: {
        serializedName: "typeProperties.catalog",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timeZoneID: {
        serializedName: "typeProperties.timeZoneID",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const QuickBooksLinkedService: coreClient.CompositeMapper = {
  serializedName: "QuickBooks",
  type: {
    name: "Composite",
    className: "QuickBooksLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      endpoint: {
        serializedName: "typeProperties.endpoint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      companyId: {
        serializedName: "typeProperties.companyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      consumerKey: {
        serializedName: "typeProperties.consumerKey",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      consumerSecret: {
        serializedName: "typeProperties.consumerSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessTokenSecret: {
        serializedName: "typeProperties.accessTokenSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ServiceNowLinkedService: coreClient.CompositeMapper = {
  serializedName: "ServiceNow",
  type: {
    name: "Composite",
    className: "ServiceNowLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ShopifyLinkedService: coreClient.CompositeMapper = {
  serializedName: "Shopify",
  type: {
    name: "Composite",
    className: "ShopifyLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SparkLinkedService: coreClient.CompositeMapper = {
  serializedName: "Spark",
  type: {
    name: "Composite",
    className: "SparkLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      port: {
        serializedName: "typeProperties.port",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      serverType: {
        serializedName: "typeProperties.serverType",
        type: {
          name: "String"
        }
      },
      thriftTransportProtocol: {
        serializedName: "typeProperties.thriftTransportProtocol",
        type: {
          name: "String"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SquareLinkedService: coreClient.CompositeMapper = {
  serializedName: "Square",
  type: {
    name: "Composite",
    className: "SquareLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      host: {
        serializedName: "typeProperties.host",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      redirectUri: {
        serializedName: "typeProperties.redirectUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const XeroLinkedService: coreClient.CompositeMapper = {
  serializedName: "Xero",
  type: {
    name: "Composite",
    className: "XeroLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      host: {
        serializedName: "typeProperties.host",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      consumerKey: {
        serializedName: "typeProperties.consumerKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      privateKey: {
        serializedName: "typeProperties.privateKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ZohoLinkedService: coreClient.CompositeMapper = {
  serializedName: "Zoho",
  type: {
    name: "Composite",
    className: "ZohoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      endpoint: {
        serializedName: "typeProperties.endpoint",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const VerticaLinkedService: coreClient.CompositeMapper = {
  serializedName: "Vertica",
  type: {
    name: "Composite",
    className: "VerticaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const NetezzaLinkedService: coreClient.CompositeMapper = {
  serializedName: "Netezza",
  type: {
    name: "Composite",
    className: "NetezzaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceMarketingCloudLinkedService: coreClient.CompositeMapper = {
  serializedName: "SalesforceMarketingCloud",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionProperties: {
        serializedName: "typeProperties.connectionProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HDInsightOnDemandLinkedService: coreClient.CompositeMapper = {
  serializedName: "HDInsightOnDemand",
  type: {
    name: "Composite",
    className: "HDInsightOnDemandLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clusterSize: {
        serializedName: "typeProperties.clusterSize",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timeToLive: {
        serializedName: "typeProperties.timeToLive",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "typeProperties.version",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      hostSubscriptionId: {
        serializedName: "typeProperties.hostSubscriptionId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clusterResourceGroup: {
        serializedName: "typeProperties.clusterResourceGroup",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clusterNamePrefix: {
        serializedName: "typeProperties.clusterNamePrefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clusterUserName: {
        serializedName: "typeProperties.clusterUserName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clusterPassword: {
        serializedName: "typeProperties.clusterPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clusterSshUserName: {
        serializedName: "typeProperties.clusterSshUserName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clusterSshPassword: {
        serializedName: "typeProperties.clusterSshPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      additionalLinkedServiceNames: {
        serializedName: "typeProperties.additionalLinkedServiceNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      hcatalogLinkedServiceName: {
        serializedName: "typeProperties.hcatalogLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      clusterType: {
        serializedName: "typeProperties.clusterType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sparkVersion: {
        serializedName: "typeProperties.sparkVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      coreConfiguration: {
        serializedName: "typeProperties.coreConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hBaseConfiguration: {
        serializedName: "typeProperties.hBaseConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hdfsConfiguration: {
        serializedName: "typeProperties.hdfsConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      hiveConfiguration: {
        serializedName: "typeProperties.hiveConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mapReduceConfiguration: {
        serializedName: "typeProperties.mapReduceConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      oozieConfiguration: {
        serializedName: "typeProperties.oozieConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      stormConfiguration: {
        serializedName: "typeProperties.stormConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      yarnConfiguration: {
        serializedName: "typeProperties.yarnConfiguration",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      headNodeSize: {
        serializedName: "typeProperties.headNodeSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataNodeSize: {
        serializedName: "typeProperties.dataNodeSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      zookeeperNodeSize: {
        serializedName: "typeProperties.zookeeperNodeSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      scriptActions: {
        serializedName: "typeProperties.scriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScriptAction"
            }
          }
        }
      },
      virtualNetworkId: {
        serializedName: "typeProperties.virtualNetworkId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      subnetName: {
        serializedName: "typeProperties.subnetName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureDataLakeAnalyticsLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeAnalytics",
  type: {
    name: "Composite",
    className: "AzureDataLakeAnalyticsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accountName: {
        serializedName: "typeProperties.accountName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataLakeAnalyticsUri: {
        serializedName: "typeProperties.dataLakeAnalyticsUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDatabricksLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricks",
  type: {
    name: "Composite",
    className: "AzureDatabricksLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      domain: {
        serializedName: "typeProperties.domain",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      workspaceResourceId: {
        serializedName: "typeProperties.workspaceResourceId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      existingClusterId: {
        serializedName: "typeProperties.existingClusterId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      instancePoolId: {
        serializedName: "typeProperties.instancePoolId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterVersion: {
        serializedName: "typeProperties.newClusterVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterNumOfWorker: {
        serializedName: "typeProperties.newClusterNumOfWorker",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterNodeType: {
        serializedName: "typeProperties.newClusterNodeType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterSparkConf: {
        serializedName: "typeProperties.newClusterSparkConf",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      newClusterSparkEnvVars: {
        serializedName: "typeProperties.newClusterSparkEnvVars",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      newClusterCustomTags: {
        serializedName: "typeProperties.newClusterCustomTags",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      newClusterLogDestination: {
        serializedName: "typeProperties.newClusterLogDestination",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterDriverNodeType: {
        serializedName: "typeProperties.newClusterDriverNodeType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterInitScripts: {
        serializedName: "typeProperties.newClusterInitScripts",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterEnableElasticDisk: {
        serializedName: "typeProperties.newClusterEnableElasticDisk",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      policyId: {
        serializedName: "typeProperties.policyId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLake",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      domain: {
        serializedName: "typeProperties.domain",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clusterId: {
        serializedName: "typeProperties.clusterId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ResponsysLinkedService: coreClient.CompositeMapper = {
  serializedName: "Responsys",
  type: {
    name: "Composite",
    className: "ResponsysLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsAXLinkedService: coreClient.CompositeMapper = {
  serializedName: "DynamicsAX",
  type: {
    name: "Composite",
    className: "DynamicsAXLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleServiceCloudLinkedService: coreClient.CompositeMapper = {
  serializedName: "OracleServiceCloud",
  type: {
    name: "Composite",
    className: "OracleServiceCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleAdWordsLinkedService: coreClient.CompositeMapper = {
  serializedName: "GoogleAdWords",
  type: {
    name: "Composite",
    className: "GoogleAdWordsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientCustomerID: {
        serializedName: "typeProperties.clientCustomerID",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      developerToken: {
        serializedName: "typeProperties.developerToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      email: {
        serializedName: "typeProperties.email",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      keyFilePath: {
        serializedName: "typeProperties.keyFilePath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapTableLinkedService: coreClient.CompositeMapper = {
  serializedName: "SapTable",
  type: {
    name: "Composite",
    className: "SapTableLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      language: {
        serializedName: "typeProperties.language",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      systemId: {
        serializedName: "typeProperties.systemId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      messageServer: {
        serializedName: "typeProperties.messageServer",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      messageServerService: {
        serializedName: "typeProperties.messageServerService",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sncMode: {
        serializedName: "typeProperties.sncMode",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sncMyName: {
        serializedName: "typeProperties.sncMyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sncPartnerName: {
        serializedName: "typeProperties.sncPartnerName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sncLibraryPath: {
        serializedName: "typeProperties.sncLibraryPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sncQop: {
        serializedName: "typeProperties.sncQop",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      logonGroup: {
        serializedName: "typeProperties.logonGroup",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataExplorerLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureDataExplorer",
  type: {
    name: "Composite",
    className: "AzureDataExplorerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      }
    }
  }
};

export const AzureFunctionLinkedService: coreClient.CompositeMapper = {
  serializedName: "AzureFunction",
  type: {
    name: "Composite",
    className: "AzureFunctionLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      functionAppUrl: {
        serializedName: "typeProperties.functionAppUrl",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      functionKey: {
        serializedName: "typeProperties.functionKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "CredentialReference"
        }
      },
      resourceId: {
        serializedName: "typeProperties.resourceId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SnowflakeLinkedService: coreClient.CompositeMapper = {
  serializedName: "Snowflake",
  type: {
    name: "Composite",
    className: "SnowflakeLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SharePointOnlineListLinkedService: coreClient.CompositeMapper = {
  serializedName: "SharePointOnlineList",
  type: {
    name: "Composite",
    className: "SharePointOnlineListLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      siteUrl: {
        serializedName: "typeProperties.siteUrl",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tenantId: {
        serializedName: "typeProperties.tenantId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonS3Dataset: coreClient.CompositeMapper = {
  serializedName: "AmazonS3Object",
  type: {
    name: "Composite",
    className: "AmazonS3Dataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      bucketName: {
        serializedName: "typeProperties.bucketName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      key: {
        serializedName: "typeProperties.key",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "typeProperties.prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "typeProperties.version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "typeProperties.modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "typeProperties.modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AvroDataset: coreClient.CompositeMapper = {
  serializedName: "Avro",
  type: {
    name: "Composite",
    className: "AvroDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      avroCompressionCodec: {
        serializedName: "typeProperties.avroCompressionCodec",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      avroCompressionLevel: {
        constraints: {
          InclusiveMaximum: 9,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.avroCompressionLevel",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ExcelDataset: coreClient.CompositeMapper = {
  serializedName: "Excel",
  type: {
    name: "Composite",
    className: "ExcelDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      sheetName: {
        serializedName: "typeProperties.sheetName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sheetIndex: {
        serializedName: "typeProperties.sheetIndex",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      range: {
        serializedName: "typeProperties.range",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      firstRowAsHeader: {
        serializedName: "typeProperties.firstRowAsHeader",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      },
      nullValue: {
        serializedName: "typeProperties.nullValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ParquetDataset: coreClient.CompositeMapper = {
  serializedName: "Parquet",
  type: {
    name: "Composite",
    className: "ParquetDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      compressionCodec: {
        serializedName: "typeProperties.compressionCodec",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DelimitedTextDataset: coreClient.CompositeMapper = {
  serializedName: "DelimitedText",
  type: {
    name: "Composite",
    className: "DelimitedTextDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      columnDelimiter: {
        serializedName: "typeProperties.columnDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rowDelimiter: {
        serializedName: "typeProperties.rowDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encodingName: {
        serializedName: "typeProperties.encodingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compressionCodec: {
        serializedName: "typeProperties.compressionCodec",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compressionLevel: {
        serializedName: "typeProperties.compressionLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      quoteChar: {
        serializedName: "typeProperties.quoteChar",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      escapeChar: {
        serializedName: "typeProperties.escapeChar",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      firstRowAsHeader: {
        serializedName: "typeProperties.firstRowAsHeader",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      nullValue: {
        serializedName: "typeProperties.nullValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JsonDataset: coreClient.CompositeMapper = {
  serializedName: "Json",
  type: {
    name: "Composite",
    className: "JsonDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      encodingName: {
        serializedName: "typeProperties.encodingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const XmlDataset: coreClient.CompositeMapper = {
  serializedName: "Xml",
  type: {
    name: "Composite",
    className: "XmlDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      encodingName: {
        serializedName: "typeProperties.encodingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      nullValue: {
        serializedName: "typeProperties.nullValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const OrcDataset: coreClient.CompositeMapper = {
  serializedName: "Orc",
  type: {
    name: "Composite",
    className: "OrcDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      orcCompressionCodec: {
        serializedName: "typeProperties.orcCompressionCodec",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const BinaryDataset: coreClient.CompositeMapper = {
  serializedName: "Binary",
  type: {
    name: "Composite",
    className: "BinaryDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AzureBlobDataset: coreClient.CompositeMapper = {
  serializedName: "AzureBlob",
  type: {
    name: "Composite",
    className: "AzureBlobDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tableRootLocation: {
        serializedName: "typeProperties.tableRootLocation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileName: {
        serializedName: "typeProperties.fileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "typeProperties.modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "typeProperties.modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AzureTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureTable",
  type: {
    name: "Composite",
    className: "AzureTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSqlTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureSqlTable",
  type: {
    name: "Composite",
    className: "AzureSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSqlMITableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureSqlMITable",
  type: {
    name: "Composite",
    className: "AzureSqlMITableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSqlDWTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureSqlDWTable",
  type: {
    name: "Composite",
    className: "AzureSqlDWTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CassandraTableDataset: coreClient.CompositeMapper = {
  serializedName: "CassandraTable",
  type: {
    name: "Composite",
    className: "CassandraTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      keyspace: {
        serializedName: "typeProperties.keyspace",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CustomDataset: coreClient.CompositeMapper = {
  serializedName: "CustomDataset",
  type: {
    name: "Composite",
    className: "CustomDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbSqlApiCollectionDataset: coreClient.CompositeMapper = {
  serializedName: "CosmosDbSqlApiCollection",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DocumentDbCollectionDataset: coreClient.CompositeMapper = {
  serializedName: "DocumentDbCollection",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsEntityDataset: coreClient.CompositeMapper = {
  serializedName: "DynamicsEntity",
  type: {
    name: "Composite",
    className: "DynamicsEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsCrmEntityDataset: coreClient.CompositeMapper = {
  serializedName: "DynamicsCrmEntity",
  type: {
    name: "Composite",
    className: "DynamicsCrmEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CommonDataServiceForAppsEntityDataset: coreClient.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsEntity",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreDataset: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreFile",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileName: {
        serializedName: "typeProperties.fileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AzureBlobFSDataset: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSFile",
  type: {
    name: "Composite",
    className: "AzureBlobFSDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileName: {
        serializedName: "typeProperties.fileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const Office365Dataset: coreClient.CompositeMapper = {
  serializedName: "Office365Table",
  type: {
    name: "Composite",
    className: "Office365Dataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      predicate: {
        serializedName: "typeProperties.predicate",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileShareDataset: coreClient.CompositeMapper = {
  serializedName: "FileShare",
  type: {
    name: "Composite",
    className: "FileShareDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileName: {
        serializedName: "typeProperties.fileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "typeProperties.modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "typeProperties.modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      fileFilter: {
        serializedName: "typeProperties.fileFilter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const MongoDbCollectionDataset: coreClient.CompositeMapper = {
  serializedName: "MongoDbCollection",
  type: {
    name: "Composite",
    className: "MongoDbCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbAtlasCollectionDataset: coreClient.CompositeMapper = {
  serializedName: "MongoDbAtlasCollection",
  type: {
    name: "Composite",
    className: "MongoDbAtlasCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collection: {
        serializedName: "typeProperties.collection",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbV2CollectionDataset: coreClient.CompositeMapper = {
  serializedName: "MongoDbV2Collection",
  type: {
    name: "Composite",
    className: "MongoDbV2CollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collection: {
        serializedName: "typeProperties.collection",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiCollectionDataset: coreClient.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiCollection",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collection: {
        serializedName: "typeProperties.collection",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ODataResourceDataset: coreClient.CompositeMapper = {
  serializedName: "ODataResource",
  type: {
    name: "Composite",
    className: "ODataResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleTableDataset: coreClient.CompositeMapper = {
  serializedName: "OracleTable",
  type: {
    name: "Composite",
    className: "OracleTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRdsForOracleTableDataset: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForOracleTable",
  type: {
    name: "Composite",
    className: "AmazonRdsForOracleTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TeradataTableDataset: coreClient.CompositeMapper = {
  serializedName: "TeradataTable",
  type: {
    name: "Composite",
    className: "TeradataTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMySqlTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureMySqlTable",
  type: {
    name: "Composite",
    className: "AzureMySqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRedshiftTableDataset: coreClient.CompositeMapper = {
  serializedName: "AmazonRedshiftTable",
  type: {
    name: "Composite",
    className: "AmazonRedshiftTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Db2TableDataset: coreClient.CompositeMapper = {
  serializedName: "Db2Table",
  type: {
    name: "Composite",
    className: "Db2TableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RelationalTableDataset: coreClient.CompositeMapper = {
  serializedName: "RelationalTable",
  type: {
    name: "Composite",
    className: "RelationalTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InformixTableDataset: coreClient.CompositeMapper = {
  serializedName: "InformixTable",
  type: {
    name: "Composite",
    className: "InformixTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OdbcTableDataset: coreClient.CompositeMapper = {
  serializedName: "OdbcTable",
  type: {
    name: "Composite",
    className: "OdbcTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MySqlTableDataset: coreClient.CompositeMapper = {
  serializedName: "MySqlTable",
  type: {
    name: "Composite",
    className: "MySqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PostgreSqlTableDataset: coreClient.CompositeMapper = {
  serializedName: "PostgreSqlTable",
  type: {
    name: "Composite",
    className: "PostgreSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MicrosoftAccessTableDataset: coreClient.CompositeMapper = {
  serializedName: "MicrosoftAccessTable",
  type: {
    name: "Composite",
    className: "MicrosoftAccessTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceObjectDataset: coreClient.CompositeMapper = {
  serializedName: "SalesforceObject",
  type: {
    name: "Composite",
    className: "SalesforceObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      objectApiName: {
        serializedName: "typeProperties.objectApiName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceServiceCloudObjectDataset: coreClient.CompositeMapper = {
  serializedName: "SalesforceServiceCloudObject",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      objectApiName: {
        serializedName: "typeProperties.objectApiName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SybaseTableDataset: coreClient.CompositeMapper = {
  serializedName: "SybaseTable",
  type: {
    name: "Composite",
    className: "SybaseTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapBwCubeDataset: coreClient.CompositeMapper = {
  serializedName: "SapBwCube",
  type: {
    name: "Composite",
    className: "SapBwCubeDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties
    }
  }
};

export const SapCloudForCustomerResourceDataset: coreClient.CompositeMapper = {
  serializedName: "SapCloudForCustomerResource",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapEccResourceDataset: coreClient.CompositeMapper = {
  serializedName: "SapEccResource",
  type: {
    name: "Composite",
    className: "SapEccResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapHanaTableDataset: coreClient.CompositeMapper = {
  serializedName: "SapHanaTable",
  type: {
    name: "Composite",
    className: "SapHanaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapOpenHubTableDataset: coreClient.CompositeMapper = {
  serializedName: "SapOpenHubTable",
  type: {
    name: "Composite",
    className: "SapOpenHubTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      openHubDestinationName: {
        serializedName: "typeProperties.openHubDestinationName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      excludeLastRequest: {
        serializedName: "typeProperties.excludeLastRequest",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      baseRequestId: {
        serializedName: "typeProperties.baseRequestId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SqlServerTableDataset: coreClient.CompositeMapper = {
  serializedName: "SqlServerTable",
  type: {
    name: "Composite",
    className: "SqlServerTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRdsForSqlServerTableDataset: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForSqlServerTable",
  type: {
    name: "Composite",
    className: "AmazonRdsForSqlServerTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RestResourceDataset: coreClient.CompositeMapper = {
  serializedName: "RestResource",
  type: {
    name: "Composite",
    className: "RestResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      relativeUrl: {
        serializedName: "typeProperties.relativeUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestMethod: {
        serializedName: "typeProperties.requestMethod",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestBody: {
        serializedName: "typeProperties.requestBody",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalHeaders: {
        serializedName: "typeProperties.additionalHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      paginationRules: {
        serializedName: "typeProperties.paginationRules",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapTableResourceDataset: coreClient.CompositeMapper = {
  serializedName: "SapTableResource",
  type: {
    name: "Composite",
    className: "SapTableResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WebTableDataset: coreClient.CompositeMapper = {
  serializedName: "WebTable",
  type: {
    name: "Composite",
    className: "WebTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      index: {
        serializedName: "typeProperties.index",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      path: {
        serializedName: "typeProperties.path",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureSearchIndexDataset: coreClient.CompositeMapper = {
  serializedName: "AzureSearchIndex",
  type: {
    name: "Composite",
    className: "AzureSearchIndexDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      indexName: {
        serializedName: "typeProperties.indexName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HttpDataset: coreClient.CompositeMapper = {
  serializedName: "HttpFile",
  type: {
    name: "Composite",
    className: "HttpDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      relativeUrl: {
        serializedName: "typeProperties.relativeUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestMethod: {
        serializedName: "typeProperties.requestMethod",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestBody: {
        serializedName: "typeProperties.requestBody",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalHeaders: {
        serializedName: "typeProperties.additionalHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      format: {
        serializedName: "typeProperties.format",
        type: {
          name: "Composite",
          className: "DatasetStorageFormat"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AmazonMWSObjectDataset: coreClient.CompositeMapper = {
  serializedName: "AmazonMWSObject",
  type: {
    name: "Composite",
    className: "AmazonMWSObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzurePostgreSqlTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzurePostgreSqlTable",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ConcurObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ConcurObject",
  type: {
    name: "Composite",
    className: "ConcurObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CouchbaseTableDataset: coreClient.CompositeMapper = {
  serializedName: "CouchbaseTable",
  type: {
    name: "Composite",
    className: "CouchbaseTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DrillTableDataset: coreClient.CompositeMapper = {
  serializedName: "DrillTable",
  type: {
    name: "Composite",
    className: "DrillTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const EloquaObjectDataset: coreClient.CompositeMapper = {
  serializedName: "EloquaObject",
  type: {
    name: "Composite",
    className: "EloquaObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleBigQueryObjectDataset: coreClient.CompositeMapper = {
  serializedName: "GoogleBigQueryObject",
  type: {
    name: "Composite",
    className: "GoogleBigQueryObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GreenplumTableDataset: coreClient.CompositeMapper = {
  serializedName: "GreenplumTable",
  type: {
    name: "Composite",
    className: "GreenplumTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HBaseObjectDataset: coreClient.CompositeMapper = {
  serializedName: "HBaseObject",
  type: {
    name: "Composite",
    className: "HBaseObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HiveObjectDataset: coreClient.CompositeMapper = {
  serializedName: "HiveObject",
  type: {
    name: "Composite",
    className: "HiveObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HubspotObjectDataset: coreClient.CompositeMapper = {
  serializedName: "HubspotObject",
  type: {
    name: "Composite",
    className: "HubspotObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ImpalaObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ImpalaObject",
  type: {
    name: "Composite",
    className: "ImpalaObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JiraObjectDataset: coreClient.CompositeMapper = {
  serializedName: "JiraObject",
  type: {
    name: "Composite",
    className: "JiraObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MagentoObjectDataset: coreClient.CompositeMapper = {
  serializedName: "MagentoObject",
  type: {
    name: "Composite",
    className: "MagentoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MariaDBTableDataset: coreClient.CompositeMapper = {
  serializedName: "MariaDBTable",
  type: {
    name: "Composite",
    className: "MariaDBTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMariaDBTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureMariaDBTable",
  type: {
    name: "Composite",
    className: "AzureMariaDBTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MarketoObjectDataset: coreClient.CompositeMapper = {
  serializedName: "MarketoObject",
  type: {
    name: "Composite",
    className: "MarketoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PaypalObjectDataset: coreClient.CompositeMapper = {
  serializedName: "PaypalObject",
  type: {
    name: "Composite",
    className: "PaypalObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PhoenixObjectDataset: coreClient.CompositeMapper = {
  serializedName: "PhoenixObject",
  type: {
    name: "Composite",
    className: "PhoenixObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PrestoObjectDataset: coreClient.CompositeMapper = {
  serializedName: "PrestoObject",
  type: {
    name: "Composite",
    className: "PrestoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const QuickBooksObjectDataset: coreClient.CompositeMapper = {
  serializedName: "QuickBooksObject",
  type: {
    name: "Composite",
    className: "QuickBooksObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ServiceNowObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ServiceNowObject",
  type: {
    name: "Composite",
    className: "ServiceNowObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ShopifyObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ShopifyObject",
  type: {
    name: "Composite",
    className: "ShopifyObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SparkObjectDataset: coreClient.CompositeMapper = {
  serializedName: "SparkObject",
  type: {
    name: "Composite",
    className: "SparkObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SquareObjectDataset: coreClient.CompositeMapper = {
  serializedName: "SquareObject",
  type: {
    name: "Composite",
    className: "SquareObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const XeroObjectDataset: coreClient.CompositeMapper = {
  serializedName: "XeroObject",
  type: {
    name: "Composite",
    className: "XeroObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ZohoObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ZohoObject",
  type: {
    name: "Composite",
    className: "ZohoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const NetezzaTableDataset: coreClient.CompositeMapper = {
  serializedName: "NetezzaTable",
  type: {
    name: "Composite",
    className: "NetezzaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const VerticaTableDataset: coreClient.CompositeMapper = {
  serializedName: "VerticaTable",
  type: {
    name: "Composite",
    className: "VerticaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceMarketingCloudObjectDataset: coreClient.CompositeMapper = {
  serializedName: "SalesforceMarketingCloudObject",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ResponsysObjectDataset: coreClient.CompositeMapper = {
  serializedName: "ResponsysObject",
  type: {
    name: "Composite",
    className: "ResponsysObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsAXResourceDataset: coreClient.CompositeMapper = {
  serializedName: "DynamicsAXResource",
  type: {
    name: "Composite",
    className: "DynamicsAXResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleServiceCloudObjectDataset: coreClient.CompositeMapper = {
  serializedName: "OracleServiceCloudObject",
  type: {
    name: "Composite",
    className: "OracleServiceCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataExplorerTableDataset: coreClient.CompositeMapper = {
  serializedName: "AzureDataExplorerTable",
  type: {
    name: "Composite",
    className: "AzureDataExplorerTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleAdWordsObjectDataset: coreClient.CompositeMapper = {
  serializedName: "GoogleAdWordsObject",
  type: {
    name: "Composite",
    className: "GoogleAdWordsObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SnowflakeDataset: coreClient.CompositeMapper = {
  serializedName: "SnowflakeTable",
  type: {
    name: "Composite",
    className: "SnowflakeDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SharePointOnlineListResourceDataset: coreClient.CompositeMapper = {
  serializedName: "SharePointOnlineListResource",
  type: {
    name: "Composite",
    className: "SharePointOnlineListResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      listName: {
        serializedName: "typeProperties.listName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeDataset: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLakeDataset",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ControlActivity: coreClient.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "ControlActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Activity.type.modelProperties
    }
  }
};

export const ExecutionActivity: coreClient.CompositeMapper = {
  serializedName: "Execution",
  type: {
    name: "Composite",
    className: "ExecutionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Activity.type.modelProperties,
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      policy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "ActivityPolicy"
        }
      }
    }
  }
};

export const ExecuteWranglingDataflowActivity: coreClient.CompositeMapper = {
  serializedName: "ExecuteWranglingDataflow",
  type: {
    name: "Composite",
    className: "ExecuteWranglingDataflowActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...Activity.type.modelProperties,
      policy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "ActivityPolicy"
        }
      },
      dataFlow: {
        serializedName: "typeProperties.dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowReference"
        }
      },
      staging: {
        serializedName: "typeProperties.staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      integrationRuntime: {
        serializedName: "typeProperties.integrationRuntime",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      compute: {
        serializedName: "typeProperties.compute",
        type: {
          name: "Composite",
          className: "ExecuteDataFlowActivityTypePropertiesCompute"
        }
      },
      traceLevel: {
        serializedName: "typeProperties.traceLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      continueOnError: {
        serializedName: "typeProperties.continueOnError",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      runConcurrently: {
        serializedName: "typeProperties.runConcurrently",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sinks: {
        serializedName: "typeProperties.sinks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "PowerQuerySink" } }
        }
      },
      queries: {
        serializedName: "typeProperties.queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PowerQuerySinkMapping"
            }
          }
        }
      }
    }
  }
};

export const MultiplePipelineTrigger: coreClient.CompositeMapper = {
  serializedName: "MultiplePipelineTrigger",
  type: {
    name: "Composite",
    className: "MultiplePipelineTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipelines: {
        serializedName: "pipelines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerPipelineReference"
            }
          }
        }
      }
    }
  }
};

export const TumblingWindowTrigger: coreClient.CompositeMapper = {
  serializedName: "TumblingWindowTrigger",
  type: {
    name: "Composite",
    className: "TumblingWindowTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipeline: {
        serializedName: "pipeline",
        type: {
          name: "Composite",
          className: "TriggerPipelineReference"
        }
      },
      frequency: {
        serializedName: "typeProperties.frequency",
        required: true,
        type: {
          name: "String"
        }
      },
      interval: {
        serializedName: "typeProperties.interval",
        required: true,
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "typeProperties.startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "typeProperties.endTime",
        type: {
          name: "DateTime"
        }
      },
      delay: {
        serializedName: "typeProperties.delay",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxConcurrency: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      },
      retryPolicy: {
        serializedName: "typeProperties.retryPolicy",
        type: {
          name: "Composite",
          className: "RetryPolicy"
        }
      },
      dependsOn: {
        serializedName: "typeProperties.dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DependencyReference"
            }
          }
        }
      }
    }
  }
};

export const RerunTumblingWindowTrigger: coreClient.CompositeMapper = {
  serializedName: "RerunTumblingWindowTrigger",
  type: {
    name: "Composite",
    className: "RerunTumblingWindowTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      parentTrigger: {
        serializedName: "typeProperties.parentTrigger",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestedStartTime: {
        serializedName: "typeProperties.requestedStartTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      requestedEndTime: {
        serializedName: "typeProperties.requestedEndTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      rerunConcurrency: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.rerunConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ChainingTrigger: coreClient.CompositeMapper = {
  serializedName: "ChainingTrigger",
  type: {
    name: "Composite",
    className: "ChainingTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipeline: {
        serializedName: "pipeline",
        type: {
          name: "Composite",
          className: "TriggerPipelineReference"
        }
      },
      dependsOn: {
        serializedName: "typeProperties.dependsOn",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineReference"
            }
          }
        }
      },
      runDimension: {
        serializedName: "typeProperties.runDimension",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MappingDataFlow: coreClient.CompositeMapper = {
  serializedName: "MappingDataFlow",
  type: {
    name: "Composite",
    className: "MappingDataFlow",
    uberParent: "DataFlow",
    polymorphicDiscriminator: DataFlow.type.polymorphicDiscriminator,
    modelProperties: {
      ...DataFlow.type.modelProperties,
      sources: {
        serializedName: "typeProperties.sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSource"
            }
          }
        }
      },
      sinks: {
        serializedName: "typeProperties.sinks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSink"
            }
          }
        }
      },
      transformations: {
        serializedName: "typeProperties.transformations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Transformation"
            }
          }
        }
      },
      script: {
        serializedName: "typeProperties.script",
        type: {
          name: "String"
        }
      },
      scriptLines: {
        serializedName: "typeProperties.scriptLines",
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

export const Flowlet: coreClient.CompositeMapper = {
  serializedName: "Flowlet",
  type: {
    name: "Composite",
    className: "Flowlet",
    uberParent: "DataFlow",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DataFlow.type.polymorphicDiscriminator,
    modelProperties: {
      ...DataFlow.type.modelProperties,
      sources: {
        serializedName: "typeProperties.sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSource"
            }
          }
        }
      },
      sinks: {
        serializedName: "typeProperties.sinks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSink"
            }
          }
        }
      },
      transformations: {
        serializedName: "typeProperties.transformations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Transformation"
            }
          }
        }
      },
      script: {
        serializedName: "typeProperties.script",
        type: {
          name: "String"
        }
      },
      scriptLines: {
        serializedName: "typeProperties.scriptLines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      additionalProperties: {
        serializedName: "typeProperties.additionalProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WranglingDataFlow: coreClient.CompositeMapper = {
  serializedName: "WranglingDataFlow",
  type: {
    name: "Composite",
    className: "WranglingDataFlow",
    uberParent: "DataFlow",
    polymorphicDiscriminator: DataFlow.type.polymorphicDiscriminator,
    modelProperties: {
      ...DataFlow.type.modelProperties,
      sources: {
        serializedName: "typeProperties.sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PowerQuerySource"
            }
          }
        }
      },
      script: {
        serializedName: "typeProperties.script",
        type: {
          name: "String"
        }
      },
      documentLocale: {
        serializedName: "typeProperties.documentLocale",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeDebugResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IntegrationRuntime"
        }
      }
    }
  }
};

export const DataFlowDebugResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DataFlow"
        }
      }
    }
  }
};

export const DatasetDebugResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Dataset"
        }
      }
    }
  }
};

export const LinkedServiceDebugResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LinkedService"
        }
      }
    }
  }
};

export const SecureString: coreClient.CompositeMapper = {
  serializedName: "SecureString",
  type: {
    name: "Composite",
    className: "SecureString",
    uberParent: "SecretBase",
    polymorphicDiscriminator: SecretBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretBase.type.modelProperties,
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureKeyVaultSecretReference: coreClient.CompositeMapper = {
  serializedName: "AzureKeyVaultSecret",
  type: {
    name: "Composite",
    className: "AzureKeyVaultSecretReference",
    uberParent: "SecretBase",
    polymorphicDiscriminator: SecretBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretBase.type.modelProperties,
      store: {
        serializedName: "store",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      secretName: {
        serializedName: "secretName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      secretVersion: {
        serializedName: "secretVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ServicePrincipalCredential: coreClient.CompositeMapper = {
  serializedName: "ServicePrincipal",
  type: {
    name: "Composite",
    className: "ServicePrincipalCredential",
    uberParent: "Credential",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Credential.type.polymorphicDiscriminator,
    modelProperties: {
      ...Credential.type.modelProperties,
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ManagedIdentityCredential: coreClient.CompositeMapper = {
  serializedName: "ManagedIdentity",
  type: {
    name: "Composite",
    className: "ManagedIdentityCredential",
    uberParent: "Credential",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Credential.type.polymorphicDiscriminator,
    modelProperties: {
      ...Credential.type.modelProperties,
      resourceId: {
        serializedName: "typeProperties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowSource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSource",
    modelProperties: {
      ...Transformation.type.modelProperties,
      dataset: {
        serializedName: "dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      linkedService: {
        serializedName: "linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      schemaLinkedService: {
        serializedName: "schemaLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const DataFlowSink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSink",
    modelProperties: {
      ...Transformation.type.modelProperties,
      dataset: {
        serializedName: "dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      linkedService: {
        serializedName: "linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      schemaLinkedService: {
        serializedName: "schemaLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const AzureBlobStorageLocation: coreClient.CompositeMapper = {
  serializedName: "AzureBlobStorageLocation",
  type: {
    name: "Composite",
    className: "AzureBlobStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      container: {
        serializedName: "container",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobFSLocation: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSLocation",
  type: {
    name: "Composite",
    className: "AzureBlobFSLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      fileSystem: {
        serializedName: "fileSystem",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreLocation: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreLocation",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const AmazonS3Location: coreClient.CompositeMapper = {
  serializedName: "AmazonS3Location",
  type: {
    name: "Composite",
    className: "AmazonS3Location",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileServerLocation: coreClient.CompositeMapper = {
  serializedName: "FileServerLocation",
  type: {
    name: "Composite",
    className: "FileServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const AzureFileStorageLocation: coreClient.CompositeMapper = {
  serializedName: "AzureFileStorageLocation",
  type: {
    name: "Composite",
    className: "AzureFileStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const AmazonS3CompatibleLocation: coreClient.CompositeMapper = {
  serializedName: "AmazonS3CompatibleLocation",
  type: {
    name: "Composite",
    className: "AmazonS3CompatibleLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleCloudStorageLocation: coreClient.CompositeMapper = {
  serializedName: "OracleCloudStorageLocation",
  type: {
    name: "Composite",
    className: "OracleCloudStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleCloudStorageLocation: coreClient.CompositeMapper = {
  serializedName: "GoogleCloudStorageLocation",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FtpServerLocation: coreClient.CompositeMapper = {
  serializedName: "FtpServerLocation",
  type: {
    name: "Composite",
    className: "FtpServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const SftpLocation: coreClient.CompositeMapper = {
  serializedName: "SftpLocation",
  type: {
    name: "Composite",
    className: "SftpLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const HttpServerLocation: coreClient.CompositeMapper = {
  serializedName: "HttpServerLocation",
  type: {
    name: "Composite",
    className: "HttpServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      relativeUrl: {
        serializedName: "relativeUrl",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HdfsLocation: coreClient.CompositeMapper = {
  serializedName: "HdfsLocation",
  type: {
    name: "Composite",
    className: "HdfsLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const TextFormat: coreClient.CompositeMapper = {
  serializedName: "TextFormat",
  type: {
    name: "Composite",
    className: "TextFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties,
      columnDelimiter: {
        serializedName: "columnDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rowDelimiter: {
        serializedName: "rowDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      escapeChar: {
        serializedName: "escapeChar",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      quoteChar: {
        serializedName: "quoteChar",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      nullValue: {
        serializedName: "nullValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encodingName: {
        serializedName: "encodingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      skipLineCount: {
        serializedName: "skipLineCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      firstRowAsHeader: {
        serializedName: "firstRowAsHeader",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JsonFormat: coreClient.CompositeMapper = {
  serializedName: "JsonFormat",
  type: {
    name: "Composite",
    className: "JsonFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties,
      filePattern: {
        serializedName: "filePattern",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      encodingName: {
        serializedName: "encodingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      jsonNodeReference: {
        serializedName: "jsonNodeReference",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      jsonPathDefinition: {
        serializedName: "jsonPathDefinition",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AvroFormat: coreClient.CompositeMapper = {
  serializedName: "AvroFormat",
  type: {
    name: "Composite",
    className: "AvroFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const OrcFormat: coreClient.CompositeMapper = {
  serializedName: "OrcFormat",
  type: {
    name: "Composite",
    className: "OrcFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const ParquetFormat: coreClient.CompositeMapper = {
  serializedName: "ParquetFormat",
  type: {
    name: "Composite",
    className: "ParquetFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const DatasetBZip2Compression: coreClient.CompositeMapper = {
  serializedName: "BZip2",
  type: {
    name: "Composite",
    className: "DatasetBZip2Compression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties
    }
  }
};

export const DatasetGZipCompression: coreClient.CompositeMapper = {
  serializedName: "GZip",
  type: {
    name: "Composite",
    className: "DatasetGZipCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetDeflateCompression: coreClient.CompositeMapper = {
  serializedName: "Deflate",
  type: {
    name: "Composite",
    className: "DatasetDeflateCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetZipDeflateCompression: coreClient.CompositeMapper = {
  serializedName: "ZipDeflate",
  type: {
    name: "Composite",
    className: "DatasetZipDeflateCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetTarCompression: coreClient.CompositeMapper = {
  serializedName: "Tar",
  type: {
    name: "Composite",
    className: "DatasetTarCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties
    }
  }
};

export const DatasetTarGZipCompression: coreClient.CompositeMapper = {
  serializedName: "TarGZip",
  type: {
    name: "Composite",
    className: "DatasetTarGZipCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CmdkeySetup: coreClient.CompositeMapper = {
  serializedName: "CmdkeySetup",
  type: {
    name: "Composite",
    className: "CmdkeySetup",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: CustomSetupBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...CustomSetupBase.type.modelProperties,
      targetName: {
        serializedName: "typeProperties.targetName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const EnvironmentVariableSetup: coreClient.CompositeMapper = {
  serializedName: "EnvironmentVariableSetup",
  type: {
    name: "Composite",
    className: "EnvironmentVariableSetup",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: CustomSetupBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...CustomSetupBase.type.modelProperties,
      variableName: {
        serializedName: "typeProperties.variableName",
        required: true,
        type: {
          name: "String"
        }
      },
      variableValue: {
        serializedName: "typeProperties.variableValue",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComponentSetup: coreClient.CompositeMapper = {
  serializedName: "ComponentSetup",
  type: {
    name: "Composite",
    className: "ComponentSetup",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: CustomSetupBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...CustomSetupBase.type.modelProperties,
      componentName: {
        serializedName: "typeProperties.componentName",
        required: true,
        type: {
          name: "String"
        }
      },
      licenseKey: {
        serializedName: "typeProperties.licenseKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const AzPowerShellSetup: coreClient.CompositeMapper = {
  serializedName: "AzPowerShellSetup",
  type: {
    name: "Composite",
    className: "AzPowerShellSetup",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: CustomSetupBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...CustomSetupBase.type.modelProperties,
      version: {
        serializedName: "typeProperties.version",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeKeyAuthorization: coreClient.CompositeMapper = {
  serializedName: "Key",
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeKeyAuthorization",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator:
      LinkedIntegrationRuntimeType.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedIntegrationRuntimeType.type.modelProperties,
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeRbacAuthorization: coreClient.CompositeMapper = {
  serializedName: "RBAC",
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeRbacAuthorization",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator:
      LinkedIntegrationRuntimeType.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedIntegrationRuntimeType.type.modelProperties,
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebAnonymousAuthentication: coreClient.CompositeMapper = {
  serializedName: "Anonymous",
  type: {
    name: "Composite",
    className: "WebAnonymousAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator:
      WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties
    }
  }
};

export const WebBasicAuthentication: coreClient.CompositeMapper = {
  serializedName: "Basic",
  type: {
    name: "Composite",
    className: "WebBasicAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator:
      WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties,
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const WebClientCertificateAuthentication: coreClient.CompositeMapper = {
  serializedName: "ClientCertificate",
  type: {
    name: "Composite",
    className: "WebClientCertificateAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator:
      WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties,
      pfx: {
        serializedName: "pfx",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const AzureBlobStorageReadSettings: coreClient.CompositeMapper = {
  serializedName: "AzureBlobStorageReadSettings",
  type: {
    name: "Composite",
    className: "AzureBlobStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobFSReadSettings: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSReadSettings",
  type: {
    name: "Composite",
    className: "AzureBlobFSReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreReadSettings: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreReadSettings",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      listAfter: {
        serializedName: "listAfter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      listBefore: {
        serializedName: "listBefore",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonS3ReadSettings: coreClient.CompositeMapper = {
  serializedName: "AmazonS3ReadSettings",
  type: {
    name: "Composite",
    className: "AmazonS3ReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileServerReadSettings: coreClient.CompositeMapper = {
  serializedName: "FileServerReadSettings",
  type: {
    name: "Composite",
    className: "FileServerReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileFilter: {
        serializedName: "fileFilter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureFileStorageReadSettings: coreClient.CompositeMapper = {
  serializedName: "AzureFileStorageReadSettings",
  type: {
    name: "Composite",
    className: "AzureFileStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonS3CompatibleReadSettings: coreClient.CompositeMapper = {
  serializedName: "AmazonS3CompatibleReadSettings",
  type: {
    name: "Composite",
    className: "AmazonS3CompatibleReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleCloudStorageReadSettings: coreClient.CompositeMapper = {
  serializedName: "OracleCloudStorageReadSettings",
  type: {
    name: "Composite",
    className: "OracleCloudStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleCloudStorageReadSettings: coreClient.CompositeMapper = {
  serializedName: "GoogleCloudStorageReadSettings",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FtpReadSettings: coreClient.CompositeMapper = {
  serializedName: "FtpReadSettings",
  type: {
    name: "Composite",
    className: "FtpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useBinaryTransfer: {
        serializedName: "useBinaryTransfer",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SftpReadSettings: coreClient.CompositeMapper = {
  serializedName: "SftpReadSettings",
  type: {
    name: "Composite",
    className: "SftpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HttpReadSettings: coreClient.CompositeMapper = {
  serializedName: "HttpReadSettings",
  type: {
    name: "Composite",
    className: "HttpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      requestMethod: {
        serializedName: "requestMethod",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestBody: {
        serializedName: "requestBody",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalHeaders: {
        serializedName: "additionalHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestTimeout: {
        serializedName: "requestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HdfsReadSettings: coreClient.CompositeMapper = {
  serializedName: "HdfsReadSettings",
  type: {
    name: "Composite",
    className: "HdfsReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileListPath: {
        serializedName: "fileListPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      partitionRootPath: {
        serializedName: "partitionRootPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      distcpSettings: {
        serializedName: "distcpSettings",
        type: {
          name: "Composite",
          className: "DistcpSettings"
        }
      },
      deleteFilesAfterCompletion: {
        serializedName: "deleteFilesAfterCompletion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SftpWriteSettings: coreClient.CompositeMapper = {
  serializedName: "SftpWriteSettings",
  type: {
    name: "Composite",
    className: "SftpWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      operationTimeout: {
        serializedName: "operationTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      useTempFileRename: {
        serializedName: "useTempFileRename",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobStorageWriteSettings: coreClient.CompositeMapper = {
  serializedName: "AzureBlobStorageWriteSettings",
  type: {
    name: "Composite",
    className: "AzureBlobStorageWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      blockSizeInMB: {
        serializedName: "blockSizeInMB",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobFSWriteSettings: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSWriteSettings",
  type: {
    name: "Composite",
    className: "AzureBlobFSWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      blockSizeInMB: {
        serializedName: "blockSizeInMB",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreWriteSettings: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreWriteSettings",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      expiryDateTime: {
        serializedName: "expiryDateTime",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileServerWriteSettings: coreClient.CompositeMapper = {
  serializedName: "FileServerWriteSettings",
  type: {
    name: "Composite",
    className: "FileServerWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties
    }
  }
};

export const AzureFileStorageWriteSettings: coreClient.CompositeMapper = {
  serializedName: "AzureFileStorageWriteSettings",
  type: {
    name: "Composite",
    className: "AzureFileStorageWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties
    }
  }
};

export const DelimitedTextReadSettings: coreClient.CompositeMapper = {
  serializedName: "DelimitedTextReadSettings",
  type: {
    name: "Composite",
    className: "DelimitedTextReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatReadSettings.type.modelProperties,
      skipLineCount: {
        serializedName: "skipLineCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compressionProperties: {
        serializedName: "compressionProperties",
        type: {
          name: "Composite",
          className: "CompressionReadSettings"
        }
      }
    }
  }
};

export const JsonReadSettings: coreClient.CompositeMapper = {
  serializedName: "JsonReadSettings",
  type: {
    name: "Composite",
    className: "JsonReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatReadSettings.type.modelProperties,
      compressionProperties: {
        serializedName: "compressionProperties",
        type: {
          name: "Composite",
          className: "CompressionReadSettings"
        }
      }
    }
  }
};

export const XmlReadSettings: coreClient.CompositeMapper = {
  serializedName: "XmlReadSettings",
  type: {
    name: "Composite",
    className: "XmlReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatReadSettings.type.modelProperties,
      compressionProperties: {
        serializedName: "compressionProperties",
        type: {
          name: "Composite",
          className: "CompressionReadSettings"
        }
      },
      validationMode: {
        serializedName: "validationMode",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      detectDataType: {
        serializedName: "detectDataType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      namespaces: {
        serializedName: "namespaces",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      namespacePrefixes: {
        serializedName: "namespacePrefixes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const BinaryReadSettings: coreClient.CompositeMapper = {
  serializedName: "BinaryReadSettings",
  type: {
    name: "Composite",
    className: "BinaryReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatReadSettings.type.modelProperties,
      compressionProperties: {
        serializedName: "compressionProperties",
        type: {
          name: "Composite",
          className: "CompressionReadSettings"
        }
      }
    }
  }
};

export const ZipDeflateReadSettings: coreClient.CompositeMapper = {
  serializedName: "ZipDeflateReadSettings",
  type: {
    name: "Composite",
    className: "ZipDeflateReadSettings",
    uberParent: "CompressionReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      CompressionReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...CompressionReadSettings.type.modelProperties,
      preserveZipFileNameAsFolder: {
        serializedName: "preserveZipFileNameAsFolder",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TarReadSettings: coreClient.CompositeMapper = {
  serializedName: "TarReadSettings",
  type: {
    name: "Composite",
    className: "TarReadSettings",
    uberParent: "CompressionReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      CompressionReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...CompressionReadSettings.type.modelProperties,
      preserveCompressionFileNameAsFolder: {
        serializedName: "preserveCompressionFileNameAsFolder",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TarGZipReadSettings: coreClient.CompositeMapper = {
  serializedName: "TarGZipReadSettings",
  type: {
    name: "Composite",
    className: "TarGZipReadSettings",
    uberParent: "CompressionReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator:
      CompressionReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...CompressionReadSettings.type.modelProperties,
      preserveCompressionFileNameAsFolder: {
        serializedName: "preserveCompressionFileNameAsFolder",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AvroWriteSettings: coreClient.CompositeMapper = {
  serializedName: "AvroWriteSettings",
  type: {
    name: "Composite",
    className: "AvroWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      recordName: {
        serializedName: "recordName",
        type: {
          name: "String"
        }
      },
      recordNamespace: {
        serializedName: "recordNamespace",
        type: {
          name: "String"
        }
      },
      maxRowsPerFile: {
        serializedName: "maxRowsPerFile",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileNamePrefix: {
        serializedName: "fileNamePrefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OrcWriteSettings: coreClient.CompositeMapper = {
  serializedName: "OrcWriteSettings",
  type: {
    name: "Composite",
    className: "OrcWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      maxRowsPerFile: {
        serializedName: "maxRowsPerFile",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileNamePrefix: {
        serializedName: "fileNamePrefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ParquetWriteSettings: coreClient.CompositeMapper = {
  serializedName: "ParquetWriteSettings",
  type: {
    name: "Composite",
    className: "ParquetWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      maxRowsPerFile: {
        serializedName: "maxRowsPerFile",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileNamePrefix: {
        serializedName: "fileNamePrefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DelimitedTextWriteSettings: coreClient.CompositeMapper = {
  serializedName: "DelimitedTextWriteSettings",
  type: {
    name: "Composite",
    className: "DelimitedTextWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      quoteAllText: {
        serializedName: "quoteAllText",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileExtension: {
        serializedName: "fileExtension",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxRowsPerFile: {
        serializedName: "maxRowsPerFile",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      fileNamePrefix: {
        serializedName: "fileNamePrefix",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JsonWriteSettings: coreClient.CompositeMapper = {
  serializedName: "JsonWriteSettings",
  type: {
    name: "Composite",
    className: "JsonWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      filePattern: {
        serializedName: "filePattern",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AvroSource: coreClient.CompositeMapper = {
  serializedName: "AvroSource",
  type: {
    name: "Composite",
    className: "AvroSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExcelSource: coreClient.CompositeMapper = {
  serializedName: "ExcelSource",
  type: {
    name: "Composite",
    className: "ExcelSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ParquetSource: coreClient.CompositeMapper = {
  serializedName: "ParquetSource",
  type: {
    name: "Composite",
    className: "ParquetSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DelimitedTextSource: coreClient.CompositeMapper = {
  serializedName: "DelimitedTextSource",
  type: {
    name: "Composite",
    className: "DelimitedTextSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "DelimitedTextReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JsonSource: coreClient.CompositeMapper = {
  serializedName: "JsonSource",
  type: {
    name: "Composite",
    className: "JsonSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "JsonReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const XmlSource: coreClient.CompositeMapper = {
  serializedName: "XmlSource",
  type: {
    name: "Composite",
    className: "XmlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "XmlReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OrcSource: coreClient.CompositeMapper = {
  serializedName: "OrcSource",
  type: {
    name: "Composite",
    className: "OrcSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const BinarySource: coreClient.CompositeMapper = {
  serializedName: "BinarySource",
  type: {
    name: "Composite",
    className: "BinarySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "BinaryReadSettings"
        }
      }
    }
  }
};

export const TabularSource: coreClient.CompositeMapper = {
  serializedName: "TabularSource",
  type: {
    name: "Composite",
    className: "TabularSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...CopySource.type.modelProperties,
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const BlobSource: coreClient.CompositeMapper = {
  serializedName: "BlobSource",
  type: {
    name: "Composite",
    className: "BlobSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      skipHeaderLineCount: {
        serializedName: "skipHeaderLineCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DocumentDbCollectionSource: coreClient.CompositeMapper = {
  serializedName: "DocumentDbCollectionSource",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbSqlApiSource: coreClient.CompositeMapper = {
  serializedName: "CosmosDbSqlApiSource",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      preferredRegions: {
        serializedName: "preferredRegions",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      detectDatetime: {
        serializedName: "detectDatetime",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsSource: coreClient.CompositeMapper = {
  serializedName: "DynamicsSource",
  type: {
    name: "Composite",
    className: "DynamicsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsCrmSource: coreClient.CompositeMapper = {
  serializedName: "DynamicsCrmSource",
  type: {
    name: "Composite",
    className: "DynamicsCrmSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CommonDataServiceForAppsSource: coreClient.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsSource",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RelationalSource: coreClient.CompositeMapper = {
  serializedName: "RelationalSource",
  type: {
    name: "Composite",
    className: "RelationalSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MicrosoftAccessSource: coreClient.CompositeMapper = {
  serializedName: "MicrosoftAccessSource",
  type: {
    name: "Composite",
    className: "MicrosoftAccessSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ODataSource: coreClient.CompositeMapper = {
  serializedName: "ODataSource",
  type: {
    name: "Composite",
    className: "ODataSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceServiceCloudSource: coreClient.CompositeMapper = {
  serializedName: "SalesforceServiceCloudSource",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      readBehavior: {
        serializedName: "readBehavior",
        type: {
          name: "String"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const RestSource: coreClient.CompositeMapper = {
  serializedName: "RestSource",
  type: {
    name: "Composite",
    className: "RestSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      requestMethod: {
        serializedName: "requestMethod",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestBody: {
        serializedName: "requestBody",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalHeaders: {
        serializedName: "additionalHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      paginationRules: {
        serializedName: "paginationRules",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestInterval: {
        serializedName: "requestInterval",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const FileSystemSource: coreClient.CompositeMapper = {
  serializedName: "FileSystemSource",
  type: {
    name: "Composite",
    className: "FileSystemSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HdfsSource: coreClient.CompositeMapper = {
  serializedName: "HdfsSource",
  type: {
    name: "Composite",
    className: "HdfsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      distcpSettings: {
        serializedName: "distcpSettings",
        type: {
          name: "Composite",
          className: "DistcpSettings"
        }
      }
    }
  }
};

export const AzureDataExplorerSource: coreClient.CompositeMapper = {
  serializedName: "AzureDataExplorerSource",
  type: {
    name: "Composite",
    className: "AzureDataExplorerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      noTruncation: {
        serializedName: "noTruncation",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleSource: coreClient.CompositeMapper = {
  serializedName: "OracleSource",
  type: {
    name: "Composite",
    className: "OracleSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      oracleReaderQuery: {
        serializedName: "oracleReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "OraclePartitionSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRdsForOracleSource: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForOracleSource",
  type: {
    name: "Composite",
    className: "AmazonRdsForOracleSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      oracleReaderQuery: {
        serializedName: "oracleReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "AmazonRdsForOraclePartitionSettings"
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WebSource: coreClient.CompositeMapper = {
  serializedName: "WebSource",
  type: {
    name: "Composite",
    className: "WebSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbSource: coreClient.CompositeMapper = {
  serializedName: "MongoDbSource",
  type: {
    name: "Composite",
    className: "MongoDbSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbAtlasSource: coreClient.CompositeMapper = {
  serializedName: "MongoDbAtlasSource",
  type: {
    name: "Composite",
    className: "MongoDbAtlasSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      filter: {
        serializedName: "filter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      cursorMethods: {
        serializedName: "cursorMethods",
        type: {
          name: "Composite",
          className: "MongoDbCursorMethodsProperties"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbV2Source: coreClient.CompositeMapper = {
  serializedName: "MongoDbV2Source",
  type: {
    name: "Composite",
    className: "MongoDbV2Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      filter: {
        serializedName: "filter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      cursorMethods: {
        serializedName: "cursorMethods",
        type: {
          name: "Composite",
          className: "MongoDbCursorMethodsProperties"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiSource: coreClient.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiSource",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      filter: {
        serializedName: "filter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      cursorMethods: {
        serializedName: "cursorMethods",
        type: {
          name: "Composite",
          className: "MongoDbCursorMethodsProperties"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalColumns: {
        serializedName: "additionalColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Office365Source: coreClient.CompositeMapper = {
  serializedName: "Office365Source",
  type: {
    name: "Composite",
    className: "Office365Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      allowedGroups: {
        serializedName: "allowedGroups",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      userScopeFilterUri: {
        serializedName: "userScopeFilterUri",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dateFilterColumn: {
        serializedName: "dateFilterColumn",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      outputColumns: {
        serializedName: "outputColumns",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreSource: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreSource",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobFSSource: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSSource",
  type: {
    name: "Composite",
    className: "AzureBlobFSSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      skipHeaderLineCount: {
        serializedName: "skipHeaderLineCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      recursive: {
        serializedName: "recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HttpSource: coreClient.CompositeMapper = {
  serializedName: "HttpSource",
  type: {
    name: "Composite",
    className: "HttpSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SnowflakeSource: coreClient.CompositeMapper = {
  serializedName: "SnowflakeSource",
  type: {
    name: "Composite",
    className: "SnowflakeSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      exportSettings: {
        serializedName: "exportSettings",
        type: {
          name: "Composite",
          className: "SnowflakeExportCopyCommand"
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeSource: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLakeSource",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      exportSettings: {
        serializedName: "exportSettings",
        type: {
          name: "Composite",
          className: "AzureDatabricksDeltaLakeExportCommand"
        }
      }
    }
  }
};

export const SharePointOnlineListSource: coreClient.CompositeMapper = {
  serializedName: "SharePointOnlineListSource",
  type: {
    name: "Composite",
    className: "SharePointOnlineListSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DelimitedTextSink: coreClient.CompositeMapper = {
  serializedName: "DelimitedTextSink",
  type: {
    name: "Composite",
    className: "DelimitedTextSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "DelimitedTextWriteSettings"
        }
      }
    }
  }
};

export const JsonSink: coreClient.CompositeMapper = {
  serializedName: "JsonSink",
  type: {
    name: "Composite",
    className: "JsonSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "JsonWriteSettings"
        }
      }
    }
  }
};

export const OrcSink: coreClient.CompositeMapper = {
  serializedName: "OrcSink",
  type: {
    name: "Composite",
    className: "OrcSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "OrcWriteSettings"
        }
      }
    }
  }
};

export const RestSink: coreClient.CompositeMapper = {
  serializedName: "RestSink",
  type: {
    name: "Composite",
    className: "RestSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      requestMethod: {
        serializedName: "requestMethod",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      additionalHeaders: {
        serializedName: "additionalHeaders",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      requestInterval: {
        serializedName: "requestInterval",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpCompressionType: {
        serializedName: "httpCompressionType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzurePostgreSqlSink: coreClient.CompositeMapper = {
  serializedName: "AzurePostgreSqlSink",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMySqlSink: coreClient.CompositeMapper = {
  serializedName: "AzureMySqlSink",
  type: {
    name: "Composite",
    className: "AzureMySqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeSink: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLakeSink",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      importSettings: {
        serializedName: "importSettings",
        type: {
          name: "Composite",
          className: "AzureDatabricksDeltaLakeImportCommand"
        }
      }
    }
  }
};

export const SapCloudForCustomerSink: coreClient.CompositeMapper = {
  serializedName: "SapCloudForCustomerSink",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureQueueSink: coreClient.CompositeMapper = {
  serializedName: "AzureQueueSink",
  type: {
    name: "Composite",
    className: "AzureQueueSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties
    }
  }
};

export const AzureTableSink: coreClient.CompositeMapper = {
  serializedName: "AzureTableSink",
  type: {
    name: "Composite",
    className: "AzureTableSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      azureTableDefaultPartitionKeyValue: {
        serializedName: "azureTableDefaultPartitionKeyValue",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureTablePartitionKeyName: {
        serializedName: "azureTablePartitionKeyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureTableRowKeyName: {
        serializedName: "azureTableRowKeyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureTableInsertType: {
        serializedName: "azureTableInsertType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AvroSink: coreClient.CompositeMapper = {
  serializedName: "AvroSink",
  type: {
    name: "Composite",
    className: "AvroSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "AvroWriteSettings"
        }
      }
    }
  }
};

export const ParquetSink: coreClient.CompositeMapper = {
  serializedName: "ParquetSink",
  type: {
    name: "Composite",
    className: "ParquetSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "ParquetWriteSettings"
        }
      }
    }
  }
};

export const BinarySink: coreClient.CompositeMapper = {
  serializedName: "BinarySink",
  type: {
    name: "Composite",
    className: "BinarySink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      }
    }
  }
};

export const BlobSink: coreClient.CompositeMapper = {
  serializedName: "BlobSink",
  type: {
    name: "Composite",
    className: "BlobSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      blobWriterOverwriteFiles: {
        serializedName: "blobWriterOverwriteFiles",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      blobWriterDateTimeFormat: {
        serializedName: "blobWriterDateTimeFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      blobWriterAddHeader: {
        serializedName: "blobWriterAddHeader",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataItem"
            }
          }
        }
      }
    }
  }
};

export const FileSystemSink: coreClient.CompositeMapper = {
  serializedName: "FileSystemSink",
  type: {
    name: "Composite",
    className: "FileSystemSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DocumentDbCollectionSink: coreClient.CompositeMapper = {
  serializedName: "DocumentDbCollectionSink",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbSqlApiSink: coreClient.CompositeMapper = {
  serializedName: "CosmosDbSqlApiSink",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SqlSink: coreClient.CompositeMapper = {
  serializedName: "SqlSink",
  type: {
    name: "Composite",
    className: "SqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterUseTableLock: {
        serializedName: "sqlWriterUseTableLock",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      upsertSettings: {
        serializedName: "upsertSettings",
        type: {
          name: "Composite",
          className: "SqlUpsertSettings"
        }
      }
    }
  }
};

export const SqlServerSink: coreClient.CompositeMapper = {
  serializedName: "SqlServerSink",
  type: {
    name: "Composite",
    className: "SqlServerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterUseTableLock: {
        serializedName: "sqlWriterUseTableLock",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      upsertSettings: {
        serializedName: "upsertSettings",
        type: {
          name: "Composite",
          className: "SqlUpsertSettings"
        }
      }
    }
  }
};

export const AzureSqlSink: coreClient.CompositeMapper = {
  serializedName: "AzureSqlSink",
  type: {
    name: "Composite",
    className: "AzureSqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterUseTableLock: {
        serializedName: "sqlWriterUseTableLock",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      upsertSettings: {
        serializedName: "upsertSettings",
        type: {
          name: "Composite",
          className: "SqlUpsertSettings"
        }
      }
    }
  }
};

export const SqlMISink: coreClient.CompositeMapper = {
  serializedName: "SqlMISink",
  type: {
    name: "Composite",
    className: "SqlMISink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterUseTableLock: {
        serializedName: "sqlWriterUseTableLock",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      upsertSettings: {
        serializedName: "upsertSettings",
        type: {
          name: "Composite",
          className: "SqlUpsertSettings"
        }
      }
    }
  }
};

export const SqlDWSink: coreClient.CompositeMapper = {
  serializedName: "SqlDWSink",
  type: {
    name: "Composite",
    className: "SqlDWSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      allowPolyBase: {
        serializedName: "allowPolyBase",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      polyBaseSettings: {
        serializedName: "polyBaseSettings",
        type: {
          name: "Composite",
          className: "PolybaseSettings"
        }
      },
      allowCopyCommand: {
        serializedName: "allowCopyCommand",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      copyCommandSettings: {
        serializedName: "copyCommandSettings",
        type: {
          name: "Composite",
          className: "DWCopyCommandSettings"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlWriterUseTableLock: {
        serializedName: "sqlWriterUseTableLock",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      upsertSettings: {
        serializedName: "upsertSettings",
        type: {
          name: "Composite",
          className: "SqlDWUpsertSettings"
        }
      }
    }
  }
};

export const SnowflakeSink: coreClient.CompositeMapper = {
  serializedName: "SnowflakeSink",
  type: {
    name: "Composite",
    className: "SnowflakeSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      importSettings: {
        serializedName: "importSettings",
        type: {
          name: "Composite",
          className: "SnowflakeImportCopyCommand"
        }
      }
    }
  }
};

export const OracleSink: coreClient.CompositeMapper = {
  serializedName: "OracleSink",
  type: {
    name: "Composite",
    className: "OracleSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataLakeStoreSink: coreClient.CompositeMapper = {
  serializedName: "AzureDataLakeStoreSink",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableAdlsSingleFileParallel: {
        serializedName: "enableAdlsSingleFileParallel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureBlobFSSink: coreClient.CompositeMapper = {
  serializedName: "AzureBlobFSSink",
  type: {
    name: "Composite",
    className: "AzureBlobFSSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataItem"
            }
          }
        }
      }
    }
  }
};

export const AzureSearchIndexSink: coreClient.CompositeMapper = {
  serializedName: "AzureSearchIndexSink",
  type: {
    name: "Composite",
    className: "AzureSearchIndexSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OdbcSink: coreClient.CompositeMapper = {
  serializedName: "OdbcSink",
  type: {
    name: "Composite",
    className: "OdbcSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InformixSink: coreClient.CompositeMapper = {
  serializedName: "InformixSink",
  type: {
    name: "Composite",
    className: "InformixSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MicrosoftAccessSink: coreClient.CompositeMapper = {
  serializedName: "MicrosoftAccessSink",
  type: {
    name: "Composite",
    className: "MicrosoftAccessSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsSink: coreClient.CompositeMapper = {
  serializedName: "DynamicsSink",
  type: {
    name: "Composite",
    className: "DynamicsSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsCrmSink: coreClient.CompositeMapper = {
  serializedName: "DynamicsCrmSink",
  type: {
    name: "Composite",
    className: "DynamicsCrmSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CommonDataServiceForAppsSink: coreClient.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsSink",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDataExplorerSink: coreClient.CompositeMapper = {
  serializedName: "AzureDataExplorerSink",
  type: {
    name: "Composite",
    className: "AzureDataExplorerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      ingestionMappingName: {
        serializedName: "ingestionMappingName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      ingestionMappingAsJson: {
        serializedName: "ingestionMappingAsJson",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      flushImmediately: {
        serializedName: "flushImmediately",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceSink: coreClient.CompositeMapper = {
  serializedName: "SalesforceSink",
  type: {
    name: "Composite",
    className: "SalesforceSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      },
      externalIdFieldName: {
        serializedName: "externalIdFieldName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceServiceCloudSink: coreClient.CompositeMapper = {
  serializedName: "SalesforceServiceCloudSink",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      },
      externalIdFieldName: {
        serializedName: "externalIdFieldName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbAtlasSink: coreClient.CompositeMapper = {
  serializedName: "MongoDbAtlasSink",
  type: {
    name: "Composite",
    className: "MongoDbAtlasSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MongoDbV2Sink: coreClient.CompositeMapper = {
  serializedName: "MongoDbV2Sink",
  type: {
    name: "Composite",
    className: "MongoDbV2Sink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiSink: coreClient.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiSink",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SnowflakeExportCopyCommand: coreClient.CompositeMapper = {
  serializedName: "SnowflakeExportCopyCommand",
  type: {
    name: "Composite",
    className: "SnowflakeExportCopyCommand",
    uberParent: "ExportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: ExportSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExportSettings.type.modelProperties,
      additionalCopyOptions: {
        serializedName: "additionalCopyOptions",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      additionalFormatOptions: {
        serializedName: "additionalFormatOptions",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeExportCommand: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLakeExportCommand",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeExportCommand",
    uberParent: "ExportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: ExportSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExportSettings.type.modelProperties,
      dateFormat: {
        serializedName: "dateFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timestampFormat: {
        serializedName: "timestampFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureDatabricksDeltaLakeImportCommand: coreClient.CompositeMapper = {
  serializedName: "AzureDatabricksDeltaLakeImportCommand",
  type: {
    name: "Composite",
    className: "AzureDatabricksDeltaLakeImportCommand",
    uberParent: "ImportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: ImportSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...ImportSettings.type.modelProperties,
      dateFormat: {
        serializedName: "dateFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timestampFormat: {
        serializedName: "timestampFormat",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SnowflakeImportCopyCommand: coreClient.CompositeMapper = {
  serializedName: "SnowflakeImportCopyCommand",
  type: {
    name: "Composite",
    className: "SnowflakeImportCopyCommand",
    uberParent: "ImportSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: ImportSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...ImportSettings.type.modelProperties,
      additionalCopyOptions: {
        serializedName: "additionalCopyOptions",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      additionalFormatOptions: {
        serializedName: "additionalFormatOptions",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const TabularTranslator: coreClient.CompositeMapper = {
  serializedName: "TabularTranslator",
  type: {
    name: "Composite",
    className: "TabularTranslator",
    uberParent: "CopyTranslator",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopyTranslator.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopyTranslator.type.modelProperties,
      columnMappings: {
        serializedName: "columnMappings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      schemaMapping: {
        serializedName: "schemaMapping",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      collectionReference: {
        serializedName: "collectionReference",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mapComplexValuesToString: {
        serializedName: "mapComplexValuesToString",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mappings: {
        serializedName: "mappings",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      typeConversion: {
        serializedName: "typeConversion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      typeConversionSettings: {
        serializedName: "typeConversionSettings",
        type: {
          name: "Composite",
          className: "TypeConversionSettings"
        }
      }
    }
  }
};

export const ExecutePowerQueryActivityTypeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExecutePowerQueryActivityTypeProperties",
    modelProperties: {
      ...ExecuteDataFlowActivityTypeProperties.type.modelProperties,
      sinks: {
        serializedName: "sinks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "PowerQuerySink" } }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PowerQuerySinkMapping"
            }
          }
        }
      }
    }
  }
};

export const TriggerDependencyReference: coreClient.CompositeMapper = {
  serializedName: "TriggerDependencyReference",
  type: {
    name: "Composite",
    className: "TriggerDependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...DependencyReference.type.modelProperties,
      referenceTrigger: {
        serializedName: "referenceTrigger",
        type: {
          name: "Composite",
          className: "TriggerReference"
        }
      }
    }
  }
};

export const SelfDependencyTumblingWindowTriggerReference: coreClient.CompositeMapper = {
  serializedName: "SelfDependencyTumblingWindowTriggerReference",
  type: {
    name: "Composite",
    className: "SelfDependencyTumblingWindowTriggerReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: DependencyReference.type.polymorphicDiscriminator,
    modelProperties: {
      ...DependencyReference.type.modelProperties,
      offset: {
        constraints: {
          Pattern: new RegExp(
            "-((\\d+)\\.)?(\\d\\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"
          ),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "offset",
        required: true,
        type: {
          name: "String"
        }
      },
      size: {
        constraints: {
          Pattern: new RegExp(
            "((\\d+)\\.)?(\\d\\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"
          ),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "size",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExecutePipelineActivity: coreClient.CompositeMapper = {
  serializedName: "ExecutePipeline",
  type: {
    name: "Composite",
    className: "ExecutePipelineActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      pipeline: {
        serializedName: "typeProperties.pipeline",
        type: {
          name: "Composite",
          className: "PipelineReference"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      waitOnCompletion: {
        serializedName: "typeProperties.waitOnCompletion",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const IfConditionActivity: coreClient.CompositeMapper = {
  serializedName: "IfCondition",
  type: {
    name: "Composite",
    className: "IfConditionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      expression: {
        serializedName: "typeProperties.expression",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      ifTrueActivities: {
        serializedName: "typeProperties.ifTrueActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      },
      ifFalseActivities: {
        serializedName: "typeProperties.ifFalseActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const SwitchActivity: coreClient.CompositeMapper = {
  serializedName: "Switch",
  type: {
    name: "Composite",
    className: "SwitchActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      on: {
        serializedName: "typeProperties.on",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      cases: {
        serializedName: "typeProperties.cases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SwitchCase"
            }
          }
        }
      },
      defaultActivities: {
        serializedName: "typeProperties.defaultActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const ForEachActivity: coreClient.CompositeMapper = {
  serializedName: "ForEach",
  type: {
    name: "Composite",
    className: "ForEachActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      isSequential: {
        serializedName: "typeProperties.isSequential",
        type: {
          name: "Boolean"
        }
      },
      batchCount: {
        constraints: {
          InclusiveMaximum: 50
        },
        serializedName: "typeProperties.batchCount",
        type: {
          name: "Number"
        }
      },
      items: {
        serializedName: "typeProperties.items",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      activities: {
        serializedName: "typeProperties.activities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const WaitActivity: coreClient.CompositeMapper = {
  serializedName: "Wait",
  type: {
    name: "Composite",
    className: "WaitActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      waitTimeInSeconds: {
        serializedName: "typeProperties.waitTimeInSeconds",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const UntilActivity: coreClient.CompositeMapper = {
  serializedName: "Until",
  type: {
    name: "Composite",
    className: "UntilActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      expression: {
        serializedName: "typeProperties.expression",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      activities: {
        serializedName: "typeProperties.activities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const ValidationActivity: coreClient.CompositeMapper = {
  serializedName: "Validation",
  type: {
    name: "Composite",
    className: "ValidationActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sleep: {
        serializedName: "typeProperties.sleep",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      minimumSize: {
        serializedName: "typeProperties.minimumSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      childItems: {
        serializedName: "typeProperties.childItems",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      }
    }
  }
};

export const FilterActivity: coreClient.CompositeMapper = {
  serializedName: "Filter",
  type: {
    name: "Composite",
    className: "FilterActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      items: {
        serializedName: "typeProperties.items",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      condition: {
        serializedName: "typeProperties.condition",
        type: {
          name: "Composite",
          className: "Expression"
        }
      }
    }
  }
};

export const SetVariableActivity: coreClient.CompositeMapper = {
  serializedName: "SetVariable",
  type: {
    name: "Composite",
    className: "SetVariableActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      variableName: {
        serializedName: "typeProperties.variableName",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "typeProperties.value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AppendVariableActivity: coreClient.CompositeMapper = {
  serializedName: "AppendVariable",
  type: {
    name: "Composite",
    className: "AppendVariableActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      variableName: {
        serializedName: "typeProperties.variableName",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "typeProperties.value",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WebHookActivity: coreClient.CompositeMapper = {
  serializedName: "WebHook",
  type: {
    name: "Composite",
    className: "WebHookActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "String"
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Composite",
          className: "WebActivityAuthentication"
        }
      },
      reportStatusOnCallBack: {
        serializedName: "typeProperties.reportStatusOnCallBack",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CopyActivity: coreClient.CompositeMapper = {
  serializedName: "Copy",
  type: {
    name: "Composite",
    className: "CopyActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      inputs: {
        serializedName: "inputs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      outputs: {
        serializedName: "outputs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      source: {
        serializedName: "typeProperties.source",
        type: {
          name: "Composite",
          className: "CopySource"
        }
      },
      sink: {
        serializedName: "typeProperties.sink",
        type: {
          name: "Composite",
          className: "CopySink"
        }
      },
      translator: {
        serializedName: "typeProperties.translator",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableStaging: {
        serializedName: "typeProperties.enableStaging",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      stagingSettings: {
        serializedName: "typeProperties.stagingSettings",
        type: {
          name: "Composite",
          className: "StagingSettings"
        }
      },
      parallelCopies: {
        serializedName: "typeProperties.parallelCopies",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataIntegrationUnits: {
        serializedName: "typeProperties.dataIntegrationUnits",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      enableSkipIncompatibleRow: {
        serializedName: "typeProperties.enableSkipIncompatibleRow",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      redirectIncompatibleRowSettings: {
        serializedName: "typeProperties.redirectIncompatibleRowSettings",
        type: {
          name: "Composite",
          className: "RedirectIncompatibleRowSettings"
        }
      },
      logStorageSettings: {
        serializedName: "typeProperties.logStorageSettings",
        type: {
          name: "Composite",
          className: "LogStorageSettings"
        }
      },
      logSettings: {
        serializedName: "typeProperties.logSettings",
        type: {
          name: "Composite",
          className: "LogSettings"
        }
      },
      preserveRules: {
        serializedName: "typeProperties.preserveRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      preserve: {
        serializedName: "typeProperties.preserve",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      validateDataConsistency: {
        serializedName: "typeProperties.validateDataConsistency",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      skipErrorFile: {
        serializedName: "typeProperties.skipErrorFile",
        type: {
          name: "Composite",
          className: "SkipErrorFile"
        }
      }
    }
  }
};

export const HDInsightHiveActivity: coreClient.CompositeMapper = {
  serializedName: "HDInsightHive",
  type: {
    name: "Composite",
    className: "HDInsightHiveActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      variables: {
        serializedName: "typeProperties.variables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      queryTimeout: {
        serializedName: "typeProperties.queryTimeout",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HDInsightPigActivity: coreClient.CompositeMapper = {
  serializedName: "HDInsightPig",
  type: {
    name: "Composite",
    className: "HDInsightPigActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const HDInsightMapReduceActivity: coreClient.CompositeMapper = {
  serializedName: "HDInsightMapReduce",
  type: {
    name: "Composite",
    className: "HDInsightMapReduceActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      className: {
        serializedName: "typeProperties.className",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      jarFilePath: {
        serializedName: "typeProperties.jarFilePath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      jarLinkedService: {
        serializedName: "typeProperties.jarLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      jarLibs: {
        serializedName: "typeProperties.jarLibs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const HDInsightStreamingActivity: coreClient.CompositeMapper = {
  serializedName: "HDInsightStreaming",
  type: {
    name: "Composite",
    className: "HDInsightStreamingActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      mapper: {
        serializedName: "typeProperties.mapper",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      reducer: {
        serializedName: "typeProperties.reducer",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      input: {
        serializedName: "typeProperties.input",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      output: {
        serializedName: "typeProperties.output",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      filePaths: {
        serializedName: "typeProperties.filePaths",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      fileLinkedService: {
        serializedName: "typeProperties.fileLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      combiner: {
        serializedName: "typeProperties.combiner",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      commandEnvironment: {
        serializedName: "typeProperties.commandEnvironment",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const HDInsightSparkActivity: coreClient.CompositeMapper = {
  serializedName: "HDInsightSpark",
  type: {
    name: "Composite",
    className: "HDInsightSparkActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      rootPath: {
        serializedName: "typeProperties.rootPath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      entryFilePath: {
        serializedName: "typeProperties.entryFilePath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      sparkJobLinkedService: {
        serializedName: "typeProperties.sparkJobLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      className: {
        serializedName: "typeProperties.className",
        type: {
          name: "String"
        }
      },
      proxyUser: {
        serializedName: "typeProperties.proxyUser",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sparkConfig: {
        serializedName: "typeProperties.sparkConfig",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const ExecuteSsisPackageActivity: coreClient.CompositeMapper = {
  serializedName: "ExecuteSSISPackage",
  type: {
    name: "Composite",
    className: "ExecuteSsisPackageActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      packageLocation: {
        serializedName: "typeProperties.packageLocation",
        type: {
          name: "Composite",
          className: "SsisPackageLocation"
        }
      },
      runtime: {
        serializedName: "typeProperties.runtime",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      loggingLevel: {
        serializedName: "typeProperties.loggingLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      environmentPath: {
        serializedName: "typeProperties.environmentPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      executionCredential: {
        serializedName: "typeProperties.executionCredential",
        type: {
          name: "Composite",
          className: "SsisExecutionCredential"
        }
      },
      connectVia: {
        serializedName: "typeProperties.connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      projectParameters: {
        serializedName: "typeProperties.projectParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisExecutionParameter" }
          }
        }
      },
      packageParameters: {
        serializedName: "typeProperties.packageParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisExecutionParameter" }
          }
        }
      },
      projectConnectionManagers: {
        serializedName: "typeProperties.projectConnectionManagers",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Composite", className: "SsisExecutionParameter" }
              }
            }
          }
        }
      },
      packageConnectionManagers: {
        serializedName: "typeProperties.packageConnectionManagers",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Composite", className: "SsisExecutionParameter" }
              }
            }
          }
        }
      },
      propertyOverrides: {
        serializedName: "typeProperties.propertyOverrides",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisPropertyOverride" }
          }
        }
      },
      logLocation: {
        serializedName: "typeProperties.logLocation",
        type: {
          name: "Composite",
          className: "SsisLogLocation"
        }
      }
    }
  }
};

export const CustomActivity: coreClient.CompositeMapper = {
  serializedName: "Custom",
  type: {
    name: "Composite",
    className: "CustomActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      command: {
        serializedName: "typeProperties.command",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      resourceLinkedService: {
        serializedName: "typeProperties.resourceLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      referenceObjects: {
        serializedName: "typeProperties.referenceObjects",
        type: {
          name: "Composite",
          className: "CustomActivityReferenceObject"
        }
      },
      extendedProperties: {
        serializedName: "typeProperties.extendedProperties",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      retentionTimeInDays: {
        serializedName: "typeProperties.retentionTimeInDays",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      autoUserSpecification: {
        serializedName: "typeProperties.autoUserSpecification",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SqlServerStoredProcedureActivity: coreClient.CompositeMapper = {
  serializedName: "SqlServerStoredProcedure",
  type: {
    name: "Composite",
    className: "SqlServerStoredProcedureActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storedProcedureName: {
        serializedName: "typeProperties.storedProcedureName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "typeProperties.storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      }
    }
  }
};

export const DeleteActivity: coreClient.CompositeMapper = {
  serializedName: "Delete",
  type: {
    name: "Composite",
    className: "DeleteActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      recursive: {
        serializedName: "typeProperties.recursive",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      maxConcurrentConnections: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.maxConcurrentConnections",
        type: {
          name: "Number"
        }
      },
      enableLogging: {
        serializedName: "typeProperties.enableLogging",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      logStorageSettings: {
        serializedName: "typeProperties.logStorageSettings",
        type: {
          name: "Composite",
          className: "LogStorageSettings"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      storeSettings: {
        serializedName: "typeProperties.storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const AzureDataExplorerCommandActivity: coreClient.CompositeMapper = {
  serializedName: "AzureDataExplorerCommand",
  type: {
    name: "Composite",
    className: "AzureDataExplorerCommandActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      command: {
        serializedName: "typeProperties.command",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      commandTimeout: {
        serializedName: "typeProperties.commandTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const LookupActivity: coreClient.CompositeMapper = {
  serializedName: "Lookup",
  type: {
    name: "Composite",
    className: "LookupActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      source: {
        serializedName: "typeProperties.source",
        type: {
          name: "Composite",
          className: "CopySource"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      firstRowOnly: {
        serializedName: "typeProperties.firstRowOnly",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WebActivity: coreClient.CompositeMapper = {
  serializedName: "WebActivity",
  type: {
    name: "Composite",
    className: "WebActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Composite",
          className: "WebActivityAuthentication"
        }
      },
      datasets: {
        serializedName: "typeProperties.datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      linkedServices: {
        serializedName: "typeProperties.linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      connectVia: {
        serializedName: "typeProperties.connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      }
    }
  }
};

export const GetMetadataActivity: coreClient.CompositeMapper = {
  serializedName: "GetMetadata",
  type: {
    name: "Composite",
    className: "GetMetadataActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      fieldList: {
        serializedName: "typeProperties.fieldList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      storeSettings: {
        serializedName: "typeProperties.storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "typeProperties.formatSettings",
        type: {
          name: "Composite",
          className: "FormatReadSettings"
        }
      }
    }
  }
};

export const AzureMLBatchExecutionActivity: coreClient.CompositeMapper = {
  serializedName: "AzureMLBatchExecution",
  type: {
    name: "Composite",
    className: "AzureMLBatchExecutionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      globalParameters: {
        serializedName: "typeProperties.globalParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      webServiceOutputs: {
        serializedName: "typeProperties.webServiceOutputs",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "AzureMLWebServiceFile" }
          }
        }
      },
      webServiceInputs: {
        serializedName: "typeProperties.webServiceInputs",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "AzureMLWebServiceFile" }
          }
        }
      }
    }
  }
};

export const AzureMLUpdateResourceActivity: coreClient.CompositeMapper = {
  serializedName: "AzureMLUpdateResource",
  type: {
    name: "Composite",
    className: "AzureMLUpdateResourceActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      trainedModelName: {
        serializedName: "typeProperties.trainedModelName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      trainedModelLinkedServiceName: {
        serializedName: "typeProperties.trainedModelLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      trainedModelFilePath: {
        serializedName: "typeProperties.trainedModelFilePath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMLExecutePipelineActivity: coreClient.CompositeMapper = {
  serializedName: "AzureMLExecutePipeline",
  type: {
    name: "Composite",
    className: "AzureMLExecutePipelineActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      mlPipelineId: {
        serializedName: "typeProperties.mlPipelineId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mlPipelineEndpointId: {
        serializedName: "typeProperties.mlPipelineEndpointId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      version: {
        serializedName: "typeProperties.version",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      experimentName: {
        serializedName: "typeProperties.experimentName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mlPipelineParameters: {
        serializedName: "typeProperties.mlPipelineParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      dataPathAssignments: {
        serializedName: "typeProperties.dataPathAssignments",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      mlParentRunId: {
        serializedName: "typeProperties.mlParentRunId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      continueOnStepFailure: {
        serializedName: "typeProperties.continueOnStepFailure",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataLakeAnalyticsUsqlActivity: coreClient.CompositeMapper = {
  serializedName: "DataLakeAnalyticsU-SQL",
  type: {
    name: "Composite",
    className: "DataLakeAnalyticsUsqlActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      degreeOfParallelism: {
        serializedName: "typeProperties.degreeOfParallelism",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      priority: {
        serializedName: "typeProperties.priority",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      runtimeVersion: {
        serializedName: "typeProperties.runtimeVersion",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      compilationMode: {
        serializedName: "typeProperties.compilationMode",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatabricksNotebookActivity: coreClient.CompositeMapper = {
  serializedName: "DatabricksNotebook",
  type: {
    name: "Composite",
    className: "DatabricksNotebookActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      notebookPath: {
        serializedName: "typeProperties.notebookPath",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      baseParameters: {
        serializedName: "typeProperties.baseParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
              }
            }
          }
        }
      }
    }
  }
};

export const DatabricksSparkJarActivity: coreClient.CompositeMapper = {
  serializedName: "DatabricksSparkJar",
  type: {
    name: "Composite",
    className: "DatabricksSparkJarActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      mainClassName: {
        serializedName: "typeProperties.mainClassName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
              }
            }
          }
        }
      }
    }
  }
};

export const DatabricksSparkPythonActivity: coreClient.CompositeMapper = {
  serializedName: "DatabricksSparkPython",
  type: {
    name: "Composite",
    className: "DatabricksSparkPythonActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      pythonFile: {
        serializedName: "typeProperties.pythonFile",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Dictionary", value: { type: { name: "any" } } }
              }
            }
          }
        }
      }
    }
  }
};

export const AzureFunctionActivity: coreClient.CompositeMapper = {
  serializedName: "AzureFunctionActivity",
  type: {
    name: "Composite",
    className: "AzureFunctionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      functionName: {
        serializedName: "typeProperties.functionName",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExecuteDataFlowActivity: coreClient.CompositeMapper = {
  serializedName: "ExecuteDataFlow",
  type: {
    name: "Composite",
    className: "ExecuteDataFlowActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      dataFlow: {
        serializedName: "typeProperties.dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowReference"
        }
      },
      staging: {
        serializedName: "typeProperties.staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      integrationRuntime: {
        serializedName: "typeProperties.integrationRuntime",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      compute: {
        serializedName: "typeProperties.compute",
        type: {
          name: "Composite",
          className: "ExecuteDataFlowActivityTypePropertiesCompute"
        }
      },
      traceLevel: {
        serializedName: "typeProperties.traceLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      continueOnError: {
        serializedName: "typeProperties.continueOnError",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      runConcurrently: {
        serializedName: "typeProperties.runConcurrently",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ScheduleTrigger: coreClient.CompositeMapper = {
  serializedName: "ScheduleTrigger",
  type: {
    name: "Composite",
    className: "ScheduleTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      recurrence: {
        serializedName: "typeProperties.recurrence",
        type: {
          name: "Composite",
          className: "ScheduleTriggerRecurrence"
        }
      }
    }
  }
};

export const BlobTrigger: coreClient.CompositeMapper = {
  serializedName: "BlobTrigger",
  type: {
    name: "Composite",
    className: "BlobTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrency: {
        serializedName: "typeProperties.maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      },
      linkedService: {
        serializedName: "typeProperties.linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const BlobEventsTrigger: coreClient.CompositeMapper = {
  serializedName: "BlobEventsTrigger",
  type: {
    name: "Composite",
    className: "BlobEventsTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      blobPathBeginsWith: {
        serializedName: "typeProperties.blobPathBeginsWith",
        type: {
          name: "String"
        }
      },
      blobPathEndsWith: {
        serializedName: "typeProperties.blobPathEndsWith",
        type: {
          name: "String"
        }
      },
      ignoreEmptyBlobs: {
        serializedName: "typeProperties.ignoreEmptyBlobs",
        type: {
          name: "Boolean"
        }
      },
      events: {
        serializedName: "typeProperties.events",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scope: {
        serializedName: "typeProperties.scope",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CustomEventsTrigger: coreClient.CompositeMapper = {
  serializedName: "CustomEventsTrigger",
  type: {
    name: "Composite",
    className: "CustomEventsTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      subjectBeginsWith: {
        serializedName: "typeProperties.subjectBeginsWith",
        type: {
          name: "String"
        }
      },
      subjectEndsWith: {
        serializedName: "typeProperties.subjectEndsWith",
        type: {
          name: "String"
        }
      },
      events: {
        serializedName: "typeProperties.events",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      },
      scope: {
        serializedName: "typeProperties.scope",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PowerQuerySource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PowerQuerySource",
    modelProperties: {
      ...DataFlowSource.type.modelProperties,
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PowerQuerySink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PowerQuerySink",
    modelProperties: {
      ...DataFlowSink.type.modelProperties,
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureTableSource: coreClient.CompositeMapper = {
  serializedName: "AzureTableSource",
  type: {
    name: "Composite",
    className: "AzureTableSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      azureTableSourceQuery: {
        serializedName: "azureTableSourceQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      azureTableSourceIgnoreTableNotFound: {
        serializedName: "azureTableSourceIgnoreTableNotFound",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const InformixSource: coreClient.CompositeMapper = {
  serializedName: "InformixSource",
  type: {
    name: "Composite",
    className: "InformixSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Db2Source: coreClient.CompositeMapper = {
  serializedName: "Db2Source",
  type: {
    name: "Composite",
    className: "Db2Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OdbcSource: coreClient.CompositeMapper = {
  serializedName: "OdbcSource",
  type: {
    name: "Composite",
    className: "OdbcSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MySqlSource: coreClient.CompositeMapper = {
  serializedName: "MySqlSource",
  type: {
    name: "Composite",
    className: "MySqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PostgreSqlSource: coreClient.CompositeMapper = {
  serializedName: "PostgreSqlSource",
  type: {
    name: "Composite",
    className: "PostgreSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SybaseSource: coreClient.CompositeMapper = {
  serializedName: "SybaseSource",
  type: {
    name: "Composite",
    className: "SybaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapBwSource: coreClient.CompositeMapper = {
  serializedName: "SapBwSource",
  type: {
    name: "Composite",
    className: "SapBwSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceSource: coreClient.CompositeMapper = {
  serializedName: "SalesforceSource",
  type: {
    name: "Composite",
    className: "SalesforceSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      readBehavior: {
        serializedName: "readBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapCloudForCustomerSource: coreClient.CompositeMapper = {
  serializedName: "SapCloudForCustomerSource",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapEccSource: coreClient.CompositeMapper = {
  serializedName: "SapEccSource",
  type: {
    name: "Composite",
    className: "SapEccSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapHanaSource: coreClient.CompositeMapper = {
  serializedName: "SapHanaSource",
  type: {
    name: "Composite",
    className: "SapHanaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      packetSize: {
        serializedName: "packetSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SapHanaPartitionSettings"
        }
      }
    }
  }
};

export const SapOpenHubSource: coreClient.CompositeMapper = {
  serializedName: "SapOpenHubSource",
  type: {
    name: "Composite",
    className: "SapOpenHubSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      excludeLastRequest: {
        serializedName: "excludeLastRequest",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      baseRequestId: {
        serializedName: "baseRequestId",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      customRfcReadTableFunctionModule: {
        serializedName: "customRfcReadTableFunctionModule",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sapDataColumnDelimiter: {
        serializedName: "sapDataColumnDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SapTableSource: coreClient.CompositeMapper = {
  serializedName: "SapTableSource",
  type: {
    name: "Composite",
    className: "SapTableSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      rowCount: {
        serializedName: "rowCount",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rowSkips: {
        serializedName: "rowSkips",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rfcTableFields: {
        serializedName: "rfcTableFields",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rfcTableOptions: {
        serializedName: "rfcTableOptions",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      customRfcReadTableFunctionModule: {
        serializedName: "customRfcReadTableFunctionModule",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sapDataColumnDelimiter: {
        serializedName: "sapDataColumnDelimiter",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SapTablePartitionSettings"
        }
      }
    }
  }
};

export const SqlSource: coreClient.CompositeMapper = {
  serializedName: "SqlSource",
  type: {
    name: "Composite",
    className: "SqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      isolationLevel: {
        serializedName: "isolationLevel",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const SqlServerSource: coreClient.CompositeMapper = {
  serializedName: "SqlServerSource",
  type: {
    name: "Composite",
    className: "SqlServerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const AmazonRdsForSqlServerSource: coreClient.CompositeMapper = {
  serializedName: "AmazonRdsForSqlServerSource",
  type: {
    name: "Composite",
    className: "AmazonRdsForSqlServerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const AzureSqlSource: coreClient.CompositeMapper = {
  serializedName: "AzureSqlSource",
  type: {
    name: "Composite",
    className: "AzureSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const SqlMISource: coreClient.CompositeMapper = {
  serializedName: "SqlMISource",
  type: {
    name: "Composite",
    className: "SqlMISource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const SqlDWSource: coreClient.CompositeMapper = {
  serializedName: "SqlDWSource",
  type: {
    name: "Composite",
    className: "SqlDWSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SqlPartitionSettings"
        }
      }
    }
  }
};

export const AzureMySqlSource: coreClient.CompositeMapper = {
  serializedName: "AzureMySqlSource",
  type: {
    name: "Composite",
    className: "AzureMySqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TeradataSource: coreClient.CompositeMapper = {
  serializedName: "TeradataSource",
  type: {
    name: "Composite",
    className: "TeradataSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "TeradataPartitionSettings"
        }
      }
    }
  }
};

export const CassandraSource: coreClient.CompositeMapper = {
  serializedName: "CassandraSource",
  type: {
    name: "Composite",
    className: "CassandraSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      consistencyLevel: {
        serializedName: "consistencyLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AmazonMWSSource: coreClient.CompositeMapper = {
  serializedName: "AmazonMWSSource",
  type: {
    name: "Composite",
    className: "AmazonMWSSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzurePostgreSqlSource: coreClient.CompositeMapper = {
  serializedName: "AzurePostgreSqlSource",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ConcurSource: coreClient.CompositeMapper = {
  serializedName: "ConcurSource",
  type: {
    name: "Composite",
    className: "ConcurSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const CouchbaseSource: coreClient.CompositeMapper = {
  serializedName: "CouchbaseSource",
  type: {
    name: "Composite",
    className: "CouchbaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DrillSource: coreClient.CompositeMapper = {
  serializedName: "DrillSource",
  type: {
    name: "Composite",
    className: "DrillSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const EloquaSource: coreClient.CompositeMapper = {
  serializedName: "EloquaSource",
  type: {
    name: "Composite",
    className: "EloquaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleBigQuerySource: coreClient.CompositeMapper = {
  serializedName: "GoogleBigQuerySource",
  type: {
    name: "Composite",
    className: "GoogleBigQuerySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GreenplumSource: coreClient.CompositeMapper = {
  serializedName: "GreenplumSource",
  type: {
    name: "Composite",
    className: "GreenplumSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HBaseSource: coreClient.CompositeMapper = {
  serializedName: "HBaseSource",
  type: {
    name: "Composite",
    className: "HBaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HiveSource: coreClient.CompositeMapper = {
  serializedName: "HiveSource",
  type: {
    name: "Composite",
    className: "HiveSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HubspotSource: coreClient.CompositeMapper = {
  serializedName: "HubspotSource",
  type: {
    name: "Composite",
    className: "HubspotSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ImpalaSource: coreClient.CompositeMapper = {
  serializedName: "ImpalaSource",
  type: {
    name: "Composite",
    className: "ImpalaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const JiraSource: coreClient.CompositeMapper = {
  serializedName: "JiraSource",
  type: {
    name: "Composite",
    className: "JiraSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MagentoSource: coreClient.CompositeMapper = {
  serializedName: "MagentoSource",
  type: {
    name: "Composite",
    className: "MagentoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MariaDBSource: coreClient.CompositeMapper = {
  serializedName: "MariaDBSource",
  type: {
    name: "Composite",
    className: "MariaDBSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AzureMariaDBSource: coreClient.CompositeMapper = {
  serializedName: "AzureMariaDBSource",
  type: {
    name: "Composite",
    className: "AzureMariaDBSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MarketoSource: coreClient.CompositeMapper = {
  serializedName: "MarketoSource",
  type: {
    name: "Composite",
    className: "MarketoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PaypalSource: coreClient.CompositeMapper = {
  serializedName: "PaypalSource",
  type: {
    name: "Composite",
    className: "PaypalSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PhoenixSource: coreClient.CompositeMapper = {
  serializedName: "PhoenixSource",
  type: {
    name: "Composite",
    className: "PhoenixSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const PrestoSource: coreClient.CompositeMapper = {
  serializedName: "PrestoSource",
  type: {
    name: "Composite",
    className: "PrestoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const QuickBooksSource: coreClient.CompositeMapper = {
  serializedName: "QuickBooksSource",
  type: {
    name: "Composite",
    className: "QuickBooksSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ServiceNowSource: coreClient.CompositeMapper = {
  serializedName: "ServiceNowSource",
  type: {
    name: "Composite",
    className: "ServiceNowSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ShopifySource: coreClient.CompositeMapper = {
  serializedName: "ShopifySource",
  type: {
    name: "Composite",
    className: "ShopifySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SparkSource: coreClient.CompositeMapper = {
  serializedName: "SparkSource",
  type: {
    name: "Composite",
    className: "SparkSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SquareSource: coreClient.CompositeMapper = {
  serializedName: "SquareSource",
  type: {
    name: "Composite",
    className: "SquareSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const XeroSource: coreClient.CompositeMapper = {
  serializedName: "XeroSource",
  type: {
    name: "Composite",
    className: "XeroSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ZohoSource: coreClient.CompositeMapper = {
  serializedName: "ZohoSource",
  type: {
    name: "Composite",
    className: "ZohoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const NetezzaSource: coreClient.CompositeMapper = {
  serializedName: "NetezzaSource",
  type: {
    name: "Composite",
    className: "NetezzaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "NetezzaPartitionSettings"
        }
      }
    }
  }
};

export const VerticaSource: coreClient.CompositeMapper = {
  serializedName: "VerticaSource",
  type: {
    name: "Composite",
    className: "VerticaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SalesforceMarketingCloudSource: coreClient.CompositeMapper = {
  serializedName: "SalesforceMarketingCloudSource",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ResponsysSource: coreClient.CompositeMapper = {
  serializedName: "ResponsysSource",
  type: {
    name: "Composite",
    className: "ResponsysSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DynamicsAXSource: coreClient.CompositeMapper = {
  serializedName: "DynamicsAXSource",
  type: {
    name: "Composite",
    className: "DynamicsAXSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const OracleServiceCloudSource: coreClient.CompositeMapper = {
  serializedName: "OracleServiceCloudSource",
  type: {
    name: "Composite",
    className: "OracleServiceCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const GoogleAdWordsSource: coreClient.CompositeMapper = {
  serializedName: "GoogleAdWordsSource",
  type: {
    name: "Composite",
    className: "GoogleAdWordsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AmazonRedshiftSource: coreClient.CompositeMapper = {
  serializedName: "AmazonRedshiftSource",
  type: {
    name: "Composite",
    className: "AmazonRedshiftSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      redshiftUnloadSettings: {
        serializedName: "redshiftUnloadSettings",
        type: {
          name: "Composite",
          className: "RedshiftUnloadSettings"
        }
      }
    }
  }
};

export const TumblingWindowTriggerDependencyReference: coreClient.CompositeMapper = {
  serializedName: "TumblingWindowTriggerDependencyReference",
  type: {
    name: "Composite",
    className: "TumblingWindowTriggerDependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: DependencyReference.type.polymorphicDiscriminator,
    modelProperties: {
      ...TriggerDependencyReference.type.modelProperties,
      offset: {
        constraints: {
          Pattern: new RegExp(
            "-?((\\d+)\\.)?(\\d\\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"
          ),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "offset",
        type: {
          name: "String"
        }
      },
      size: {
        constraints: {
          Pattern: new RegExp(
            "((\\d+)\\.)?(\\d\\d):(60|([0-5][0-9])):(60|([0-5][0-9]))"
          ),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "size",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugSessionCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionCreateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugSessionExecuteCommandHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionExecuteCommandHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  FactoryRepoConfiguration: FactoryRepoConfiguration,
  IntegrationRuntime: IntegrationRuntime,
  IntegrationRuntimeStatus: IntegrationRuntimeStatus,
  SsisObjectMetadata: SsisObjectMetadata,
  LinkedService: LinkedService,
  Dataset: Dataset,
  Activity: Activity,
  Trigger: Trigger,
  DataFlow: DataFlow,
  SecretBase: SecretBase,
  Credential: Credential,
  DatasetLocation: DatasetLocation,
  DatasetStorageFormat: DatasetStorageFormat,
  DatasetCompression: DatasetCompression,
  CustomSetupBase: CustomSetupBase,
  LinkedIntegrationRuntimeType: LinkedIntegrationRuntimeType,
  WebLinkedServiceTypeProperties: WebLinkedServiceTypeProperties,
  StoreReadSettings: StoreReadSettings,
  StoreWriteSettings: StoreWriteSettings,
  FormatReadSettings: FormatReadSettings,
  CompressionReadSettings: CompressionReadSettings,
  FormatWriteSettings: FormatWriteSettings,
  CopySource: CopySource,
  CopySink: CopySink,
  ExportSettings: ExportSettings,
  ImportSettings: ImportSettings,
  CopyTranslator: CopyTranslator,
  DependencyReference: DependencyReference,
  "FactoryRepoConfiguration.FactoryVSTSConfiguration": FactoryVstsConfiguration,
  "FactoryRepoConfiguration.FactoryGitHubConfiguration": FactoryGitHubConfiguration,
  "IntegrationRuntime.Managed": ManagedIntegrationRuntime,
  "IntegrationRuntime.SelfHosted": SelfHostedIntegrationRuntime,
  "IntegrationRuntimeStatus.Managed": ManagedIntegrationRuntimeStatus,
  "IntegrationRuntimeStatus.SelfHosted": SelfHostedIntegrationRuntimeStatus,
  "SsisObjectMetadata.Folder": SsisFolder,
  "SsisObjectMetadata.Project": SsisProject,
  "SsisObjectMetadata.Package": SsisPackage,
  "SsisObjectMetadata.Environment": SsisEnvironment,
  "LinkedService.AzureStorage": AzureStorageLinkedService,
  "LinkedService.AzureBlobStorage": AzureBlobStorageLinkedService,
  "LinkedService.AzureTableStorage": AzureTableStorageLinkedService,
  "LinkedService.AzureSqlDW": AzureSqlDWLinkedService,
  "LinkedService.SqlServer": SqlServerLinkedService,
  "LinkedService.AmazonRdsForSqlServer": AmazonRdsForSqlServerLinkedService,
  "LinkedService.AzureSqlDatabase": AzureSqlDatabaseLinkedService,
  "LinkedService.AzureSqlMI": AzureSqlMILinkedService,
  "LinkedService.AzureBatch": AzureBatchLinkedService,
  "LinkedService.AzureKeyVault": AzureKeyVaultLinkedService,
  "LinkedService.CosmosDb": CosmosDbLinkedService,
  "LinkedService.Dynamics": DynamicsLinkedService,
  "LinkedService.DynamicsCrm": DynamicsCrmLinkedService,
  "LinkedService.CommonDataServiceForApps": CommonDataServiceForAppsLinkedService,
  "LinkedService.HDInsight": HDInsightLinkedService,
  "LinkedService.FileServer": FileServerLinkedService,
  "LinkedService.AzureFileStorage": AzureFileStorageLinkedService,
  "LinkedService.AmazonS3Compatible": AmazonS3CompatibleLinkedService,
  "LinkedService.OracleCloudStorage": OracleCloudStorageLinkedService,
  "LinkedService.GoogleCloudStorage": GoogleCloudStorageLinkedService,
  "LinkedService.Oracle": OracleLinkedService,
  "LinkedService.AmazonRdsForOracle": AmazonRdsForOracleLinkedService,
  "LinkedService.AzureMySql": AzureMySqlLinkedService,
  "LinkedService.MySql": MySqlLinkedService,
  "LinkedService.PostgreSql": PostgreSqlLinkedService,
  "LinkedService.Sybase": SybaseLinkedService,
  "LinkedService.Db2": Db2LinkedService,
  "LinkedService.Teradata": TeradataLinkedService,
  "LinkedService.AzureML": AzureMLLinkedService,
  "LinkedService.AzureMLService": AzureMLServiceLinkedService,
  "LinkedService.Odbc": OdbcLinkedService,
  "LinkedService.Informix": InformixLinkedService,
  "LinkedService.MicrosoftAccess": MicrosoftAccessLinkedService,
  "LinkedService.Hdfs": HdfsLinkedService,
  "LinkedService.OData": ODataLinkedService,
  "LinkedService.Web": WebLinkedService,
  "LinkedService.Cassandra": CassandraLinkedService,
  "LinkedService.MongoDb": MongoDbLinkedService,
  "LinkedService.MongoDbAtlas": MongoDbAtlasLinkedService,
  "LinkedService.MongoDbV2": MongoDbV2LinkedService,
  "LinkedService.CosmosDbMongoDbApi": CosmosDbMongoDbApiLinkedService,
  "LinkedService.AzureDataLakeStore": AzureDataLakeStoreLinkedService,
  "LinkedService.AzureBlobFS": AzureBlobFSLinkedService,
  "LinkedService.Office365": Office365LinkedService,
  "LinkedService.Salesforce": SalesforceLinkedService,
  "LinkedService.SalesforceServiceCloud": SalesforceServiceCloudLinkedService,
  "LinkedService.SapCloudForCustomer": SapCloudForCustomerLinkedService,
  "LinkedService.SapEcc": SapEccLinkedService,
  "LinkedService.SapOpenHub": SapOpenHubLinkedService,
  "LinkedService.RestService": RestServiceLinkedService,
  "LinkedService.AmazonS3": AmazonS3LinkedService,
  "LinkedService.AmazonRedshift": AmazonRedshiftLinkedService,
  "LinkedService.CustomDataSource": CustomDataSourceLinkedService,
  "LinkedService.AzureSearch": AzureSearchLinkedService,
  "LinkedService.HttpServer": HttpLinkedService,
  "LinkedService.FtpServer": FtpServerLinkedService,
  "LinkedService.Sftp": SftpServerLinkedService,
  "LinkedService.SapBW": SapBWLinkedService,
  "LinkedService.SapHana": SapHanaLinkedService,
  "LinkedService.AmazonMWS": AmazonMWSLinkedService,
  "LinkedService.AzurePostgreSql": AzurePostgreSqlLinkedService,
  "LinkedService.Concur": ConcurLinkedService,
  "LinkedService.Couchbase": CouchbaseLinkedService,
  "LinkedService.Drill": DrillLinkedService,
  "LinkedService.Eloqua": EloquaLinkedService,
  "LinkedService.GoogleBigQuery": GoogleBigQueryLinkedService,
  "LinkedService.Greenplum": GreenplumLinkedService,
  "LinkedService.HBase": HBaseLinkedService,
  "LinkedService.Hive": HiveLinkedService,
  "LinkedService.Hubspot": HubspotLinkedService,
  "LinkedService.Impala": ImpalaLinkedService,
  "LinkedService.Jira": JiraLinkedService,
  "LinkedService.Magento": MagentoLinkedService,
  "LinkedService.MariaDB": MariaDBLinkedService,
  "LinkedService.AzureMariaDB": AzureMariaDBLinkedService,
  "LinkedService.Marketo": MarketoLinkedService,
  "LinkedService.Paypal": PaypalLinkedService,
  "LinkedService.Phoenix": PhoenixLinkedService,
  "LinkedService.Presto": PrestoLinkedService,
  "LinkedService.QuickBooks": QuickBooksLinkedService,
  "LinkedService.ServiceNow": ServiceNowLinkedService,
  "LinkedService.Shopify": ShopifyLinkedService,
  "LinkedService.Spark": SparkLinkedService,
  "LinkedService.Square": SquareLinkedService,
  "LinkedService.Xero": XeroLinkedService,
  "LinkedService.Zoho": ZohoLinkedService,
  "LinkedService.Vertica": VerticaLinkedService,
  "LinkedService.Netezza": NetezzaLinkedService,
  "LinkedService.SalesforceMarketingCloud": SalesforceMarketingCloudLinkedService,
  "LinkedService.HDInsightOnDemand": HDInsightOnDemandLinkedService,
  "LinkedService.AzureDataLakeAnalytics": AzureDataLakeAnalyticsLinkedService,
  "LinkedService.AzureDatabricks": AzureDatabricksLinkedService,
  "LinkedService.AzureDatabricksDeltaLake": AzureDatabricksDeltaLakeLinkedService,
  "LinkedService.Responsys": ResponsysLinkedService,
  "LinkedService.DynamicsAX": DynamicsAXLinkedService,
  "LinkedService.OracleServiceCloud": OracleServiceCloudLinkedService,
  "LinkedService.GoogleAdWords": GoogleAdWordsLinkedService,
  "LinkedService.SapTable": SapTableLinkedService,
  "LinkedService.AzureDataExplorer": AzureDataExplorerLinkedService,
  "LinkedService.AzureFunction": AzureFunctionLinkedService,
  "LinkedService.Snowflake": SnowflakeLinkedService,
  "LinkedService.SharePointOnlineList": SharePointOnlineListLinkedService,
  "Dataset.AmazonS3Object": AmazonS3Dataset,
  "Dataset.Avro": AvroDataset,
  "Dataset.Excel": ExcelDataset,
  "Dataset.Parquet": ParquetDataset,
  "Dataset.DelimitedText": DelimitedTextDataset,
  "Dataset.Json": JsonDataset,
  "Dataset.Xml": XmlDataset,
  "Dataset.Orc": OrcDataset,
  "Dataset.Binary": BinaryDataset,
  "Dataset.AzureBlob": AzureBlobDataset,
  "Dataset.AzureTable": AzureTableDataset,
  "Dataset.AzureSqlTable": AzureSqlTableDataset,
  "Dataset.AzureSqlMITable": AzureSqlMITableDataset,
  "Dataset.AzureSqlDWTable": AzureSqlDWTableDataset,
  "Dataset.CassandraTable": CassandraTableDataset,
  "Dataset.CustomDataset": CustomDataset,
  "Dataset.CosmosDbSqlApiCollection": CosmosDbSqlApiCollectionDataset,
  "Dataset.DocumentDbCollection": DocumentDbCollectionDataset,
  "Dataset.DynamicsEntity": DynamicsEntityDataset,
  "Dataset.DynamicsCrmEntity": DynamicsCrmEntityDataset,
  "Dataset.CommonDataServiceForAppsEntity": CommonDataServiceForAppsEntityDataset,
  "Dataset.AzureDataLakeStoreFile": AzureDataLakeStoreDataset,
  "Dataset.AzureBlobFSFile": AzureBlobFSDataset,
  "Dataset.Office365Table": Office365Dataset,
  "Dataset.FileShare": FileShareDataset,
  "Dataset.MongoDbCollection": MongoDbCollectionDataset,
  "Dataset.MongoDbAtlasCollection": MongoDbAtlasCollectionDataset,
  "Dataset.MongoDbV2Collection": MongoDbV2CollectionDataset,
  "Dataset.CosmosDbMongoDbApiCollection": CosmosDbMongoDbApiCollectionDataset,
  "Dataset.ODataResource": ODataResourceDataset,
  "Dataset.OracleTable": OracleTableDataset,
  "Dataset.AmazonRdsForOracleTable": AmazonRdsForOracleTableDataset,
  "Dataset.TeradataTable": TeradataTableDataset,
  "Dataset.AzureMySqlTable": AzureMySqlTableDataset,
  "Dataset.AmazonRedshiftTable": AmazonRedshiftTableDataset,
  "Dataset.Db2Table": Db2TableDataset,
  "Dataset.RelationalTable": RelationalTableDataset,
  "Dataset.InformixTable": InformixTableDataset,
  "Dataset.OdbcTable": OdbcTableDataset,
  "Dataset.MySqlTable": MySqlTableDataset,
  "Dataset.PostgreSqlTable": PostgreSqlTableDataset,
  "Dataset.MicrosoftAccessTable": MicrosoftAccessTableDataset,
  "Dataset.SalesforceObject": SalesforceObjectDataset,
  "Dataset.SalesforceServiceCloudObject": SalesforceServiceCloudObjectDataset,
  "Dataset.SybaseTable": SybaseTableDataset,
  "Dataset.SapBwCube": SapBwCubeDataset,
  "Dataset.SapCloudForCustomerResource": SapCloudForCustomerResourceDataset,
  "Dataset.SapEccResource": SapEccResourceDataset,
  "Dataset.SapHanaTable": SapHanaTableDataset,
  "Dataset.SapOpenHubTable": SapOpenHubTableDataset,
  "Dataset.SqlServerTable": SqlServerTableDataset,
  "Dataset.AmazonRdsForSqlServerTable": AmazonRdsForSqlServerTableDataset,
  "Dataset.RestResource": RestResourceDataset,
  "Dataset.SapTableResource": SapTableResourceDataset,
  "Dataset.WebTable": WebTableDataset,
  "Dataset.AzureSearchIndex": AzureSearchIndexDataset,
  "Dataset.HttpFile": HttpDataset,
  "Dataset.AmazonMWSObject": AmazonMWSObjectDataset,
  "Dataset.AzurePostgreSqlTable": AzurePostgreSqlTableDataset,
  "Dataset.ConcurObject": ConcurObjectDataset,
  "Dataset.CouchbaseTable": CouchbaseTableDataset,
  "Dataset.DrillTable": DrillTableDataset,
  "Dataset.EloquaObject": EloquaObjectDataset,
  "Dataset.GoogleBigQueryObject": GoogleBigQueryObjectDataset,
  "Dataset.GreenplumTable": GreenplumTableDataset,
  "Dataset.HBaseObject": HBaseObjectDataset,
  "Dataset.HiveObject": HiveObjectDataset,
  "Dataset.HubspotObject": HubspotObjectDataset,
  "Dataset.ImpalaObject": ImpalaObjectDataset,
  "Dataset.JiraObject": JiraObjectDataset,
  "Dataset.MagentoObject": MagentoObjectDataset,
  "Dataset.MariaDBTable": MariaDBTableDataset,
  "Dataset.AzureMariaDBTable": AzureMariaDBTableDataset,
  "Dataset.MarketoObject": MarketoObjectDataset,
  "Dataset.PaypalObject": PaypalObjectDataset,
  "Dataset.PhoenixObject": PhoenixObjectDataset,
  "Dataset.PrestoObject": PrestoObjectDataset,
  "Dataset.QuickBooksObject": QuickBooksObjectDataset,
  "Dataset.ServiceNowObject": ServiceNowObjectDataset,
  "Dataset.ShopifyObject": ShopifyObjectDataset,
  "Dataset.SparkObject": SparkObjectDataset,
  "Dataset.SquareObject": SquareObjectDataset,
  "Dataset.XeroObject": XeroObjectDataset,
  "Dataset.ZohoObject": ZohoObjectDataset,
  "Dataset.NetezzaTable": NetezzaTableDataset,
  "Dataset.VerticaTable": VerticaTableDataset,
  "Dataset.SalesforceMarketingCloudObject": SalesforceMarketingCloudObjectDataset,
  "Dataset.ResponsysObject": ResponsysObjectDataset,
  "Dataset.DynamicsAXResource": DynamicsAXResourceDataset,
  "Dataset.OracleServiceCloudObject": OracleServiceCloudObjectDataset,
  "Dataset.AzureDataExplorerTable": AzureDataExplorerTableDataset,
  "Dataset.GoogleAdWordsObject": GoogleAdWordsObjectDataset,
  "Dataset.SnowflakeTable": SnowflakeDataset,
  "Dataset.SharePointOnlineListResource": SharePointOnlineListResourceDataset,
  "Dataset.AzureDatabricksDeltaLakeDataset": AzureDatabricksDeltaLakeDataset,
  "Activity.Container": ControlActivity,
  "Activity.Execution": ExecutionActivity,
  "Activity.ExecuteWranglingDataflow": ExecuteWranglingDataflowActivity,
  "Trigger.MultiplePipelineTrigger": MultiplePipelineTrigger,
  "Trigger.TumblingWindowTrigger": TumblingWindowTrigger,
  "Trigger.RerunTumblingWindowTrigger": RerunTumblingWindowTrigger,
  "Trigger.ChainingTrigger": ChainingTrigger,
  "DataFlow.MappingDataFlow": MappingDataFlow,
  "DataFlow.Flowlet": Flowlet,
  "DataFlow.WranglingDataFlow": WranglingDataFlow,
  "SecretBase.SecureString": SecureString,
  "SecretBase.AzureKeyVaultSecret": AzureKeyVaultSecretReference,
  "Credential.ServicePrincipal": ServicePrincipalCredential,
  "Credential.ManagedIdentity": ManagedIdentityCredential,
  "DatasetLocation.AzureBlobStorageLocation": AzureBlobStorageLocation,
  "DatasetLocation.AzureBlobFSLocation": AzureBlobFSLocation,
  "DatasetLocation.AzureDataLakeStoreLocation": AzureDataLakeStoreLocation,
  "DatasetLocation.AmazonS3Location": AmazonS3Location,
  "DatasetLocation.FileServerLocation": FileServerLocation,
  "DatasetLocation.AzureFileStorageLocation": AzureFileStorageLocation,
  "DatasetLocation.AmazonS3CompatibleLocation": AmazonS3CompatibleLocation,
  "DatasetLocation.OracleCloudStorageLocation": OracleCloudStorageLocation,
  "DatasetLocation.GoogleCloudStorageLocation": GoogleCloudStorageLocation,
  "DatasetLocation.FtpServerLocation": FtpServerLocation,
  "DatasetLocation.SftpLocation": SftpLocation,
  "DatasetLocation.HttpServerLocation": HttpServerLocation,
  "DatasetLocation.HdfsLocation": HdfsLocation,
  "DatasetStorageFormat.TextFormat": TextFormat,
  "DatasetStorageFormat.JsonFormat": JsonFormat,
  "DatasetStorageFormat.AvroFormat": AvroFormat,
  "DatasetStorageFormat.OrcFormat": OrcFormat,
  "DatasetStorageFormat.ParquetFormat": ParquetFormat,
  "DatasetCompression.BZip2": DatasetBZip2Compression,
  "DatasetCompression.GZip": DatasetGZipCompression,
  "DatasetCompression.Deflate": DatasetDeflateCompression,
  "DatasetCompression.ZipDeflate": DatasetZipDeflateCompression,
  "DatasetCompression.Tar": DatasetTarCompression,
  "DatasetCompression.TarGZip": DatasetTarGZipCompression,
  "CustomSetupBase.CmdkeySetup": CmdkeySetup,
  "CustomSetupBase.EnvironmentVariableSetup": EnvironmentVariableSetup,
  "CustomSetupBase.ComponentSetup": ComponentSetup,
  "CustomSetupBase.AzPowerShellSetup": AzPowerShellSetup,
  "LinkedIntegrationRuntimeType.Key": LinkedIntegrationRuntimeKeyAuthorization,
  "LinkedIntegrationRuntimeType.RBAC": LinkedIntegrationRuntimeRbacAuthorization,
  "WebLinkedServiceTypeProperties.Anonymous": WebAnonymousAuthentication,
  "WebLinkedServiceTypeProperties.Basic": WebBasicAuthentication,
  "WebLinkedServiceTypeProperties.ClientCertificate": WebClientCertificateAuthentication,
  "StoreReadSettings.AzureBlobStorageReadSettings": AzureBlobStorageReadSettings,
  "StoreReadSettings.AzureBlobFSReadSettings": AzureBlobFSReadSettings,
  "StoreReadSettings.AzureDataLakeStoreReadSettings": AzureDataLakeStoreReadSettings,
  "StoreReadSettings.AmazonS3ReadSettings": AmazonS3ReadSettings,
  "StoreReadSettings.FileServerReadSettings": FileServerReadSettings,
  "StoreReadSettings.AzureFileStorageReadSettings": AzureFileStorageReadSettings,
  "StoreReadSettings.AmazonS3CompatibleReadSettings": AmazonS3CompatibleReadSettings,
  "StoreReadSettings.OracleCloudStorageReadSettings": OracleCloudStorageReadSettings,
  "StoreReadSettings.GoogleCloudStorageReadSettings": GoogleCloudStorageReadSettings,
  "StoreReadSettings.FtpReadSettings": FtpReadSettings,
  "StoreReadSettings.SftpReadSettings": SftpReadSettings,
  "StoreReadSettings.HttpReadSettings": HttpReadSettings,
  "StoreReadSettings.HdfsReadSettings": HdfsReadSettings,
  "StoreWriteSettings.SftpWriteSettings": SftpWriteSettings,
  "StoreWriteSettings.AzureBlobStorageWriteSettings": AzureBlobStorageWriteSettings,
  "StoreWriteSettings.AzureBlobFSWriteSettings": AzureBlobFSWriteSettings,
  "StoreWriteSettings.AzureDataLakeStoreWriteSettings": AzureDataLakeStoreWriteSettings,
  "StoreWriteSettings.FileServerWriteSettings": FileServerWriteSettings,
  "StoreWriteSettings.AzureFileStorageWriteSettings": AzureFileStorageWriteSettings,
  "FormatReadSettings.DelimitedTextReadSettings": DelimitedTextReadSettings,
  "FormatReadSettings.JsonReadSettings": JsonReadSettings,
  "FormatReadSettings.XmlReadSettings": XmlReadSettings,
  "FormatReadSettings.BinaryReadSettings": BinaryReadSettings,
  "CompressionReadSettings.ZipDeflateReadSettings": ZipDeflateReadSettings,
  "CompressionReadSettings.TarReadSettings": TarReadSettings,
  "CompressionReadSettings.TarGZipReadSettings": TarGZipReadSettings,
  "FormatWriteSettings.AvroWriteSettings": AvroWriteSettings,
  "FormatWriteSettings.OrcWriteSettings": OrcWriteSettings,
  "FormatWriteSettings.ParquetWriteSettings": ParquetWriteSettings,
  "FormatWriteSettings.DelimitedTextWriteSettings": DelimitedTextWriteSettings,
  "FormatWriteSettings.JsonWriteSettings": JsonWriteSettings,
  "CopySource.AvroSource": AvroSource,
  "CopySource.ExcelSource": ExcelSource,
  "CopySource.ParquetSource": ParquetSource,
  "CopySource.DelimitedTextSource": DelimitedTextSource,
  "CopySource.JsonSource": JsonSource,
  "CopySource.XmlSource": XmlSource,
  "CopySource.OrcSource": OrcSource,
  "CopySource.BinarySource": BinarySource,
  "CopySource.TabularSource": TabularSource,
  "CopySource.BlobSource": BlobSource,
  "CopySource.DocumentDbCollectionSource": DocumentDbCollectionSource,
  "CopySource.CosmosDbSqlApiSource": CosmosDbSqlApiSource,
  "CopySource.DynamicsSource": DynamicsSource,
  "CopySource.DynamicsCrmSource": DynamicsCrmSource,
  "CopySource.CommonDataServiceForAppsSource": CommonDataServiceForAppsSource,
  "CopySource.RelationalSource": RelationalSource,
  "CopySource.MicrosoftAccessSource": MicrosoftAccessSource,
  "CopySource.ODataSource": ODataSource,
  "CopySource.SalesforceServiceCloudSource": SalesforceServiceCloudSource,
  "CopySource.RestSource": RestSource,
  "CopySource.FileSystemSource": FileSystemSource,
  "CopySource.HdfsSource": HdfsSource,
  "CopySource.AzureDataExplorerSource": AzureDataExplorerSource,
  "CopySource.OracleSource": OracleSource,
  "CopySource.AmazonRdsForOracleSource": AmazonRdsForOracleSource,
  "CopySource.WebSource": WebSource,
  "CopySource.MongoDbSource": MongoDbSource,
  "CopySource.MongoDbAtlasSource": MongoDbAtlasSource,
  "CopySource.MongoDbV2Source": MongoDbV2Source,
  "CopySource.CosmosDbMongoDbApiSource": CosmosDbMongoDbApiSource,
  "CopySource.Office365Source": Office365Source,
  "CopySource.AzureDataLakeStoreSource": AzureDataLakeStoreSource,
  "CopySource.AzureBlobFSSource": AzureBlobFSSource,
  "CopySource.HttpSource": HttpSource,
  "CopySource.SnowflakeSource": SnowflakeSource,
  "CopySource.AzureDatabricksDeltaLakeSource": AzureDatabricksDeltaLakeSource,
  "CopySource.SharePointOnlineListSource": SharePointOnlineListSource,
  "CopySink.DelimitedTextSink": DelimitedTextSink,
  "CopySink.JsonSink": JsonSink,
  "CopySink.OrcSink": OrcSink,
  "CopySink.RestSink": RestSink,
  "CopySink.AzurePostgreSqlSink": AzurePostgreSqlSink,
  "CopySink.AzureMySqlSink": AzureMySqlSink,
  "CopySink.AzureDatabricksDeltaLakeSink": AzureDatabricksDeltaLakeSink,
  "CopySink.SapCloudForCustomerSink": SapCloudForCustomerSink,
  "CopySink.AzureQueueSink": AzureQueueSink,
  "CopySink.AzureTableSink": AzureTableSink,
  "CopySink.AvroSink": AvroSink,
  "CopySink.ParquetSink": ParquetSink,
  "CopySink.BinarySink": BinarySink,
  "CopySink.BlobSink": BlobSink,
  "CopySink.FileSystemSink": FileSystemSink,
  "CopySink.DocumentDbCollectionSink": DocumentDbCollectionSink,
  "CopySink.CosmosDbSqlApiSink": CosmosDbSqlApiSink,
  "CopySink.SqlSink": SqlSink,
  "CopySink.SqlServerSink": SqlServerSink,
  "CopySink.AzureSqlSink": AzureSqlSink,
  "CopySink.SqlMISink": SqlMISink,
  "CopySink.SqlDWSink": SqlDWSink,
  "CopySink.SnowflakeSink": SnowflakeSink,
  "CopySink.OracleSink": OracleSink,
  "CopySink.AzureDataLakeStoreSink": AzureDataLakeStoreSink,
  "CopySink.AzureBlobFSSink": AzureBlobFSSink,
  "CopySink.AzureSearchIndexSink": AzureSearchIndexSink,
  "CopySink.OdbcSink": OdbcSink,
  "CopySink.InformixSink": InformixSink,
  "CopySink.MicrosoftAccessSink": MicrosoftAccessSink,
  "CopySink.DynamicsSink": DynamicsSink,
  "CopySink.DynamicsCrmSink": DynamicsCrmSink,
  "CopySink.CommonDataServiceForAppsSink": CommonDataServiceForAppsSink,
  "CopySink.AzureDataExplorerSink": AzureDataExplorerSink,
  "CopySink.SalesforceSink": SalesforceSink,
  "CopySink.SalesforceServiceCloudSink": SalesforceServiceCloudSink,
  "CopySink.MongoDbAtlasSink": MongoDbAtlasSink,
  "CopySink.MongoDbV2Sink": MongoDbV2Sink,
  "CopySink.CosmosDbMongoDbApiSink": CosmosDbMongoDbApiSink,
  "ExportSettings.SnowflakeExportCopyCommand": SnowflakeExportCopyCommand,
  "ExportSettings.AzureDatabricksDeltaLakeExportCommand": AzureDatabricksDeltaLakeExportCommand,
  "ImportSettings.AzureDatabricksDeltaLakeImportCommand": AzureDatabricksDeltaLakeImportCommand,
  "ImportSettings.SnowflakeImportCopyCommand": SnowflakeImportCopyCommand,
  "CopyTranslator.TabularTranslator": TabularTranslator,
  "DependencyReference.TriggerDependencyReference": TriggerDependencyReference,
  "DependencyReference.SelfDependencyTumblingWindowTriggerReference": SelfDependencyTumblingWindowTriggerReference,
  "Activity.ExecutePipeline": ExecutePipelineActivity,
  "Activity.IfCondition": IfConditionActivity,
  "Activity.Switch": SwitchActivity,
  "Activity.ForEach": ForEachActivity,
  "Activity.Wait": WaitActivity,
  "Activity.Until": UntilActivity,
  "Activity.Validation": ValidationActivity,
  "Activity.Filter": FilterActivity,
  "Activity.SetVariable": SetVariableActivity,
  "Activity.AppendVariable": AppendVariableActivity,
  "Activity.WebHook": WebHookActivity,
  "Activity.Copy": CopyActivity,
  "Activity.HDInsightHive": HDInsightHiveActivity,
  "Activity.HDInsightPig": HDInsightPigActivity,
  "Activity.HDInsightMapReduce": HDInsightMapReduceActivity,
  "Activity.HDInsightStreaming": HDInsightStreamingActivity,
  "Activity.HDInsightSpark": HDInsightSparkActivity,
  "Activity.ExecuteSSISPackage": ExecuteSsisPackageActivity,
  "Activity.Custom": CustomActivity,
  "Activity.SqlServerStoredProcedure": SqlServerStoredProcedureActivity,
  "Activity.Delete": DeleteActivity,
  "Activity.AzureDataExplorerCommand": AzureDataExplorerCommandActivity,
  "Activity.Lookup": LookupActivity,
  "Activity.WebActivity": WebActivity,
  "Activity.GetMetadata": GetMetadataActivity,
  "Activity.AzureMLBatchExecution": AzureMLBatchExecutionActivity,
  "Activity.AzureMLUpdateResource": AzureMLUpdateResourceActivity,
  "Activity.AzureMLExecutePipeline": AzureMLExecutePipelineActivity,
  "Activity.DataLakeAnalyticsU-SQL": DataLakeAnalyticsUsqlActivity,
  "Activity.DatabricksNotebook": DatabricksNotebookActivity,
  "Activity.DatabricksSparkJar": DatabricksSparkJarActivity,
  "Activity.DatabricksSparkPython": DatabricksSparkPythonActivity,
  "Activity.AzureFunctionActivity": AzureFunctionActivity,
  "Activity.ExecuteDataFlow": ExecuteDataFlowActivity,
  "Trigger.ScheduleTrigger": ScheduleTrigger,
  "Trigger.BlobTrigger": BlobTrigger,
  "Trigger.BlobEventsTrigger": BlobEventsTrigger,
  "Trigger.CustomEventsTrigger": CustomEventsTrigger,
  "CopySource.AzureTableSource": AzureTableSource,
  "CopySource.InformixSource": InformixSource,
  "CopySource.Db2Source": Db2Source,
  "CopySource.OdbcSource": OdbcSource,
  "CopySource.MySqlSource": MySqlSource,
  "CopySource.PostgreSqlSource": PostgreSqlSource,
  "CopySource.SybaseSource": SybaseSource,
  "CopySource.SapBwSource": SapBwSource,
  "CopySource.SalesforceSource": SalesforceSource,
  "CopySource.SapCloudForCustomerSource": SapCloudForCustomerSource,
  "CopySource.SapEccSource": SapEccSource,
  "CopySource.SapHanaSource": SapHanaSource,
  "CopySource.SapOpenHubSource": SapOpenHubSource,
  "CopySource.SapTableSource": SapTableSource,
  "CopySource.SqlSource": SqlSource,
  "CopySource.SqlServerSource": SqlServerSource,
  "CopySource.AmazonRdsForSqlServerSource": AmazonRdsForSqlServerSource,
  "CopySource.AzureSqlSource": AzureSqlSource,
  "CopySource.SqlMISource": SqlMISource,
  "CopySource.SqlDWSource": SqlDWSource,
  "CopySource.AzureMySqlSource": AzureMySqlSource,
  "CopySource.TeradataSource": TeradataSource,
  "CopySource.CassandraSource": CassandraSource,
  "CopySource.AmazonMWSSource": AmazonMWSSource,
  "CopySource.AzurePostgreSqlSource": AzurePostgreSqlSource,
  "CopySource.ConcurSource": ConcurSource,
  "CopySource.CouchbaseSource": CouchbaseSource,
  "CopySource.DrillSource": DrillSource,
  "CopySource.EloquaSource": EloquaSource,
  "CopySource.GoogleBigQuerySource": GoogleBigQuerySource,
  "CopySource.GreenplumSource": GreenplumSource,
  "CopySource.HBaseSource": HBaseSource,
  "CopySource.HiveSource": HiveSource,
  "CopySource.HubspotSource": HubspotSource,
  "CopySource.ImpalaSource": ImpalaSource,
  "CopySource.JiraSource": JiraSource,
  "CopySource.MagentoSource": MagentoSource,
  "CopySource.MariaDBSource": MariaDBSource,
  "CopySource.AzureMariaDBSource": AzureMariaDBSource,
  "CopySource.MarketoSource": MarketoSource,
  "CopySource.PaypalSource": PaypalSource,
  "CopySource.PhoenixSource": PhoenixSource,
  "CopySource.PrestoSource": PrestoSource,
  "CopySource.QuickBooksSource": QuickBooksSource,
  "CopySource.ServiceNowSource": ServiceNowSource,
  "CopySource.ShopifySource": ShopifySource,
  "CopySource.SparkSource": SparkSource,
  "CopySource.SquareSource": SquareSource,
  "CopySource.XeroSource": XeroSource,
  "CopySource.ZohoSource": ZohoSource,
  "CopySource.NetezzaSource": NetezzaSource,
  "CopySource.VerticaSource": VerticaSource,
  "CopySource.SalesforceMarketingCloudSource": SalesforceMarketingCloudSource,
  "CopySource.ResponsysSource": ResponsysSource,
  "CopySource.DynamicsAXSource": DynamicsAXSource,
  "CopySource.OracleServiceCloudSource": OracleServiceCloudSource,
  "CopySource.GoogleAdWordsSource": GoogleAdWordsSource,
  "CopySource.AmazonRedshiftSource": AmazonRedshiftSource,
  "DependencyReference.TumblingWindowTriggerDependencyReference": TumblingWindowTriggerDependencyReference
};
