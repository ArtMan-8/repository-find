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

  const { data } = lastRequest
    ? getQuery(GET_REPOS, {
        variables: {
          getQuery: `${requestRepo} sort:stars`,
        },
      })
    : getQuery(TOP_REPOS);

  return (
    <SearchContext.Provider value={[requestRepo, setRequest]}>
      <Search />
      <Repos data={data} />
      <Paginator />
    </SearchContext.Provider>
  );
}
