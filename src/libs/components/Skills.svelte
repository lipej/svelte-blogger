<script lang="ts">
	type TSkills = {
		name: string;
		percent: string;
	}[];

	export let skills: TSkills;
</script>

{#each skills as { name, percent }}
	<div class="flex items-center p-1" data-testid={name}>
		<span class="w-48 text-xs text-base-content text-opacity-60">{name}</span>
		<progress max="100" class="progress" value={percent} />
	</div>
{/each}
