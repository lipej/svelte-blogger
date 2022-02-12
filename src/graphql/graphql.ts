import { InMemoryCache } from '@apollo/client/core';
import { SvelteApolloClient } from 'svelte-apollo-client';

export const client = SvelteApolloClient({
	uri: <string>import.meta.env.VITE_GRAPHCMS_HOST,
	headers: {
		Authorization: `Bearer ${<string>import.meta.env.VITE_GRAPHCMS_TOKEN}`
	},
	cache: new InMemoryCache()
});
