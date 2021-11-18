/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PetAPTrue,
  PetsCreateAPTrueOptionalParams,
  PetsCreateAPTrueResponse,
  CatAPTrue,
  PetsCreateCatAPTrueOptionalParams,
  PetsCreateCatAPTrueResponse,
  PetAPObject,
  PetsCreateAPObjectOptionalParams,
  PetsCreateAPObjectResponse,
  PetAPString,
  PetsCreateAPStringOptionalParams,
  PetsCreateAPStringResponse,
  PetAPInProperties,
  PetsCreateAPInPropertiesOptionalParams,
  PetsCreateAPInPropertiesResponse,
  PetAPInPropertiesWithAPString,
  PetsCreateAPInPropertiesWithAPStringOptionalParams,
  PetsCreateAPInPropertiesWithAPStringResponse
} from "../models";

/** Interface representing a Pets. */
export interface Pets {
  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createAPTrue(
    createParameters: PetAPTrue,
    options?: PetsCreateAPTrueOptionalParams
  ): Promise<PetsCreateAPTrueResponse>;
  /**
   * Create a CatAPTrue which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createCatAPTrue(
    createParameters: CatAPTrue,
    options?: PetsCreateCatAPTrueOptionalParams
  ): Promise<PetsCreateCatAPTrueResponse>;
  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createAPObject(
    createParameters: PetAPObject,
    options?: PetsCreateAPObjectOptionalParams
  ): Promise<PetsCreateAPObjectResponse>;
  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createAPString(
    createParameters: PetAPString,
    options?: PetsCreateAPStringOptionalParams
  ): Promise<PetsCreateAPStringResponse>;
  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createAPInProperties(
    createParameters: PetAPInProperties,
    options?: PetsCreateAPInPropertiesOptionalParams
  ): Promise<PetsCreateAPInPropertiesResponse>;
  /**
   * Create a Pet which contains more properties than what is defined.
   * @param createParameters
   * @param options The options parameters.
   */
  createAPInPropertiesWithAPString(
    createParameters: PetAPInPropertiesWithAPString,
    options?: PetsCreateAPInPropertiesWithAPStringOptionalParams
  ): Promise<PetsCreateAPInPropertiesWithAPStringResponse>;
}
