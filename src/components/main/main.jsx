import React from "react";
import { useQuery as getQuery } from "@apollo/client";
import SearchContext from "../context";
import Search from "../search/search";
import Repos from "../repos/repos";
import Paginator from "../paginator/paginator";

import { TOP_REPOS, GET_REPOS } from "./main.graphql";
import "./main.css";

export default function Main() {
  const lastRequest = sessionStorage.getItem("lastRequest");

  const [requestRepo, setRequestRepo] = React.useState(lastRequest);

  const setRequest = (currentRequest) => {
    sessionStorage.setItem("lastRequest", currentRequest);
    setRequestRepo(currentRequest);
  };

  const { loading, error, data } = lastRequest
    ? getQuery(GET_REPOS, {
        variables: {
          getQuery: `${requestRepo} sort:stars`,
        },
      })
    : getQuery(TOP_REPOS);

  if (error) {
    const str = `${error}`;
    return <h2>{str}</h2>;
  }

  return (
    <SearchContext.Provider value={[requestRepo, setRequest]}>
      <Search />
      {loading ? <h3>Loading...</h3> : <Repos repos={data.search.nodes} />}
      <Paginator />
    </SearchContext.Provider>
  );
}
