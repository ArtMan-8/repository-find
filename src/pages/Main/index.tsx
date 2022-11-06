import { ReactElement, useState } from "react";

import { useQuery as getQuery } from "@apollo/client";

import Paginator from "../../components/Paginator";
import Repos from "../../components/Repos";
import Search from "../../components/Search";
import SearchContext from "../../components/context";
import { getRepoByPages } from "../../utils/getRepoByPages";
import { TOP_REPOS, GET_REPOS } from "./main.graphql";
import * as styles from "./main.module.css";

export default function Main(): ReactElement {
	const lastRequest = sessionStorage.getItem("lastRequest") || "";
	const lastPage = sessionStorage.getItem("lastPage") || 1;

	const [requestRepo, setRequestRepo] = useState<string>(lastRequest);
	const [currentPage, setPage] = useState<number>(Number(lastPage));

	const setRequest = (currentRequest: string): void => {
		sessionStorage.setItem("lastRequest", currentRequest);
		setRequestRepo(currentRequest);
	};

	const setPageRepo = (page: number): void => {
		sessionStorage.setItem("lastPage", String(page));
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
		return <h2 className={styles.h2_error}>{error.message}</h2>;
	}

	const pages = data && getRepoByPages(data.search.nodes, data.search.repositoryCount);

	return (
		<SearchContext.Provider value={{ requestRepo, setRequest }}>
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
