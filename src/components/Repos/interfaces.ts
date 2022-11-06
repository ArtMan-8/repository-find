export interface IRepos {
	repos: {
		id: string;
		name: string;
		url: string;
		stargazers: {
			totalCount: number;
		};
		defaultBranchRef: {
			target: {
				committedDate: string;
			};
		};
	}[];
}
