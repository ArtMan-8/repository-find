import { gql } from "@apollo/client";

export const GET_INFO = gql`
	query GetRepoInfo($getId: ID!) {
		node(id: $getId) {
			... on Repository {
				name
				stargazers {
					totalCount
				}
				defaultBranchRef {
					target {
						... on Commit {
							committedDate
						}
					}
				}
				owner {
					avatarUrl
					login
					url
				}
				languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
					nodes {
						name
					}
				}
				description
				url
			}
		}
	}
`;
