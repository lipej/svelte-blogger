<script lang="ts">
	import type { Post } from 'src/graphql';
	import { GET_POSTS, client } from 'src/graphql';
	import { translate, LANG } from '../config';

	import PostList from 'src/libs/components/PostList.svelte';
	import Loading from 'src/libs/components/Loading.svelte';
	import ErrorAlert from 'src/libs/components/ErrorAlert.svelte';

	const posts = client.query<{ posts: Post[] }>(GET_POSTS);
</script>

<span class="text-2xl font-bold">{translate[LANG].list}</span>
<div class="pt-2">
	{#if $posts.loading}
		<Loading />
	{:else if $posts.error}
		<ErrorAlert message={translate[LANG].error} />
	{:else}
		<PostList data={$posts.data.posts} />
	{/if}
</div>
