import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.client) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	async default({ request, cookies, locals }) {
		if (locals.client) {
			throw redirect(302, '/');
		}

		const form = await request.formData();
		const token = form.get('token')!.toString();

		cookies.set('token', token, {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 * 24 * 365, // 1 year
		});

		throw redirect(302, '/');
	},
};
