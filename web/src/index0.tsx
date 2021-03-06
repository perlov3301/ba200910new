// befoer migration
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import './index.css';
// import Routes from './Routes';
import { getAccessToken } from './accessToken';
import { App } from './App';

const client = new ApolloClient({ 
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  request: (operation) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `bearer ${accessToken}`
        }
      });
    }
  }
 });

ReactDOM.render( // within ApolloProvider.ts => client:... | DefaultClient<TCache>;
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

