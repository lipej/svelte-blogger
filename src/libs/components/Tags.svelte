<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<span class="badge badge-ghost m-2 ml-0">{tag}</span>
{/each}
