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
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 */
import {
  AzureFirewall,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

let client: NetworkManagementClient;
//azureFirewalls.beginCreateOrUpdateAndWait
async function createAzureFirewallWithIPGroups() {
  const resourceGroupName = "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    location: "West US",
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: []
  };
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}
async function main() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subid";
  client = new NetworkManagementClient(credential, subscriptionId);
  await createAzureFirewallWithIPGroups();
}
main();
