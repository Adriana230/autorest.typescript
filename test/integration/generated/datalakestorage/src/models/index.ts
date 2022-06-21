/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface StorageError {
  /** The service error response object. */
  error?: StorageErrorError;
}

/** The service error response object. */
export interface StorageErrorError {
  /** The service error code. */
  code?: string;
  /** The service error message. */
  message?: string;
}

export interface SetAccessControlRecursiveResponse {
  directoriesSuccessful?: number;
  filesSuccessful?: number;
  failureCount?: number;
  failedEntries?: AclFailedEntry[];
}

export interface AclFailedEntry {
  name?: string;
  type?: string;
  errorMessage?: string;
}

export interface Path {
  name?: string;
  isDirectory?: boolean;
  lastModified?: string;
  eTag?: string;
  contentLength?: number;
  owner?: string;
  group?: string;
  permissions?: string;
}

export interface PathList {
  paths?: Path[];
}

export interface FileSystem {
  name?: string;
  lastModified?: string;
  eTag?: string;
}

/** An enumeration of blobs */
export interface ListBlobsHierarchySegmentResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix?: string;
  marker?: string;
  maxResults?: number;
  delimiter?: string;
  segment: BlobHierarchyListSegment;
  nextMarker?: string;
}

export interface BlobHierarchyListSegment {
  blobPrefixes?: BlobPrefix[];
  blobItems: BlobItemInternal[];
}

export interface BlobPrefix {
  name: string;
}

/** An Azure Storage blob */
export interface BlobItemInternal {
  name: string;
  deleted: boolean;
  snapshot: string;
  versionId?: string;
  isCurrentVersion?: boolean;
  /** Properties of a blob */
  properties: BlobPropertiesInternal;
  deletionId?: string;
}

/** Properties of a blob */
export interface BlobPropertiesInternal {
  creationTime?: Date;
  lastModified: Date;
  etag: string;
  /** Size in bytes */
  contentLength?: number;
  contentType?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMD5?: Uint8Array;
  contentDisposition?: string;
  cacheControl?: string;
  blobSequenceNumber?: number;
  copyId?: string;
  copySource?: string;
  copyProgress?: string;
  copyCompletionTime?: Date;
  copyStatusDescription?: string;
  serverEncrypted?: boolean;
  incrementalCopy?: boolean;
  destinationSnapshot?: string;
  deletedTime?: Date;
  remainingRetentionDays?: number;
  accessTierInferred?: boolean;
  customerProvidedKeySha256?: string;
  /** The name of the encryption scope under which the blob is encrypted. */
  encryptionScope?: string;
  accessTierChangeTime?: Date;
  tagCount?: number;
  expiresOn?: Date;
  isSealed?: boolean;
  lastAccessedOn?: Date;
  deleteTime?: Date;
}

export interface FileSystemList {
  filesystems?: FileSystem[];
}

/** Defines headers for Path_create operation. */
export interface PathCreateHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  eTag?: string;
  /** The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory. */
  continuation?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
}

/** Defines headers for Path_create operation. */
export interface PathCreateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Path_update operation. */
export interface PathUpdateHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  eTag?: string;
  /** The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** Indicates that the service supports requests for partial file content. */
  acceptRanges?: string;
  /** If the Cache-Control request header has previously been set for the resource, that value is returned in this header. */
  cacheControl?: string;
  /** If the Content-Disposition request header has previously been set for the resource, that value is returned in this header. */
  contentDisposition?: string;
  /** If the Content-Encoding request header has previously been set for the resource, that value is returned in this header. */
  contentEncoding?: string;
  /** If the Content-Language request header has previously been set for the resource, that value is returned in this header. */
  contentLanguage?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the file by setting the Range request header. */
  contentRange?: string;
  /** The content type specified for the resource. If no content type was specified, the default content type is application/octet-stream. */
  contentType?: string;
  /** An MD5 hash of the request content. This header is only returned for "Flush" operation. This header is returned so that the client can check for message content integrity. This header refers to the content of the request, not actual file content. */
  contentMD5?: string;
  /** User-defined properties associated with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. */
  properties?: string;
  /** When performing setAccessControlRecursive on a directory, the number of paths that are processed with each invocation is limited.  If the number of paths to be processed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the setAccessControlRecursive operation to continue the setAccessControlRecursive operation on the directory. */
  xMsContinuation?: string;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
}

/** Defines headers for Path_update operation. */
export interface PathUpdateExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Path_lease operation. */
export interface PathLeaseHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file. */
  eTag?: string;
  /** The data and time the file was last modified.  Write operations on the file update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** A successful "renew" action returns the lease ID. */
  leaseId?: string;
}

/** Defines headers for Path_lease operation. */
export interface PathLeaseExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Path_read operation. */
export interface PathReadHeaders {
  /** Indicates that the service supports requests for partial file content. */
  acceptRanges?: string;
  /** If the Cache-Control request header has previously been set for the resource, that value is returned in this header. */
  cacheControl?: string;
  /** If the Content-Disposition request header has previously been set for the resource, that value is returned in this header. */
  contentDisposition?: string;
  /** If the Content-Encoding request header has previously been set for the resource, that value is returned in this header. */
  contentEncoding?: string;
  /** If the Content-Language request header has previously been set for the resource, that value is returned in this header. */
  contentLanguage?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the file by setting the Range request header. */
  contentRange?: string;
  /** The content type specified for the resource. If no content type was specified, the default content type is application/octet-stream. */
  contentType?: string;
  /** The MD5 hash of complete file. If the file has an MD5 hash and this read operation is to read the complete file, this response header is returned so that the client can check for message content integrity. */
  contentMD5?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  eTag?: string;
  /** The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** The type of the resource.  The value may be "file" or "directory".  If not set, the value is "file". */
  resourceType?: string;
  /** The user-defined properties associated with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. */
  properties?: string;
  /** When a resource is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: string;
  /** Lease state of the resource. */
  leaseState?: string;
  /** The lease status of the resource. */
  leaseStatus?: string;
}

/** Defines headers for Path_read operation. */
export interface PathReadExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Path_getProperties operation. */
export interface PathGetPropertiesHeaders {
  /** Indicates that the service supports requests for partial file content. */
  acceptRanges?: string;
  /** If the Cache-Control request header has previously been set for the resource, that value is returned in this header. */
  cacheControl?: string;
  /** If the Content-Disposition request header has previously been set for the resource, that value is returned in this header. */
  contentDisposition?: string;
  /** If the Content-Encoding request header has previously been set for the resource, that value is returned in this header. */
  contentEncoding?: string;
  /** If the Content-Language request header has previously been set for the resource, that value is returned in this header. */
  contentLanguage?: string;
  /** The size of the resource in bytes. */
  contentLength?: number;
  /** Indicates the range of bytes returned in the event that the client requested a subset of the file by setting the Range request header. */
  contentRange?: string;
  /** The content type specified for the resource. If no content type was specified, the default content type is application/octet-stream. */
  contentType?: string;
  /** The MD5 hash of complete file stored in storage. This header is returned only for "GetProperties" operation. If the Content-MD5 header has been set for the file, this response header is returned for GetProperties call so that the client can check for message content integrity. */
  contentMD5?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** An HTTP entity tag associated with the file or directory. */
  eTag?: string;
  /** The data and time the file or directory was last modified.  Write operations on the file or directory update the last modified time. */
  lastModified?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** The type of the resource.  The value may be "file" or "directory".  If not set, the value is "file". */
  resourceType?: string;
  /** The user-defined properties associated with the file or directory, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. */
  properties?: string;
  /** The owner of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  owner?: string;
  /** The owning group of the file or directory. Included in the response if Hierarchical Namespace is enabled for the account. */
  group?: string;
  /** The POSIX access permissions for the file owner, the file owning group, and others. Included in the response if Hierarchical Namespace is enabled for the account. */
  permissions?: string;
  /** The POSIX access control list for the file or directory.  Included in the response only if the action is "getAccessControl" and Hierarchical Namespace is enabled for the account. */
  acl?: string;
  /** When a resource is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: string;
  /** Lease state of the resource. */
  leaseState?: string;
  /** The lease status of the resource. */
  leaseStatus?: string;
}

/** Defines headers for Path_getProperties operation. */
export interface PathGetPropertiesExceptionHeaders {
  errorCode?: string;
}

/** Defines headers for Path_delete operation. */
export interface PathDeleteHeaders {
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** A server-generated UUID recorded in the analytics logs for troubleshooting and correlation. */
  requestId?: string;
  /** The version of the REST protocol used to process the request. */
  version?: string;
  /** When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory. */
  continuation?: string;
  /** Returned only for hierarchical namespace space enabled accounts when soft delete is enabled. A unique identifier for the entity that can be used to restore it. See the Undelete REST API for more information. */
  deletionId?: string;
}

/** Defines headers for Path_delete operation. */
export interface PathDeleteExceptionHeaders {
  errorCode?: string;
}

/** Parameter group */
export interface PathHttpHeaders {
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  cacheControl?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  contentEncoding?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  contentLanguage?: string;
  /** Optional. Sets the blob's Content-Disposition header. */
  contentDisposition?: string;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  contentType?: string;
  /** Specify the transactional md5 for the body, to be validated by the service. */
  contentMD5?: Uint8Array;
}

/** Parameter group */
export interface LeaseAccessConditions {
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  leaseId?: string;
}

/** Parameter group */
export interface ModifiedAccessConditions {
  /** Specify an ETag value to operate only on blobs with a matching value. */
  ifMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  ifNoneMatch?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  ifModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  ifUnmodifiedSince?: Date;
}

/** Parameter group */
export interface SourceModifiedAccessConditions {
  /** Specify an ETag value to operate only on blobs with a matching value. */
  sourceIfMatch?: string;
  /** Specify an ETag value to operate only on blobs without a matching value. */
  sourceIfNoneMatch?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  sourceIfModifiedSince?: Date;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  sourceIfUnmodifiedSince?: Date;
}

/** Known values of {@link PathExpiryOptions} that the service accepts. */
export enum KnownPathExpiryOptions {
  /** NeverExpire */
  NeverExpire = "NeverExpire",
  /** RelativeToCreation */
  RelativeToCreation = "RelativeToCreation",
  /** RelativeToNow */
  RelativeToNow = "RelativeToNow",
  /** Absolute */
  Absolute = "Absolute"
}

/**
 * Defines values for PathExpiryOptions. \
 * {@link KnownPathExpiryOptions} can be used interchangeably with PathExpiryOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NeverExpire** \
 * **RelativeToCreation** \
 * **RelativeToNow** \
 * **Absolute**
 */
export type PathExpiryOptions = string;
/** Defines values for PathResourceType. */
export type PathResourceType = "directory" | "file";
/** Defines values for PathRenameMode. */
export type PathRenameMode = "legacy" | "posix";
/** Defines values for PathUpdateAction. */
export type PathUpdateAction =
  | "append"
  | "flush"
  | "setProperties"
  | "setAccessControl"
  | "setAccessControlRecursive";
/** Defines values for PathSetAccessControlRecursiveMode. */
export type PathSetAccessControlRecursiveMode = "set" | "modify" | "remove";
/** Defines values for PathLeaseAction. */
export type PathLeaseAction =
  | "acquire"
  | "break"
  | "change"
  | "renew"
  | "release";
/** Defines values for PathGetPropertiesAction. */
export type PathGetPropertiesAction = "getAccessControl" | "getStatus";
/** Defines values for ListBlobsIncludeItem. */
export type ListBlobsIncludeItem =
  | "copy"
  | "deleted"
  | "metadata"
  | "snapshots"
  | "uncommittedblobs"
  | "versions"
  | "tags";

/** Optional parameters. */
export interface PathCreateOptionalParams extends coreClient.OperationOptions {
  /** Parameter group */
  pathHttpHeaders?: PathHttpHeaders;
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Parameter group */
  sourceModifiedAccessConditions?: SourceModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Required only for Create File and Create Directory. The value must be "file" or "directory". */
  resource?: PathResourceType;
  /** Optional.  When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory. */
  continuation?: string;
  /** Optional. Valid only when namespace is enabled. This parameter determines the behavior of the rename operation. The value must be "legacy" or "posix", and the default value will be "posix". */
  mode?: PathRenameMode;
  /** An optional file or directory to be renamed.  The value must have the following format: "/{filesystem}/{path}".  If "x-ms-properties" is specified, the properties will overwrite the existing properties; otherwise, the existing properties will be preserved. This value must be a URL percent-encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set. */
  renameSource?: string;
  /** A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  sourceLeaseId?: string;
  /** Optional. User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.  If the filesystem exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties. */
  properties?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  permissions?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. When creating a file or directory and the parent folder does not have a default ACL, the umask restricts the permissions of the file or directory to be created.  The resulting permission is given by p bitwise and not u, where p is the permission and u is the umask.  For example, if p is 0777 and u is 0057, then the resulting permission is 0720.  The default permission is 0777 for a directory and 0666 for a file.  The default umask is 0027.  The umask must be specified in 4-digit octal notation (e.g. 0766). */
  umask?: string;
}

/** Contains response data for the create operation. */
export type PathCreateResponse = PathCreateHeaders;

/** Optional parameters. */
export interface PathUpdateOptionalParams extends coreClient.OperationOptions {
  /** Parameter group */
  pathHttpHeaders?: PathHttpHeaders;
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Optional. The number of paths processed with each invocation is limited. If the number of paths to be processed exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be percent-encoded and specified in a subsequent invocation of setAccessControlRecursive operation. */
  continuation?: string;
  /** Optional. User-defined properties to be stored with the filesystem, in the format of a comma-separated list of name and value pairs "n1=v1, n2=v2, ...", where each value is a base64 encoded string. Note that the string may only contain ASCII characters in the ISO-8859-1 character set.  If the filesystem exists, any properties not included in the list will be removed.  All properties are removed if the header is omitted.  To merge new and existing properties, first get all existing properties and the current E-Tag, then make a conditional request with the E-Tag and include values for all properties. */
  properties?: string;
  /** Optional and only valid if Hierarchical Namespace is enabled for the account. Sets POSIX access permissions for the file owner, the file owning group, and others. Each class may be granted read, write, or execute permission.  The sticky bit is also supported.  Both symbolic (rwxrw-rw-) and 4-digit octal notation (e.g. 0766) are supported. */
  permissions?: string;
  /** Optional. Valid for "SetAccessControlRecursive" operation. It specifies the maximum number of files or directories on which the acl change will be applied. If omitted or greater than 2,000, the request will process up to 2,000 items */
  maxRecords?: number;
  /** Optional. Valid for "SetAccessControlRecursive" operation. If set to false, the operation will terminate quickly on encountering user errors (4XX). If true, the operation will ignore user errors and proceed with the operation on other sub-entities of the directory. Continuation token will only be returned when forceFlag is true in case of user errors. If not set the default value is false for this. */
  forceFlag?: boolean;
  /** This parameter allows the caller to upload data in parallel and control the order in which it is appended to the file.  It is required when uploading data to be appended to the file and when flushing previously uploaded data to the file.  The value must be the position where the data is to be appended.  Uploaded data is not immediately flushed, or written, to the file.  To flush, the previously uploaded data must be contiguous, the position parameter must be specified and equal to the length of the file after all data has been written, and there must not be a request entity body included with the request. */
  position?: number;
  /** Valid only for flush operations.  If "true", uncommitted data is retained after the flush operation completes; otherwise, the uncommitted data is deleted after the flush operation.  The default is false.  Data at offsets less than the specified position are written to the file when flush succeeds, but this optional parameter allows data after the flush position to be retained for a future flush operation. */
  retainUncommittedData?: boolean;
  /** Azure Storage Events allow applications to receive notifications when files change. When Azure Storage Events are enabled, a file changed event is raised. This event has a property indicating whether this is the final change to distinguish the difference between an intermediate flush to a file stream and the final close of a file stream. The close query parameter is valid only when the action is "flush" and change notifications are enabled. If the value of close is "true" and the flush operation completes successfully, the service raises a file change notification with a property indicating that this is the final update (the file stream has been closed). If "false" a change notification is raised indicating the file has changed. The default is false. This query parameter is set to true by the Hadoop ABFS driver to indicate that the file stream has been closed." */
  close?: boolean;
  /** Required for "Append Data" and "Flush Data".  Must be 0 for "Flush Data".  Must be the length of the request content in bytes for "Append Data". */
  contentLength?: number;
  /** Optional. The owner of the blob or directory. */
  owner?: string;
  /** Optional. The owning group of the blob or directory. */
  group?: string;
  /** Sets POSIX access control rights on files and directories. The value is a comma-separated list of access control entries. Each access control entry (ACE) consists of a scope, a type, a user or group identifier, and permissions in the format "[scope:][type]:[id]:[permissions]". */
  acl?: string;
}

/** Contains response data for the update operation. */
export type PathUpdateResponse = PathUpdateHeaders &
  SetAccessControlRecursiveResponse;

/** Optional parameters. */
export interface PathLeaseOptionalParams extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The lease duration is required to acquire a lease, and specifies the duration of the lease in seconds.  The lease duration must be between 15 and 60 seconds or -1 for infinite lease. */
  xMsLeaseDuration?: number;
  /** The lease break period duration is optional to break a lease, and  specifies the break period of the lease in seconds.  The lease break  duration must be between 0 and 60 seconds. */
  xMsLeaseBreakPeriod?: number;
  /** Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor (String) for a list of valid GUID string formats. */
  proposedLeaseId?: string;
}

/** Contains response data for the lease operation. */
export type PathLeaseResponse = PathLeaseHeaders;

/** Optional parameters. */
export interface PathReadOptionalParams extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The HTTP Range request header specifies one or more byte ranges of the resource to be retrieved. */
  range?: string;
  /** Optional. When this header is set to "true" and specified together with the Range header, the service returns the MD5 hash for the range, as long as the range is less than or equal to 4MB in size. If this header is specified without the Range header, the service returns status code 400 (Bad Request). If this header is set to true when the range exceeds 4 MB in size, the service returns status code 400 (Bad Request). */
  xMsRangeGetContentMd5?: boolean;
}

/** Contains response data for the read operation. */
export type PathReadResponse = PathReadHeaders & {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface PathGetPropertiesOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Optional. If the value is "getStatus" only the system defined properties for the path are returned. If the value is "getAccessControl" the access control list is returned in the response headers (Hierarchical Namespace must be enabled for the account), otherwise the properties are returned. */
  action?: PathGetPropertiesAction;
  /** Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the user identity values returned in the x-ms-owner, x-ms-group, and x-ms-acl response headers will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names. */
  upn?: boolean;
}

/** Contains response data for the getProperties operation. */
export type PathGetPropertiesResponse = PathGetPropertiesHeaders;

/** Optional parameters. */
export interface PathDeleteOptionalParams extends coreClient.OperationOptions {
  /** Parameter group */
  leaseAccessConditions?: LeaseAccessConditions;
  /** Parameter group */
  modifiedAccessConditions?: ModifiedAccessConditions;
  /** Provides a client-generated, opaque value with a 1 KB character limit that is recorded in the analytics logs when storage analytics logging is enabled. */
  requestId?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Optional.  When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory. */
  continuation?: string;
  /** Required */
  recursive?: boolean;
}

/** Contains response data for the delete operation. */
export type PathDeleteResponse = PathDeleteHeaders;

/** Optional parameters. */
export interface DataLakeStorageClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Specifies the version of the operation to use for this request. */
  version?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
