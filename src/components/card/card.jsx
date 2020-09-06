import React from "react";
import PropTypes from "prop-types";
import { useQuery as getQuery } from "@apollo/client";
import { GET_INFO } from "./card.graphql";
import "./card.css";

export default function Card({ props: id }) {
  const { loading, error, data } = getQuery(GET_INFO, {
    variables: {
      getId: `${id}`,
    },
  });

  if (error) {
    const str = `${error}`;
    return <h2>{str}</h2>;
  }

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <pre>`${JSON.stringify(data, null, 2)}`</pre>
      )}
    </>
  );
}

Card.propTypes = {
  props: PropTypes.string.isRequired,
};
