<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<div class="badge badge-ghost m-2 ml-0">{tag}</div>
{/each}