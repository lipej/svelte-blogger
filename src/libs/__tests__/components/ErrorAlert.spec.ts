import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import ErrorAlert from '../../components/ErrorAlert.svelte';

describe('counter component', () => {
	it('should confirm there are no images in the counter ', () => {
		const { getByText } = render(ErrorAlert, {
			message: 'This is a error test'
		});

		expect(getByText('This is a error test')).toBeInTheDocument();
	});
});
