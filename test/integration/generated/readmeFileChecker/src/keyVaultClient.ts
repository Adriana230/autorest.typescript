import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { KeyVaultClientContext } from "./keyVaultClientContext";
import {
  KeyVaultClientOptionalParams,
  ApiVersion72Preview,
  KeyVaultClientSetSecretOptionalParams,
  KeyVaultClientSetSecretResponse,
  KeyVaultClientDeleteSecretResponse,
  KeyVaultClientUpdateSecretOptionalParams,
  KeyVaultClientUpdateSecretResponse,
  KeyVaultClientGetSecretResponse,
  KeyVaultClientGetSecretsOptionalParams,
  KeyVaultClientGetSecretsResponse,
  KeyVaultClientGetSecretVersionsOptionalParams,
  KeyVaultClientGetSecretVersionsResponse,
  KeyVaultClientGetDeletedSecretsOptionalParams,
  KeyVaultClientGetDeletedSecretsResponse,
  KeyVaultClientGetDeletedSecretResponse,
  KeyVaultClientRecoverDeletedSecretResponse,
  KeyVaultClientBackupSecretResponse,
  KeyVaultClientRestoreSecretResponse,
  KeyVaultClientGetSecretsNextOptionalParams,
  KeyVaultClientGetSecretsNextResponse,
  KeyVaultClientGetSecretVersionsNextOptionalParams,
  KeyVaultClientGetSecretVersionsNextResponse,
  KeyVaultClientGetDeletedSecretsNextOptionalParams,
  KeyVaultClientGetDeletedSecretsNextResponse
} from "./models";

export class KeyVaultClient extends KeyVaultClientContext {
  /**
   * Initializes a new instance of the KeyVaultClient class.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    apiVersion: ApiVersion72Preview,
    options?: KeyVaultClientOptionalParams
  ) {
    super(apiVersion, options);
  }

  /**
   *  The SET operation adds a secret to the Azure Key Vault. If the named secret already exists, Azure
   * Key Vault creates a new version of that secret. This operation requires the secrets/set permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param value The value of the secret.
   * @param options The options parameters.
   */
  setSecret(
    vaultBaseUrl: string,
    secretName: string,
    value: string,
    options?: KeyVaultClientSetSecretOptionalParams
  ): Promise<KeyVaultClientSetSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      value,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      setSecretOperationSpec
    ) as Promise<KeyVaultClientSetSecretResponse>;
  }

  /**
   * The DELETE operation applies to any secret stored in Azure Key Vault. DELETE cannot be applied to an
   * individual version of a secret. This operation requires the secrets/delete permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  deleteSecret(
    vaultBaseUrl: string,
    secretName: string,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientDeleteSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      deleteSecretOperationSpec
    ) as Promise<KeyVaultClientDeleteSecretResponse>;
  }

  /**
   * The UPDATE operation changes specified attributes of an existing stored secret. Attributes that are
   * not specified in the request are left unchanged. The value of a secret itself cannot be changed.
   * This operation requires the secrets/set permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param secretVersion The version of the secret.
   * @param options The options parameters.
   */
  updateSecret(
    vaultBaseUrl: string,
    secretName: string,
    secretVersion: string,
    options?: KeyVaultClientUpdateSecretOptionalParams
  ): Promise<KeyVaultClientUpdateSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      secretVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      updateSecretOperationSpec
    ) as Promise<KeyVaultClientUpdateSecretResponse>;
  }

  /**
   * The GET operation is applicable to any secret stored in Azure Key Vault. This operation requires the
   * secrets/get permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param secretVersion The version of the secret. This URI fragment is optional. If not specified, the
   *                      latest version of the secret is returned.
   * @param options The options parameters.
   */
  getSecret(
    vaultBaseUrl: string,
    secretName: string,
    secretVersion: string,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientGetSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      secretVersion,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getSecretOperationSpec
    ) as Promise<KeyVaultClientGetSecretResponse>;
  }

  /**
   * The Get Secrets operation is applicable to the entire vault. However, only the base secret
   * identifier and its attributes are provided in the response. Individual secret versions are not
   * listed in the response. This operation requires the secrets/list permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param options The options parameters.
   */
  getSecrets(
    vaultBaseUrl: string,
    options?: KeyVaultClientGetSecretsOptionalParams
  ): Promise<KeyVaultClientGetSecretsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getSecretsOperationSpec
    ) as Promise<KeyVaultClientGetSecretsResponse>;
  }

  /**
   * The full secret identifier and attributes are provided in the response. No values are returned for
   * the secrets. This operations requires the secrets/list permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  getSecretVersions(
    vaultBaseUrl: string,
    secretName: string,
    options?: KeyVaultClientGetSecretVersionsOptionalParams
  ): Promise<KeyVaultClientGetSecretVersionsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getSecretVersionsOperationSpec
    ) as Promise<KeyVaultClientGetSecretVersionsResponse>;
  }

  /**
   * The Get Deleted Secrets operation returns the secrets that have been deleted for a vault enabled for
   * soft-delete. This operation requires the secrets/list permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param options The options parameters.
   */
  getDeletedSecrets(
    vaultBaseUrl: string,
    options?: KeyVaultClientGetDeletedSecretsOptionalParams
  ): Promise<KeyVaultClientGetDeletedSecretsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getDeletedSecretsOperationSpec
    ) as Promise<KeyVaultClientGetDeletedSecretsResponse>;
  }

  /**
   * The Get Deleted Secret operation returns the specified deleted secret along with its attributes.
   * This operation requires the secrets/get permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  getDeletedSecret(
    vaultBaseUrl: string,
    secretName: string,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientGetDeletedSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getDeletedSecretOperationSpec
    ) as Promise<KeyVaultClientGetDeletedSecretResponse>;
  }

  /**
   * The purge deleted secret operation removes the secret permanently, without the possibility of
   * recovery. This operation can only be enabled on a soft-delete enabled vault. This operation requires
   * the secrets/purge permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  purgeDeletedSecret(
    vaultBaseUrl: string,
    secretName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      purgeDeletedSecretOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Recovers the deleted secret in the specified vault. This operation can only be performed on a
   * soft-delete enabled vault. This operation requires the secrets/recover permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the deleted secret.
   * @param options The options parameters.
   */
  recoverDeletedSecret(
    vaultBaseUrl: string,
    secretName: string,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientRecoverDeletedSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      recoverDeletedSecretOperationSpec
    ) as Promise<KeyVaultClientRecoverDeletedSecretResponse>;
  }

  /**
   * Requests that a backup of the specified secret be downloaded to the client. All versions of the
   * secret will be downloaded. This operation requires the secrets/backup permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  backupSecret(
    vaultBaseUrl: string,
    secretName: string,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientBackupSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      backupSecretOperationSpec
    ) as Promise<KeyVaultClientBackupSecretResponse>;
  }

  /**
   * Restores a backed up secret, and all its versions, to a vault. This operation requires the
   * secrets/restore permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretBundleBackup The backup blob associated with a secret bundle.
   * @param options The options parameters.
   */
  restoreSecret(
    vaultBaseUrl: string,
    secretBundleBackup: Uint8Array,
    options?: coreHttp.OperationOptions
  ): Promise<KeyVaultClientRestoreSecretResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretBundleBackup,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      restoreSecretOperationSpec
    ) as Promise<KeyVaultClientRestoreSecretResponse>;
  }

  /**
   * GetSecretsNext
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param nextLink The nextLink from the previous successful call to the GetSecrets method.
   * @param options The options parameters.
   */
  getSecretsNext(
    vaultBaseUrl: string,
    nextLink: string,
    options?: KeyVaultClientGetSecretsNextOptionalParams
  ): Promise<KeyVaultClientGetSecretsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getSecretsNextOperationSpec
    ) as Promise<KeyVaultClientGetSecretsNextResponse>;
  }

  /**
   * GetSecretVersionsNext
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param secretName The name of the secret.
   * @param nextLink The nextLink from the previous successful call to the GetSecretVersions method.
   * @param options The options parameters.
   */
  getSecretVersionsNext(
    vaultBaseUrl: string,
    secretName: string,
    nextLink: string,
    options?: KeyVaultClientGetSecretVersionsNextOptionalParams
  ): Promise<KeyVaultClientGetSecretVersionsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      secretName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getSecretVersionsNextOperationSpec
    ) as Promise<KeyVaultClientGetSecretVersionsNextResponse>;
  }

  /**
   * GetDeletedSecretsNext
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param nextLink The nextLink from the previous successful call to the GetDeletedSecrets method.
   * @param options The options parameters.
   */
  getDeletedSecretsNext(
    vaultBaseUrl: string,
    nextLink: string,
    options?: KeyVaultClientGetDeletedSecretsNextOptionalParams
  ): Promise<KeyVaultClientGetDeletedSecretsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      vaultBaseUrl,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.sendOperationRequest(
      operationArguments,
      getDeletedSecretsNextOperationSpec
    ) as Promise<KeyVaultClientGetDeletedSecretsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const setSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  requestBody: {
    parameterPath: {
      value: ["value"],
      tags: ["options", "tags"],
      contentType: ["options", "contentType"],
      secretAttributes: ["options", "secretAttributes"]
    },
    mapper: { ...Mappers.SecretSetParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}/{secret-version}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  requestBody: {
    parameterPath: {
      contentType: ["options", "contentType"],
      secretAttributes: ["options", "secretAttributes"],
      tags: ["options", "tags"]
    },
    mapper: { ...Mappers.SecretUpdateParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.vaultBaseUrl,
    Parameters.secretName1,
    Parameters.secretVersion
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}/{secret-version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.vaultBaseUrl,
    Parameters.secretName1,
    Parameters.secretVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSecretsOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [Parameters.vaultBaseUrl],
  headerParameters: [Parameters.accept],
  serializer
};
const getSecretVersionsOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedSecretsOperationSpec: coreHttp.OperationSpec = {
  path: "/deletedsecrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [Parameters.vaultBaseUrl],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/deletedsecrets/{secret-name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const purgeDeletedSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/deletedsecrets/{secret-name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const recoverDeletedSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/deletedsecrets/{secret-name}/recover",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const backupSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/{secret-name}/backup",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BackupSecretResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.secretName1],
  headerParameters: [Parameters.accept],
  serializer
};
const restoreSecretOperationSpec: coreHttp.OperationSpec = {
  path: "/secrets/restore",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SecretBundle
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  requestBody: {
    parameterPath: { secretBundleBackup: ["secretBundleBackup"] },
    mapper: { ...Mappers.SecretRestoreParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.vaultBaseUrl],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getSecretsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getSecretVersionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [
    Parameters.vaultBaseUrl,
    Parameters.secretName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedSecretsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSecretListResult
    },
    default: {
      bodyMapper: Mappers.KeyVaultError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [Parameters.vaultBaseUrl, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
