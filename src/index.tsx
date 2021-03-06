import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react"; // this needs to also be installed when working with React
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./App";
import AppSyncConfig from "./aws-exports";
import * as serviceWorker from "./serviceWorker";

const client = new AWSAppSyncClient({
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType as AUTH_TYPE,
    apiKey: AppSyncConfig.aws_appsync_apiKey
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
