<script lang="ts">
	import Links from './Links.svelte';
	import Nav from './Nav.svelte';

	export let title: string;
	export const social = {
		github: 'lipejose',
		linkedin: 'felipejosedasilva',
		instagram: 'fej0se'
	};
</script>

<title>{title}</title>
<Nav name="Lipe" {social}>
	<Links title="Home" to="/" />
	<Links title="Contato" to="contact" />
</Nav>
