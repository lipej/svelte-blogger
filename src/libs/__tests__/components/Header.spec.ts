import { render } from '@testing-library/svelte';
import Header from '../../components/Header.svelte';
import { site } from '../../../config';

describe('Header component', () => {
	it('should render Header', () => {
		const { container } = render(Header);

		expect(document.title).toEqual(site.title);
		expect(container.getElementsByClassName('navbar')).toMatchSnapshot();
	});
});
