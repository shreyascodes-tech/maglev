import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../auth/$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (!locals.client) {
		throw redirect(302, `/auth?from=${url.pathname}`);
	}
};
