/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates or updates a virtual network gateway connection in the specified resource group.
 *
 * @summary Creates or updates a virtual network gateway connection in the specified resource group.
 */
import {
  VirtualNetworkGatewayConnection,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//virtualNetworkGatewayConnections.beginCreateOrUpdateAndWait
async function createVirtualNetworkGatewayConnectionS2s() {
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "connS2S";
  const parameters: VirtualNetworkGatewayConnection = {
    connectionProtocol: "IKEv2",
    connectionType: "IPsec",
    dpdTimeoutSeconds: 30,
    enableBgp: false,
    ipsecPolicies: [],
    localNetworkGateway2: {
      gatewayIpAddress: "x.x.x.x",
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/localNetworkGateways/localgw",
      localNetworkAddressSpace: { addressPrefixes: ["10.1.0.0/16"] },
      location: "centralus",
      tags: {}
    },
    location: "centralus",
    routingWeight: 0,
    sharedKey: "Abc123",
    trafficSelectorPolicies: [],
    usePolicyBasedTrafficSelectors: false,
    virtualNetworkGateway1: {
      active: false,
      bgpSettings: {
        asn: 65514,
        bgpPeeringAddress: "10.0.1.30",
        peerWeight: 0
      },
      enableBgp: false,
      gatewayType: "Vpn",
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw",
      ipConfigurations: [
        {
          name: "gwipconfig1",
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/gwipconfig1",
          privateIPAllocationMethod: "Dynamic",
          publicIPAddress: {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/gwpip"
          },
          subnet: {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/GatewaySubnet"
          }
        }
      ],
      location: "centralus",
      sku: { name: "VpnGw1", tier: "VpnGw1" },
      tags: {},
      vpnType: "RouteBased"
    }
  };
  await client.virtualNetworkGatewayConnections
    .beginCreateOrUpdateAndWait(
      resourceGroupName,
      virtualNetworkGatewayConnectionName,
      parameters
    )
    .then((res) => {
      console.log(res);
    });
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createVirtualNetworkGatewayConnectionS2s();
}
main();
