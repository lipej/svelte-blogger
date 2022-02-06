<script>
	import Header from 'src/libs/components/Header.svelte';
	import Footer from 'src/libs/components/Footer.svelte';

	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import { themeChange } from 'theme-change';
	import PostList from 'src/libs/components/PostList.svelte';
	import Tags from 'src/libs/components/Tags.svelte';
	import Skills from 'src/libs/components/Skills.svelte';
	import AboutCard from 'src/libs/components/AboutCard.svelte';

	onMount(() => {
		themeChange(false);
	});

	let posts = [
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

			createdAt: new Date()
		},
		{
			title: 'Test post',
			description:
				'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

			createdAt: new Date()
		}
	];

	let about = {
		name: 'Felipe José',
		img: 'https://www.linkpicture.com/q/LPic620050670fb95945239599.jpg',
		description:
			'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		skills: [
			{ name: 'Svelte', percent: '20' },
			{ name: 'Svelte', percent: '100' },
			{ name: 'Svelte', percent: '40' },
			{ name: 'Svelte', percent: '50' },
			{ name: 'Svelte', percent: '20' }
		],
		tags: ['tetse']
	};
</script>

<Header title="Lipe José | Dev" />

<div class="grid grid-cols-3">
	<div class="flex justify-center m-8">
		<AboutCard {about} />
	</div>
	<div class="col-span-2 m-10">
		<h2 class="text-2xl font-bold">Latest posts</h2>
		<PostList data={posts} />
	</div>
</div>

<Footer copyrigth="Lipe" />
