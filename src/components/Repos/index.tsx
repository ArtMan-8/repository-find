import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { stringifyDate } from "../../utils/stringifyDate";
import { IRepos } from "./interfaces";
import * as styles from "./repos.module.css";

export default function Repos({ repos }: IRepos): ReactElement {
	return (
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
				{repos?.map(repo => (
					<tr key={repo.url}>
						<td className={styles.name}>
							<NavLink to={repo.id}>{repo.name}</NavLink>
						</td>
						<td className={styles.star}>{repo.stargazers.totalCount || `0`}</td>
						<td className={styles.commit}>
							{repo.defaultBranchRef ? stringifyDate(repo.defaultBranchRef.target.committedDate) : `none`}
						</td>
						<td className={styles.link}>
							<a href={repo.url} target='_blank' rel='noreferrer'>
								to Github
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
