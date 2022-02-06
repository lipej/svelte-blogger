<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<div class="badge badge-ghost">{tag}</div>
{/each}
