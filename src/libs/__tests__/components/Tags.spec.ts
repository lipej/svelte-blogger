import { render } from '@testing-library/svelte';
import Tags from '../../components/Tags.svelte';

describe('Tags component', () => {
	it('should render Tags', () => {
		const tags = ['tester', 'jest'];
		const { container } = render(Tags, { tags });

		const span = container.querySelectorAll('span');

		expect(span).toHaveLength(tags.length);
		span.forEach((item, index) => expect(item.innerHTML).toEqual(tags[index]));
	});
});
