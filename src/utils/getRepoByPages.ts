export const getRepoByPages = (
	repos: any[],
	count = 1,
): {
	count: number;
	repos: any[][];
} => {
	const countRepos = count > 100 ? 100 : count;
	const countPages = Math.ceil(countRepos / 10);
	const reposPages = [];

	for (let i = 0; i < countPages; i += 1) {
		reposPages.push(repos.slice(i * 10, (i + 1) * 10));
	}

	return { count: countPages, repos: reposPages };
};
