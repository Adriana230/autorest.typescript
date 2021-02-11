## Azure AutoRestParameterizedCustomHostTestClient SDK for JavaScript

This package contains the **latest API version (2018-02-01)** of AutoRestParameterizedCustomHostTestClient.

### Currently supported environments

- Node.js version 8.x.x or higher
- Browser JavaScript

### How to install

To use this SDK in your project, you will need to install two packages.
- `@azure/multiapi-test` that contains the client.
- `@azure/identity` that contains different credentials for you to authenticate the client using Azure Active Directory.

Install both packages using the below commands.
```bash
npm install @azure/multiapi-test
npm install @azure/identity
```
Please note that while the credentials from the older [`@azure/ms-rest-nodeauth`](https://www.npmjs.com/package/@azure/ms-rest-nodeauth) and [`@azure/ms-rest-browserauth`](https://www.npmjs.com/package/@azure/ms-rest-browserauth) packages are still supported, these packages are in maintenance mode receiving critical bug fixes, but no new features.
We strongly encourage you to use the credentials from `@azure/identity` where the latest versions of Azure Active Directory and MSAL APIs are used and more authentication options are provided.

### Available API versions

| API version | NPM package | Latest |
| - | - | - |
| 2018-02-01 | https://npmjs.com/@azure/multiapi-test-2018-02-01 | ✔️ |
| 2017-10-01 | https://npmjs.com/@azure/multiapi-test-2017-10-01 |  |

### How to use

There are multiple credentials available in the `@azure/identity` package to suit your different authentication needs.
Read about them in detail in [readme for @azure/identity package](https://www.npmjs.com/package/@azure/identity).
To get started you can use the [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/identity/identity/README.md#defaultazurecredential) which tries different credentials internally until one of them succeeds.
Most of the credentials would require you to [create an Azure App Registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals#application-registration) first.
#### nodejs - Authentication, client creation, and getEmpty paths as an example written in JavaScript.

##### Sample code

```javascript
const { DefaultAzureCredential } = require("@azure/identity");
const { AutoRestParameterizedCustomHostTestClient } = require("@azure/multiapi-test");
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

// Create credentials using the `@azure/identity` package.
// Please note that you can also use credentials from the `@azure/ms-rest-nodeauth` package instead.
const creds = new DefaultAzureCredential();
const client = new AutoRestParameterizedCustomHostTestClient(creds, subscriptionId);
const vault = "testvault";
const secret = "testsecret";
const keyName = "testkeyName";
const keyVersion = "testkeyVersion";
client.paths.getEmpty(vault, secret, keyName, keyVersion).then((result) => {
  console.log("The result is:");
  console.log(result);
}).catch((err) => {
  console.log("An error occurred:");
  console.error(err);
});
```

#### browser - Authentication, client creation, and getEmpty paths as an example written in JavaScript.

In browser applications, we recommend using the `InteractiveBrowserCredential` that interactively authenticates using the default system browser.
It is necessary to [create an Azure App Registration](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the portal for your web application first.

##### Sample code

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>@azure/multiapi-test sample</title>
    <script src="node_modules/@azure/ms-rest-azure-js/dist/msRestAzure.js"></script>
    <script src="node_modules/@azure/identity/dist/index.js"></script>
    <script src="node_modules/@azure/multiapi-test/dist/multiapi-test.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      // Create credentials using the `@azure/identity` package.
      // Please note that you can also use credentials from the `@azure/ms-rest-browserauth` package instead.
      const credential = new InteractiveBrowserCredential(
      {
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      const client = new Azure.MultiapiTest.AutoRestParameterizedCustomHostTestClient(creds, subscriptionId);
      const vault = "testvault";
      const secret = "testsecret";
      const keyName = "testkeyName";
      const keyVersion = "testkeyVersion";
      client.paths.getEmpty(vault, secret, keyName, keyVersion).then((result) => {
        console.log("The result is:");
        console.log(result);
      }).catch((err) => {
        console.log("An error occurred:");
        console.error(err);
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js/sdk/README.png)