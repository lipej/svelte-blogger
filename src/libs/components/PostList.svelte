<script lang="ts">
	export let data: any[];
</script>

<div class="flex flex-col  pt-8">
	{#each data as post}
		<div class="mx-4 mt-4">
			<div>
				<span class="font-bold text-2xl">{post.title}</span>
				<br />
				<span class="italic text-gray-400 text-sm"
					>{new Date(post.createdAt).toLocaleString('pt-BR', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}</span
				>
			</div>
			<p class="pt-2 text-justify text-base">{post.description}</p>
		</div>
	{/each}
</div>
