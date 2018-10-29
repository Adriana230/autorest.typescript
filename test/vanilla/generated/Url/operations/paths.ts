/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlTestServiceContext } from "../autoRestUrlTestServiceContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestUrlTestServiceContext;

  /**
   * Create a Paths.
   * @param {AutoRestUrlTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestServiceContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getBooleanTrue(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanTrue(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getBooleanTrue(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getBooleanTrue(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getBooleanTrueOperationSpec,
      callback);
  }

  /**
   * Get false Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getBooleanFalse(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanFalse(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getBooleanFalse(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getBooleanFalse(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getBooleanFalseOperationSpec,
      callback);
  }

  /**
   * Get '1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getIntOneMillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntOneMillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getIntOneMillion(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getIntOneMillion(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getIntOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '-1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getIntNegativeOneMillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntNegativeOneMillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getIntNegativeOneMillion(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getIntNegativeOneMillion(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getIntNegativeOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getTenBillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getTenBillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getTenBillion(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getTenBillion(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getNegativeTenBillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getNegativeTenBillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  getNegativeTenBillion(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  getNegativeTenBillion(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      getNegativeTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '1.034E+20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  floatScientificPositive(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificPositive(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  floatScientificPositive(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  floatScientificPositive(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      floatScientificPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  floatScientificNegative(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificNegative(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  floatScientificNegative(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  floatScientificNegative(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      floatScientificNegativeOperationSpec,
      callback);
  }

  /**
   * Get '9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  doubleDecimalPositive(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalPositive(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  doubleDecimalPositive(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalPositive(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      doubleDecimalPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  doubleDecimalNegative(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalNegative(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  doubleDecimalNegative(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalNegative(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      doubleDecimalNegativeOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringUnicode(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUnicode(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  stringUnicode(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  stringUnicode(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      stringUnicodeOperationSpec,
      callback);
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringUrlEncoded(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUrlEncoded(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  stringUrlEncoded(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  stringUrlEncoded(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      stringUrlEncodedOperationSpec,
      callback);
  }

  /**
   * Get ''
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringEmpty(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  stringEmpty(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  stringEmpty(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      stringEmptyOperationSpec,
      callback);
  }

  /**
   * Get null (should throw)
   * @param stringPath null string value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringNull(stringPath: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param stringPath null string value
   * @param callback The callback
   */
  stringNull(stringPath: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param stringPath null string value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  stringNull(stringPath: string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  stringNull(stringPath: string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        stringPath,
        optionsOrCallback
      },
      stringNullOperationSpec,
      callback);
  }

  /**
   * Get using uri with 'green color' in path parameter
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enumValid(enumPath: Models.UriColor, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param callback The callback
   */
  enumValid(enumPath: Models.UriColor, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  enumValid(enumPath: Models.UriColor, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  enumValid(enumPath: Models.UriColor, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        optionsOrCallback
      },
      enumValidOperationSpec,
      callback);
  }

  /**
   * Get null (should throw on the client before the request is sent on wire)
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enumNull(enumPath: Models.UriColor, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param callback The callback
   */
  enumNull(enumPath: Models.UriColor, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  enumNull(enumPath: Models.UriColor, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  enumNull(enumPath: Models.UriColor, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        optionsOrCallback
      },
      enumNullOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteMultiByte(bytePath: Uint8Array, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param callback The callback
   */
  byteMultiByte(bytePath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  byteMultiByte(bytePath: Uint8Array, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  byteMultiByte(bytePath: Uint8Array, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        optionsOrCallback
      },
      byteMultiByteOperationSpec,
      callback);
  }

  /**
   * Get '' as byte array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteEmpty(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  byteEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  byteEmpty(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  byteEmpty(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      byteEmptyOperationSpec,
      callback);
  }

  /**
   * Get null as byte array (should throw)
   * @param bytePath null as byte array (should throw)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteNull(bytePath: Uint8Array, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param bytePath null as byte array (should throw)
   * @param callback The callback
   */
  byteNull(bytePath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param bytePath null as byte array (should throw)
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  byteNull(bytePath: Uint8Array, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  byteNull(bytePath: Uint8Array, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        optionsOrCallback
      },
      byteNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01' as date
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  dateValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  dateValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      dateValidOperationSpec,
      callback);
  }

  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   * @param datePath null as date (should throw)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateNull(datePath: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datePath null as date (should throw)
   * @param callback The callback
   */
  dateNull(datePath: Date | string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datePath null as date (should throw)
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  dateNull(datePath: Date | string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  dateNull(datePath: Date | string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datePath,
        optionsOrCallback
      },
      dateNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateTimeValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateTimeValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  dateTimeValid(optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  dateTimeValid(optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        optionsOrCallback
      },
      dateTimeValidOperationSpec,
      callback);
  }

  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   * @param dateTimePath null as date-time
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateTimeNull(dateTimePath: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param dateTimePath null as date-time
   * @param callback The callback
   */
  dateTimeNull(dateTimePath: Date | string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param dateTimePath null as date-time
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  dateTimeNull(dateTimePath: Date | string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  dateTimeNull(dateTimePath: Date | string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        dateTimePath,
        optionsOrCallback
      },
      dateTimeNullOperationSpec,
      callback);
  }

  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   * @param base64UrlPath base64url encoded value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  base64Url(base64UrlPath: Uint8Array, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param base64UrlPath base64url encoded value
   * @param callback The callback
   */
  base64Url(base64UrlPath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param base64UrlPath base64url encoded value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  base64Url(base64UrlPath: Uint8Array, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  base64Url(base64UrlPath: Uint8Array, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        base64UrlPath,
        optionsOrCallback
      },
      base64UrlOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * csv-array format
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayCsvInPath(arrayPath: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param callback The callback
   */
  arrayCsvInPath(arrayPath: string[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  arrayCsvInPath(arrayPath: string[], optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  arrayCsvInPath(arrayPath: string[], optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        arrayPath,
        optionsOrCallback
      },
      arrayCsvInPathOperationSpec,
      callback);
  }

  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   * @param unixTimeUrlPath Unix time encoded value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param unixTimeUrlPath Unix time encoded value
   * @param callback The callback
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param unixTimeUrlPath Unix time encoded value
   * @param optionsOrCallback The optional parameters or the callback
   * @param callback The callback
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, optionsOrCallback: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback: msRest.ServiceCallback<void>): void;
  unixTimeUrl(unixTimeUrlPath: Date | string, optionsOrCallback?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        unixTimeUrlPath,
        optionsOrCallback
      },
      unixTimeUrlOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getBooleanTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/true/{boolPath}",
  urlParameters: [
    Parameters.boolPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBooleanFalseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/false/{boolPath}",
  urlParameters: [
    Parameters.boolPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1000000/{intPath}",
  urlParameters: [
    Parameters.intPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntNegativeOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/-1000000/{intPath}",
  urlParameters: [
    Parameters.intPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNegativeTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/-10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/1.034E+20/{floatPath}",
  urlParameters: [
    Parameters.floatPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/-1.034E-20/{floatPath}",
  urlParameters: [
    Parameters.floatPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/-9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUnicodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/unicode/{stringPath}",
  urlParameters: [
    Parameters.stringPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUrlEncodedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
  urlParameters: [
    Parameters.stringPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/empty/{stringPath}",
  urlParameters: [
    Parameters.stringPath2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{stringPath}",
  urlParameters: [
    Parameters.stringPath3
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/enum/green%20color/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteMultiByteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/multibyte/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/empty/{bytePath}",
  urlParameters: [
    Parameters.bytePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/null/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/2012-01-01/{datePath}",
  urlParameters: [
    Parameters.datePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/null/{datePath}",
  urlParameters: [
    Parameters.datePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/null/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const base64UrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/bG9yZW0/{base64UrlPath}",
  urlParameters: [
    Parameters.base64UrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayCsvInPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
  urlParameters: [
    Parameters.arrayPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const unixTimeUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1460505600/{unixTimeUrlPath}",
  urlParameters: [
    Parameters.unixTimeUrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
