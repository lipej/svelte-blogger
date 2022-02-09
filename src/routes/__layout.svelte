<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { about, dev } from 'src/config';
	import '../app.css';
	import Header from 'src/libs/components/Header.svelte';
	import Footer from 'src/libs/components/Footer.svelte';
	import AboutCard from 'src/libs/components/AboutCard.svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<Header />

<div class="grid grid-cols-3 ">
	<div class="flex justify-center m-8">
		<AboutCard {about} />
	</div>
	<div class="col-span-2 m-10">
		<slot />
	</div>
</div>

<Footer copyrigth={dev} />
