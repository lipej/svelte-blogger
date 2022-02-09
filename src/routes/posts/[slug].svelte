<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return { props: { slug: params.slug } };
	}
</script>

<script lang="ts">
	import 'highlight.js/styles/a11y-light.css';
	import '../../css/markdown.css';
	import 'jetbrains-mono';

	import type { Post } from 'src/graphql';
	import { GET_POST, client } from 'src/graphql';
	import { markdown } from '../../config';

	import Loading from 'src/libs/components/Loading.svelte';
	import ErrorAlert from 'src/libs/components/ErrorAlert.svelte';
	import { dateFormatter } from 'src/utils/dateFormatter';
	import Tags from 'src/libs/components/Tags.svelte';

	export let slug: string;

	const data = client.query<{ post: Post }>(GET_POST, { variables: { slug } });
	const md = markdown(slug);
</script>

<div class="pt-8">
	{#if $data.loading}
		<Loading />
	{:else if $data.error}
		<ErrorAlert message="Ops, something went wrong" />
	{:else}
		<span class="text-2xl font-bold">{$data.data.post.title}</span>
		<br />
		<span class="italic text-gray-400 text-sm pb-0">{dateFormatter($data.data.post.createdAt)}</span
		>
		<br />
		<Tags tags={$data.data.post.tags} />
		<div
			class="text-base pt-4 max-w-4xl text-justify markdown-body divide-y border-t-[1px] border-y-zinc-800 mt-2 "
		>
			{@html md.render($data.data.post.content)}
		</div>
	{/if}
</div>
