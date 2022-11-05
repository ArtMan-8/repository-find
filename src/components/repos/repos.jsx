import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import getStrDate from "../../utils/stringifyDate";
import * as styles from "./repos.module.css";

export default function Repos({ repos }) {
	return (
		<>
			<table className={styles.table}>
				<thead className={styles.thead}>
					<tr>
						<th className={styles.name}>Repository</th>
						<th className={styles.star}>Stars</th>
						<th className={styles.commit}>Last Commit</th>
						<th className={styles.link}>Link</th>
					</tr>
				</thead>
				<tbody className={styles.tbody}>
					{repos &&
						repos.map((repo) => (
							<tr key={repo.url}>
								<td className={styles.name}>
									<NavLink to={repo.id}>{repo.name}</NavLink>
								</td>
								<td className={styles.star}>
									{repo.stargazers.totalCount || `0`}
								</td>
								<td className={styles.commit}>
									{repo.defaultBranchRef
										? getStrDate(repo.defaultBranchRef.target.committedDate)
										: `none`}
								</td>
								<td className={styles.link}>
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
