import { render } from '@testing-library/svelte';
import ErrorAlert from '../../components/ErrorAlert.svelte';

describe('ErrorAlert component', () => {
	it('should render ErrorAlert', () => {
		const { getByText } = render(ErrorAlert, {
			message: 'This is a error test'
		});

		expect(getByText('This is a error test')).toBeInTheDocument();
	});
});
