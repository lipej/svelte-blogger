import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Header from '../../components/Header.svelte';
import { site } from '../../../config';

describe('counter component', () => {
	it('should confirm there are no images in the counter ', () => {
		const { container } = render(Header);

		expect(document.title).toEqual(site.title);
		expect(container.getElementsByClassName('navbar')).toMatchSnapshot();
	});
});
