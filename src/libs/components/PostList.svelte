<script lang="ts">
	import type { Post } from 'src/graphql/generated/graphql';
	import { dateFormatter } from 'src/utils';
	export let data: Post[];
</script>

<div class="flex flex-col">
	{#each data as post}
		<div class="mx-4 mt-4" data-testid={post.slug}>
			<div>
				<a href={'/posts/' + post.slug} class="font-bold text-2xl">{post.title}</a>
				<br />
				<span class="italic text-gray-400 text-sm ">{dateFormatter(post.createdAt)}</span>
			</div>
			<span class="pt-1 text-justify text-base">{post.description ?? ''}</span>
		</div>
	{/each}
</div>
