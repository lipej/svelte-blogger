<script lang="ts">
	import type { Post } from 'src/graphql/generated/graphql';
	import { dateFormatter } from 'src/utils';
	export let data: Post[];
</script>

<div class="flex flex-col">
	{#each data as post}
		<div class="mx-4 mt-4">
			<div>
				<a href={'/posts/' + post.slug} class="font-bold text-2xl">{post.title}</a>
				<p class="italic text-gray-400 text-sm">{dateFormatter(post.createdAt)}</p>
			</div>
			<p class="pt-2 text-justify text-base">{post.description ?? ''}</p>
		</div>
	{/each}
</div>
