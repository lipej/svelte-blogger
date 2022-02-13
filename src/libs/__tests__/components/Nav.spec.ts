import { render } from '@testing-library/svelte';
import Nav from '../../components/Nav.svelte';

describe('Nav component', () => {
	it('should render Nav without social', () => {
		const { getByText, queryByTestId } = render(Nav, {
			name: 'Testing',
			social: {}
		});

		expect(getByText('Testing')).toBeInTheDocument();
		expect(queryByTestId('theme')).toBeTruthy();
		expect(queryByTestId('github')).toBeNull();
		expect(queryByTestId('linkedin')).toBeNull();
		expect(queryByTestId('instagram')).toBeNull();
	});

	it('should render Nav with social', () => {
		const { getByText, queryByTestId } = render(Nav, {
			name: 'Testing Again',
			social: {
				instagram: 'test',
				linkedin: 'test',
				github: 'test'
			}
		});

		const github = queryByTestId('github');
		const instagram = queryByTestId('instagram');
		const linkedin = queryByTestId('linkedin');

		expect(getByText('Testing Again')).toBeInTheDocument();
		expect(queryByTestId('theme')).toBeTruthy();
		expect(github).toBeTruthy();
		expect(github.querySelector('a')).toHaveProperty('href', 'https://github.com/test');
		expect(linkedin).toBeTruthy();
		expect(linkedin.querySelector('a')).toHaveProperty('href', 'https://linkedin.com/in/test');
		expect(instagram).toBeTruthy();
		expect(instagram.querySelector('a')).toHaveProperty('href', 'https://instagram.com/test');
	});

	it.each([
		['garden', '☀️'],
		['dracula', '🌙']
	])('should render correct by localStorage theme', async (theme, expected) => {
		window.localStorage.setItem('theme', theme);

		const { queryByTestId } = render(Nav, {
			name: 'Testing Again',
			social: null
		});

		expect(queryByTestId('theme').innerHTML).toEqual(expected);
	});
});
