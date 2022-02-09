<script lang="ts">
	import type { Post } from 'src/graphql';
	import { GET_POSTS, client } from 'src/graphql';

	import PostList from 'src/libs/components/PostList.svelte';
	import Loading from 'src/libs/components/Loading.svelte';
	import ErrorAlert from 'src/libs/components/ErrorAlert.svelte';

	const posts = client.query<{ posts: Post[] }>(GET_POSTS);
</script>

<h2 class="text-2xl font-bold">Latest posts</h2>
<div class="pt-3">
	{#if $posts.loading}
		<Loading />
	{:else if $posts.error}
		<ErrorAlert message="Ops, something went wrong" />
	{:else}
		<PostList data={$posts.data.posts} />
	{/if}
</div>
