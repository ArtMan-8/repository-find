import { useState } from "react";

import { useQuery as getQuery } from "@apollo/client";

import { getRepoByPages } from "../../utils/getRepoByPages";
import Paginator from "../Paginator";
import Repos from "../Repos";
import Search from "../Search";
import SearchContext from "../context";
import { TOP_REPOS, GET_REPOS } from "./main.graphql";
import * as styles from "./main.module.css";

export default function Main() {
	const lastRequest = sessionStorage.getItem("lastRequest");
	const lastPage = sessionStorage.getItem("lastPage");

	const [requestRepo, setRequestRepo] = useState(lastRequest);
	const [currentPage, setPage] = useState(+lastPage || 1);

	const setRequest = currentRequest => {
		sessionStorage.setItem("lastRequest", currentRequest);
		setRequestRepo(currentRequest);
	};

	const setPageRepo = page => {
		sessionStorage.setItem("lastPage", page);
		setPage(page);
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
		return <h2 className={styles.h2_error}>{str}</h2>;
	}

	const pages = data && getRepoByPages(data.search.nodes, data.search.repositoryCount);

	return (
		<SearchContext.Provider value={[requestRepo, setRequest]}>
			<Search />

			{loading ? (
				<h3 className={styles.h3}>Loading...</h3>
			) : (
				<>
					<Repos repos={pages.repos[currentPage - 1]} />
					{pages.count > 1 && <Paginator pages={pages.count} currentPage={currentPage} setPage={setPageRepo} />}
				</>
			)}
		</SearchContext.Provider>
	);
}
