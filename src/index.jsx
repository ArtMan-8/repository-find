/* eslint-disable */
import React from "react";
import ReactDom from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./components/app/app";

require("./index.css");

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
