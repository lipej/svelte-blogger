import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Footer from '../../components/Footer.svelte';

describe('counter component', () => {
	it('should confirm there are no images in the counter ', () => {
		const { getByText } = render(Footer, {
			copyrigth: '@testing'
		});

		expect(getByText('@testing')).toBeInTheDocument();
		expect(getByText('@testing')).toHaveProperty('href', 'https://github.com/testing');
	});
});
