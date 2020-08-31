import React from "react";
import PropTypes from "prop-types";
import "./repos.css";

export default function Repos({ repos }) {
  const getStrDate = (timestamp) => {
    const date = new Date(timestamp);
    const strDate = `${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()}`;
    return strDate;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Stars</th>
            <th>Last Commit</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repos &&
            repos.map((repo) => (
              <tr key={repo.url}>
                <td>
                  <a href="/#">{repo.name}</a>
                </td>
                <td>{repo.stargazers.totalCount}</td>
                <td>
                  {repo.ref
                    ? getStrDate(repo.ref.target.committedDate)
                    : `error`}
                </td>
                <td>
                  <a href={repo.url}>link</a>
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
