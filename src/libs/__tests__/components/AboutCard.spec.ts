import { render } from '@testing-library/svelte';
import AboutCard from '../../components/AboutCard.svelte';

const about = {
	name: 'Testing Svelte',
	img: 'http://bla.com/bla.jpg',
	description: 'Svelte Tester',
	skills: [],
	tags: []
};

describe('AboutCard component', () => {
	it('should render AboutCard', () => {
		const { getByText, container } = render(AboutCard, {
			about
		});

		expect(getByText(about.name)).toBeInTheDocument();
		expect(getByText(about.description)).toBeInTheDocument();
		expect(container.querySelector('img')).toHaveProperty('src', about.img);
	});
});
