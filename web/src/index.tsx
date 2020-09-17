import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import './index.css';
import Routes from './Routes';

const client = new ApolloClient({ 
  uri: "http://localhost:4000/graphql",
 });

ReactDOM.render( // within ApolloProvider.ts => client:... | DefaultClient<TCache>;
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);

