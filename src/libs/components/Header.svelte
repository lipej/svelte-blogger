<script lang="ts">
	import Links from './Links.svelte';
	import Nav from './Nav.svelte';
	import { social, site } from '../../config';
</script>

<title>{site.title}</title>
<Nav name={site.navTitle} {social}>
	<!-- <Links title={translate[LANG].contact} to="/contact" /> -->
</Nav>
