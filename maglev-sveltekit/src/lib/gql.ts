import { GraphQLClient, gql } from 'graphql-request';

export function createGraphqlClient(token: string) {
	const endpoint = 'https://backboard.railway.app/graphql/v2';
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});

	return client;
}
