import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { KeyVaultClientContext } from "./keyVaultClientContext";
import {
  KeyVaultClientOptionalParams,
  ApiVersion72Preview,
  SetSecretOptionalParams,
  SetSecretResponse,
  DeleteSecretOptionalParams,
  DeleteSecretResponse,
  UpdateSecretOptionalParams,
  UpdateSecretResponse,
  GetSecretOptionalParams,
  GetSecretResponse,
  GetSecretsOptionalParams,
  GetSecretsResponse,
  GetSecretVersionsOptionalParams,
  GetSecretVersionsResponse,
  GetDeletedSecretsOptionalParams,
  GetDeletedSecretsResponse,
  GetDeletedSecretOptionalParams,
  GetDeletedSecretResponse,
  PurgeDeletedSecretOptionalParams,
  RecoverDeletedSecretOptionalParams,
  RecoverDeletedSecretResponse,
  BackupSecretOptionalParams,
  BackupSecretResponse,
  RestoreSecretOptionalParams,
  RestoreSecretResponse,
  GetSecretsNextOptionalParams,
  GetSecretsNextResponse,
  GetSecretVersionsNextOptionalParams,
  GetSecretVersionsNextResponse,
  GetDeletedSecretsNextOptionalParams,
  GetDeletedSecretsNextResponse
} from "./models";

/** @internal */
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
    options?: SetSecretOptionalParams
  ): Promise<SetSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, value, options },
      setSecretOperationSpec
    );
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
    options?: DeleteSecretOptionalParams
  ): Promise<DeleteSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      deleteSecretOperationSpec
    );
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
    options?: UpdateSecretOptionalParams
  ): Promise<UpdateSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, secretVersion, options },
      updateSecretOperationSpec
    );
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
    options?: GetSecretOptionalParams
  ): Promise<GetSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, secretVersion, options },
      getSecretOperationSpec
    );
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
    options?: GetSecretsOptionalParams
  ): Promise<GetSecretsResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, options },
      getSecretsOperationSpec
    );
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
    options?: GetSecretVersionsOptionalParams
  ): Promise<GetSecretVersionsResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      getSecretVersionsOperationSpec
    );
  }

  /**
   * The Get Deleted Secrets operation returns the secrets that have been deleted for a vault enabled for
   * soft-delete. This operation requires the secrets/list permission.
   * @param vaultBaseUrl The vault name, for example https://myvault.vault.azure.net.
   * @param options The options parameters.
   */
  getDeletedSecrets(
    vaultBaseUrl: string,
    options?: GetDeletedSecretsOptionalParams
  ): Promise<GetDeletedSecretsResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, options },
      getDeletedSecretsOperationSpec
    );
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
    options?: GetDeletedSecretOptionalParams
  ): Promise<GetDeletedSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      getDeletedSecretOperationSpec
    );
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
    options?: PurgeDeletedSecretOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      purgeDeletedSecretOperationSpec
    );
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
    options?: RecoverDeletedSecretOptionalParams
  ): Promise<RecoverDeletedSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      recoverDeletedSecretOperationSpec
    );
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
    options?: BackupSecretOptionalParams
  ): Promise<BackupSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, options },
      backupSecretOperationSpec
    );
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
    options?: RestoreSecretOptionalParams
  ): Promise<RestoreSecretResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretBundleBackup, options },
      restoreSecretOperationSpec
    );
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
    options?: GetSecretsNextOptionalParams
  ): Promise<GetSecretsNextResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, nextLink, options },
      getSecretsNextOperationSpec
    );
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
    options?: GetSecretVersionsNextOptionalParams
  ): Promise<GetSecretVersionsNextResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, secretName, nextLink, options },
      getSecretVersionsNextOperationSpec
    );
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
    options?: GetDeletedSecretsNextOptionalParams
  ): Promise<GetDeletedSecretsNextResponse> {
    return this.sendOperationRequest(
      { vaultBaseUrl, nextLink, options },
      getDeletedSecretsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const setSecretOperationSpec: coreClient.OperationSpec = {
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
const deleteSecretOperationSpec: coreClient.OperationSpec = {
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
const updateSecretOperationSpec: coreClient.OperationSpec = {
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
const getSecretOperationSpec: coreClient.OperationSpec = {
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
const getSecretsOperationSpec: coreClient.OperationSpec = {
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
const getSecretVersionsOperationSpec: coreClient.OperationSpec = {
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
const getDeletedSecretsOperationSpec: coreClient.OperationSpec = {
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
const getDeletedSecretOperationSpec: coreClient.OperationSpec = {
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
const purgeDeletedSecretOperationSpec: coreClient.OperationSpec = {
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
const recoverDeletedSecretOperationSpec: coreClient.OperationSpec = {
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
const backupSecretOperationSpec: coreClient.OperationSpec = {
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
const restoreSecretOperationSpec: coreClient.OperationSpec = {
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
const getSecretsNextOperationSpec: coreClient.OperationSpec = {
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
const getSecretVersionsNextOperationSpec: coreClient.OperationSpec = {
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
const getDeletedSecretsNextOperationSpec: coreClient.OperationSpec = {
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
