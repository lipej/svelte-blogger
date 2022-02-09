<script lang="ts">
	import Links from './Links.svelte';
	import Nav from './Nav.svelte';
	import { social, about } from '../../config';
	export let title: string;
</script>

<title>{title}</title>
<Nav name={about.siteTitle} {social}>
	<Links title="Home" to="/" />
	<!-- <Links title={translate[LANG].contact} to="/contact" /> -->
</Nav>
