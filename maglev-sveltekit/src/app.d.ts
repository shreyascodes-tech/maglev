// See https://kit.svelte.dev/docs/types#app

import type { createGraphqlClient } from '$lib/gql';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			client?: ReturnType<typeof createGraphqlClient>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
