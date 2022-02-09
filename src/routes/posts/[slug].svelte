<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		return { props: { slug: params.slug } };
	}
</script>

<script lang="ts">
	import MarkdownIt from 'markdown-it';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/a11y-light.css';

	import type { Post } from 'src/graphql';
	import { GET_POST, client } from 'src/graphql';

	import Loading from 'src/libs/components/Loading.svelte';
	import ErrorAlert from 'src/libs/components/ErrorAlert.svelte';
	import { dateFormatter } from 'src/utils/dateFormatter';
	export let slug: string;
	const md = new MarkdownIt({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error('Failed to highlight string');
				}
			}
			return ''; // use external default escaping
		}
	});

	const data = client.query<{ post: Post }>(GET_POST, { variables: { slug } });
</script>

<div class="pt-8">
	{#if $data.loading}
		<Loading />
	{:else if $data.error}
		<ErrorAlert message="Ops, something went wrong" />
	{:else}
		<h2 class="text-2xl font-bold">{$data.data.post.title}</h2>
		<p class="italic text-gray-400 text-sm">{dateFormatter($data.data.post.createdAt)}</p>

		<div class="text-base pt-4 max-w-3xl text-justify">
			{@html md.render($data.data.post.teste)}
		</div>
	{/if}
</div>
