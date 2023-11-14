import type { RequestEvent } from '@sveltejs/kit';
import { createGraphqlClient } from './gql';
import { ClientError, gql } from 'graphql-request';

type Event = RequestEvent<Partial<Record<string, string>>, string | null>;

export async function checkAuth({ cookies, locals }: Event) {
	const token = cookies.get('token') ?? '';
	const client = createGraphqlClient(token);

	try {
		await client.request<{
			me: { id: string };
		}>(gql`
			query {
				me {
					id
				}
			}
		`);

		locals.client = client;
	} catch (error) {
		if (
			!(error instanceof ClientError) ||
			!error.response.errors?.some((e) => e.message === 'Not Authorized')
		) {
			console.error(error);
			throw error;
		}

		cookies.delete('token', {
			path: '/',
		});
	}
}
