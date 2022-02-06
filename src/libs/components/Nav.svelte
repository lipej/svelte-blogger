<script lang="ts">
	import Github from '../icons/social/Github.svelte';
	import Linkedin from '../icons/social/Linkedin.svelte';
	import Instagram from '../icons/social/Instagram.svelte';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	type Social = {
		github?: string;
		linkedin?: string;
		instagram?: string;
	};

	export let social: Social;
	export let name: string;

	$: theme = '';

	function handleTheme() {
		if (browser) {
			theme = localStorage.getItem('theme') === 'dracula' ? '☀️' : '🌙';
		}
	}

	onMount(() => {
		if (browser) {
			theme = localStorage.getItem('theme') === 'fantasy' ? '☀️' : '🌙';
		}
	});
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box mx-8 mt-4">
	<div class="flex-none px-2 mx-2">
		<span class="text-lg font-bold"> {name} </span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<slot />
		</div>
	</div>

	{#if social?.github}
		<div class="flex-none">
			<button
				class="btn btn-square btn-ghost"
				on:click={() => (window.location.href = `https://github.com/${social.github}`)}
			>
				<Github />
			</button>
		</div>
	{/if}

	{#if social?.linkedin}
		<div class="flex-none">
			<button
				class="btn btn-square btn-ghost"
				on:click={() => (window.location.href = `https://linkedin.com/in/${social.linkedin}`)}
			>
				<Linkedin />
			</button>
		</div>
	{/if}

	{#if social?.instagram}
		<div class="flex-none">
			<button
				class="btn btn-square btn-ghost"
				on:click={() => (window.location.href = `https://instagram.com/${social.instagram}`)}
			>
				<Instagram />
			</button>
		</div>
	{/if}

	<button
		class="px-8"
		data-toggle-theme="dracula,fantasy"
		data-act-class="ACTIVECLASS"
		on:click={handleTheme}>{theme}</button
	>
</div>
