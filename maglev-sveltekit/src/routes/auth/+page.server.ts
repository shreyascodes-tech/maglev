import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	async default({ request, cookies }) {
		const form = await request.formData();
		const token = form.get('token')!.toString();

		cookies.set('token', token, {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 * 24 * 365 // 1 year
		});

		throw redirect(302, '/');
	}
};
