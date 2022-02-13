import { render } from '@testing-library/svelte';
import Footer from '../../components/Footer.svelte';

describe('Footer component', () => {
	it('should render Footer', () => {
		const { getByText } = render(Footer, {
			copyrigth: '@testing'
		});

		expect(getByText('@testing')).toBeInTheDocument();
		expect(getByText('@testing')).toHaveProperty('href', 'https://github.com/testing');
	});
});
