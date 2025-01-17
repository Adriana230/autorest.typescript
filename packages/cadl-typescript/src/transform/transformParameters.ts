// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ImportKind,
  ObjectSchema,
  OperationParameter,
  ParameterBodyMetadata,
  ParameterMetadata,
  RLCOptions,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import { Model, Program, Type } from "@cadl-lang/compiler";
import {
  getAllHttpServices,
  HttpOperationParameter,
  HttpOperationParameters
} from "@cadl-lang/rest/http";
import {
  getImportedModelName,
  getTypeName,
  getSchemaForType,
  getBinaryType,
  getFormattedPropertyDoc
} from "../modelUtils.js";
import { isApiVersion } from "../paramUtil.js";
import { getOperationGroupName, isBinaryPayload } from "../operationUtil.js";
import { getResourceOperation } from "@cadl-lang/rest";

export function transformToParameterTypes(
  program: Program,
  importDetails: Map<ImportKind, Set<string>>,
  options?: RLCOptions
): OperationParameter[] {
  const [services, _diagnostics] = getAllHttpServices(program);
  const routes = services.flatMap((service) => service.operations);
  const rlcParameters: OperationParameter[] = [];
  const outputImportedSet = new Set<string>();
  for (const route of routes) {
    const operation = getResourceOperation(program, route.operation);
    const parameters = route.parameters;
    const rlcParameter: OperationParameter = {
      operationGroup: getOperationGroupName(route, options),
      operationName: route.operation.name,
      parameters: []
    };
    // transform query param
    const queryParams = transformQueryParameters(program, parameters);
    // transform path param
    const pathParams = transformPathParameters();
    // transform header param includeing content-type
    const headerParams = transformHeaderParameters(program, parameters);
    // transform body
    let bodyType = undefined;
    if (operation) {
      bodyType = operation.resourceType;
    }
    const bodyParameter = transformBodyParameters(
      program,
      parameters,
      headerParams,
      outputImportedSet,
      bodyType
    );
    rlcParameter.parameters.push({
      parameters: [...queryParams, ...pathParams, ...headerParams],
      body: bodyParameter
    });
    rlcParameters.push(rlcParameter);
  }
  if (outputImportedSet.size > 0) {
    importDetails.set(ImportKind.ParameterInput, outputImportedSet);
  }
  return rlcParameters;
}

function getParameterMetadata(
  program: Program,
  paramType: "query" | "path" | "header",
  parameter: HttpOperationParameter
): ParameterMetadata {
  const schema = getSchemaForType(program, parameter.param.type, [
    SchemaContext.Input,
    SchemaContext.Exception
  ]) as Schema;
  const type = getTypeName(schema);
  const name = getParameterName(parameter.name);
  return {
    type: paramType,
    name,
    param: {
      name,
      type,
      required: !parameter.param.optional,
      description:
        getFormattedPropertyDoc(program, parameter.param, schema) ?? ""
    }
  };
}

function getParameterName(name: string) {
  if (name && name.toLowerCase() === "content-type") {
    return "contentType";
  }
  return `"${name}"`;
}

function transformQueryParameters(
  program: Program,
  parameters: HttpOperationParameters
): ParameterMetadata[] {
  const queryParameters = parameters.parameters.filter(
    (p) => p.type === "query" && !isApiVersion(p)
  );
  if (!queryParameters.length) {
    return [];
  }
  return queryParameters.map((qp) =>
    getParameterMetadata(program, "query", qp)
  );
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns
 */
function transformPathParameters() {
  // TODO
  // issue tracked https://github.com/Azure/autorest.typescript/issues/1521
  return [];
}

function transformHeaderParameters(
  program: Program,
  parameters: HttpOperationParameters
): ParameterMetadata[] {
  const headerParameters = parameters.parameters.filter(
    (p) => p.type === "header"
  );
  if (!headerParameters.length) {
    return [];
  }
  return headerParameters.map((qp) =>
    getParameterMetadata(program, "header", qp)
  );
}

function transformBodyParameters(
  program: Program,
  parameters: HttpOperationParameters,
  headers: ParameterMetadata[],
  importedModels: Set<string>,
  inputBodyType?: Model
): ParameterBodyMetadata | undefined {
  const bodyType =
    (parameters.bodyType ?? parameters.bodyParameter?.type) && inputBodyType
      ? inputBodyType
      : parameters.bodyType ?? parameters.bodyParameter?.type;
  if (!bodyType) {
    return;
  }
  const { hasBinaryContent, hasFormContent } = getBodyDetail(bodyType, headers);

  if (!hasBinaryContent && !hasFormContent) {
    // Case 1: Handle the normal case without binary or form data
    return transformNormalBody(
      program,
      bodyType,
      parameters,
      importedModels,
      headers
    );
  } else if (hasBinaryContent) {
    // Case 2: Handle the binary body
    return transformBinaryBody(program, parameters);
  } else {
    // Case 3: Handle the form data
    return transformMultiFormBody(
      program,
      bodyType,
      parameters,
      importedModels
    );
  }
}

function transformNormalBody(
  program: Program,
  bodyType: Type,
  parameters: HttpOperationParameters,
  importedModels: Set<string>,
  headers: ParameterMetadata[]
) {
  const description = extractDescriptionsFromBody(
    program,
    bodyType,
    parameters
  ).join("\n\n");
  const type = extractNameFromCadlType(
    program,
    bodyType,
    importedModels,
    headers
  );
  const schema = getSchemaForType(program, bodyType);
  return {
    isPartialBody: false,
    body: [
      {
        properties: schema.properties,
        typeName: schema.name,
        name: "body",
        type,
        required: parameters?.bodyParameter?.optional === false,
        description
      }
    ]
  };
}

function transformBinaryBody(
  program: Program,
  parameters: HttpOperationParameters
) {
  const descriptions: string[] = [];
  const description =
    parameters.bodyParameter &&
    getFormattedPropertyDoc(program, parameters.bodyParameter, {});
  if (description) {
    descriptions.push(description!);
  }
  descriptions.push("Value may contain any sequence of octets");
  return {
    isPartialBody: false,
    body: [
      {
        name: "body",
        type: getBinaryType([SchemaContext.Input, SchemaContext.Exception]),
        required: parameters?.bodyParameter?.optional === false,
        description: descriptions.join("\n\n")
      }
    ]
  };
}

function transformMultiFormBody(
  program: Program,
  bodyType: Type,
  parameters: HttpOperationParameters,
  importedModels: Set<string>
): ParameterBodyMetadata | undefined {
  const isModelBody = bodyType.kind === "Model";

  if (!isModelBody) {
    const type = extractNameFromCadlType(program, bodyType, importedModels);
    const description = extractDescriptionsFromBody(
      program,
      bodyType,
      parameters
    ).join("\n\n");
    return {
      isPartialBody: true,
      body: [
        {
          name: "body",
          type,
          required: parameters?.bodyParameter?.optional === false,
          description
        }
      ]
    };
  }

  // If the body is model type we'll spread the properties into body parameters
  const bodyParameters: ParameterBodyMetadata = {
    isPartialBody: true,
    body: []
  };

  for (const [paramName, paramType] of bodyType.properties) {
    let type: string;
    const bodySchema = getSchemaForType(program, paramType.type, [
      SchemaContext.Input,
      SchemaContext.Exception
    ]) as any;
    if (bodySchema?.format === "byte") {
      type = getBinaryType([SchemaContext.Input, SchemaContext.Exception]);
    } else if (bodySchema?.items?.format === "byte") {
      type = `Array<${getBinaryType([
        SchemaContext.Input,
        SchemaContext.Exception
      ])}>`;
    } else {
      type = extractNameFromCadlType(program, paramType.type, importedModels);
    }
    bodyParameters.body!.push({
      name: paramName,
      type,
      required: paramType.optional === false
    });
  }

  return bodyParameters;
}

function getBodyDetail(bodyType: Type, headers: ParameterMetadata[]) {
  const contentTypes: string[] = headers
    .filter((h) => h.name === "contentType")
    .map((h) => h.param.type);
  const hasBinaryContent = contentTypes.some((c) =>
    isBinaryPayload(bodyType, c)
  );
  const hasFormContent = contentTypes.includes(`"multipart/form-data"`);
  return { hasBinaryContent, hasFormContent };
}

function extractNameFromCadlType(
  program: Program,
  cadlType: Type,
  importedModels: Set<string>,
  headers?: ParameterMetadata[]
) {
  const bodySchema = getSchemaForType(program, cadlType, [
    SchemaContext.Input,
    SchemaContext.Exception
  ]) as Schema;
  const importedNames = getImportedModelName(bodySchema);
  if (importedNames) {
    importedNames.forEach(importedModels.add, importedModels);
  }
  let typeName = getTypeName(bodySchema);
  const contentTypes = headers
    ?.filter((h) => h.name === "contentType")
    .map((h) => h.param.type);
  const hasMergeAndPatchType =
    contentTypes &&
    contentTypes.length === 1 &&
    contentTypes[0]?.includes("application/merge-patch+json");
  if (hasMergeAndPatchType && (bodySchema as ObjectSchema).properties) {
    typeName = `${typeName}ResourceMergeAndPatch`;
  }
  return typeName;
}

function extractDescriptionsFromBody(
  program: Program,
  bodyType: Type,
  parameters: HttpOperationParameters
) {
  const description =
    parameters.bodyParameter &&
    getFormattedPropertyDoc(
      program,
      parameters.bodyParameter,
      getSchemaForType(program, bodyType, [
        SchemaContext.Input,
        SchemaContext.Exception
      ])
    );
  return description ? [description] : [];
}
