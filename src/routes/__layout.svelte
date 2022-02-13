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

<div class="lg:grid lg:grid-cols-3 ">
	<div class="flex justify-center mx-auto my-8 ">
		<AboutCard {about} />
	</div>
	<div class="lg:col-span-2 lg:m-10 m-3">
		<slot />
	</div>
</div>

<Footer copyrigth={dev} />
