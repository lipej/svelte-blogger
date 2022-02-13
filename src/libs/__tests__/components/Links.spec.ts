import { render } from '@testing-library/svelte';
import Links from '../../components/Links.svelte';

describe('Links component', () => {
	it('should render Links', () => {
		const { container } = render(Links, {
			to: 'https://test.test',
			title: 'Test'
		});

		const link = container.querySelector('a');

		expect(link).toHaveProperty('href', 'https://test.test/');
		expect(link.innerHTML).toEqual('Test');
	});
});
