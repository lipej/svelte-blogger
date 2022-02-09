import { InMemoryCache } from '@apollo/client/core';
import { SvelteApolloClient } from 'svelte-apollo-client';

export const client = SvelteApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/ckzc1osgt2sg601z5dj6252rr/master',
	headers: {
		Authorization: `Bearer ${'TOKEN'}`
	},
	cache: new InMemoryCache()
});
