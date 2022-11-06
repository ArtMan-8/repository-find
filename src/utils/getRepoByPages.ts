export const getRepoByPages = (
	repos: any[],
	count = 1,
): {
	count: number;
	repos: any[][];
} => {
	const cn = count > 100 ? 100 : count;
	const coutPages = Math.ceil(cn / 10);
	const reposPages = [];

	for (let i = 0; i < coutPages; i += 1) {
		reposPages.push(repos.slice(i * 10, (i + 1) * 10));
	}

	return { count: coutPages, repos: reposPages };
};
