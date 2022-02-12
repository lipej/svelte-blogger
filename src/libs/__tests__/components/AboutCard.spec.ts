import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import AboutCard from '../../components/AboutCard.svelte';

const about = {
	name: 'Testing Svelte',
	img: 'http://bla.com/bla.jpg',
	description: 'Svelte Tester',
	skills: [],
	tags: []
};

describe('counter component', () => {
	it('should confirm there are no images in the counter ', () => {
		const { getByText, container } = render(AboutCard, {
			about
		});

		expect(getByText(about.name)).toBeInTheDocument();
		expect(getByText(about.description)).toBeInTheDocument();
		expect(container.querySelector('img')).toHaveProperty('src', about.img);
	});
});
