import { checkAuth } from '$lib/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	await checkAuth(event);
	const response = await resolve(event);
	return response;
};
