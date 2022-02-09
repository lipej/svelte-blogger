<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<div class="badge badge-ghost m-1">{tag}</div>
{/each}
