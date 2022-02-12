<script lang="ts">
	import Skills from './Skills.svelte';
	import Tags from './Tags.svelte';

	type About = {
		name: string;
		img: string;
		description: string;
		skills: { name: string; percent: string }[];
		tags: string[];
	};
	export let about: About;
</script>

<div
	data-testid="aboutcard"
	class="grid items-center gap-4 p-4 py-8 shadow-xl shadow-blue-500/10 bg-base-100 rounded-box place-items-center flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 place-self-start"
>
	<div class="p-px mask mask-squircle bg-base-content bg-opacity-10">
		<img src={about.img} width="150" height="150" alt="avatar img" class="mask mask-squircle" />
	</div>
	<div>
		<div class="w-full">
			<div class="text-center">
				<div class="text-lg font-extrabold">{about.name}</div>
				<div class="my-3 text-sm text-base-content text-opacity-60">
					{about.description}
				</div>
			</div>
		</div>
		<div>
			<Skills skills={about.skills} />
		</div>
		<div class="w-full">
			<div class="mt-2 text-center">
				<Tags tags={about.tags} />
			</div>
		</div>
	</div>
</div>
