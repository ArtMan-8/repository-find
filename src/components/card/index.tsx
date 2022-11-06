import { NavLink, useParams } from "react-router-dom";

import { useQuery as getQuery } from "@apollo/client";

import { stringifyDate } from "../../utils/stringifyDate";
import { GET_INFO } from "./card.graphql";
import * as styles from "./card.module.css";

export default function Card() {
	const { id } = useParams();
	const { loading, error, data } = getQuery(GET_INFO, {
		variables: {
			getId: `${id}`,
		},
	});

	if (error) {
		const str = `${error}`;
		return <h2 className={styles.h2_error}>{str}</h2>;
	}

	return loading ? (
		<h3 className={styles.h3}>Loading...</h3>
	) : (
		<article className={styles.article}>
			<h1 className={styles.h1}>
				<a href={data.node.url}>{data.node.name}</a>
			</h1>
			<small>Stars - {data.node.stargazers.totalCount}</small>
			<br />
			<small>Last commit - {stringifyDate(data.node.defaultBranchRef.target.committedDate)}</small>
			<br />
			<small>
				Author -{" "}
				<a className={styles.name} href={data.node.owner.url}>
					{data.node.owner.login}
				</a>
			</small>

			<div className={styles.face}>
				<img src={data.node.owner.avatarUrl} alt='repo pic' />
			</div>

			<p className={styles.description}>{data.node.description}</p>

			{!!data.node.languages.nodes.length && (
				<ul className={styles.language}>
					Used languages:
					{data.node.languages.nodes.map(language => (
						<li key={language.name}>{language.name}</li>
					))}
				</ul>
			)}

			<NavLink className={styles.back} to='/'>
				back to search
			</NavLink>
		</article>
	);
}
