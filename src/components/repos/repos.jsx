import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getStrDate from "../../utils/get-str-date";
import styles from "./repos.css";

export default function Repos({ repos }) {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Repository</th>
            <th>Stars</th>
            <th>Last Commit</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {repos &&
            repos.map((repo) => (
              <tr key={repo.url}>
                <td>
                  <Link to={`/${repo.id}`}>{repo.name}</Link>
                </td>
                <td>{repo.stargazers.totalCount || `0`}</td>
                <td>
                  {repo.defaultBranchRef
                    ? getStrDate(repo.defaultBranchRef.target.committedDate)
                    : `none`}
                </td>
                <td>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    to Github
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
