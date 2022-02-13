import { render } from '@testing-library/svelte';
import Loading from '../../components/Loading.svelte';

describe('Loading component', () => {
	it('should render Loading', () => {
		const { container } = render(Loading);

		const link = container.querySelector('button');

		expect(link.classList.toString()).toMatchSnapshot();
	});
});
