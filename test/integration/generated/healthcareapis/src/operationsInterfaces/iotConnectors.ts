import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  IotConnector,
  IotConnectorsListByWorkspaceOptionalParams,
  IotConnectorsGetOptionalParams,
  IotConnectorsGetResponse,
  IotConnectorsCreateOrUpdateOptionalParams,
  IotConnectorsCreateOrUpdateResponse,
  IotConnectorPatchResource,
  IotConnectorsUpdateOptionalParams,
  IotConnectorsUpdateResponse,
  IotConnectorsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IotConnectors. */
export interface IotConnectors {
  /**
   * Lists all IoT Connectors for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: IotConnectorsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<IotConnector>;
  /**
   * Gets the properties of the specified IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: IotConnectorsGetOptionalParams
  ): Promise<IotConnectorsGetResponse>;
  /**
   * Creates or updates an IoT Connector resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param iotConnector The parameters for creating or updating an IoT Connectors resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    iotConnector: IotConnector,
    options?: IotConnectorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorsCreateOrUpdateResponse>,
      IotConnectorsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an IoT Connector resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param iotConnector The parameters for creating or updating an IoT Connectors resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    iotConnector: IotConnector,
    options?: IotConnectorsCreateOrUpdateOptionalParams
  ): Promise<IotConnectorsCreateOrUpdateResponse>;
  /**
   * Patch an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorPatchResource The parameters for updating an IoT Connector.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    iotConnectorPatchResource: IotConnectorPatchResource,
    options?: IotConnectorsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorsUpdateResponse>,
      IotConnectorsUpdateResponse
    >
  >;
  /**
   * Patch an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorPatchResource The parameters for updating an IoT Connector.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    iotConnectorPatchResource: IotConnectorPatchResource,
    options?: IotConnectorsUpdateOptionalParams
  ): Promise<IotConnectorsUpdateResponse>;
  /**
   * Deletes an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    options?: IotConnectorsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    options?: IotConnectorsDeleteOptionalParams
  ): Promise<void>;
}
