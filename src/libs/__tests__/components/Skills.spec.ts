import { render } from '@testing-library/svelte';
import Skills from '../../components/Skills.svelte';

describe('Skills component', () => {
	it('should render Skills', () => {
		const { queryByTestId } = render(Skills, { skills: [{ name: 'Jest', percent: 50 }] });

		const skill = queryByTestId('Jest');

		expect(skill.querySelector('span').innerHTML).toEqual('Jest');
		expect(skill.querySelector('progress').value).toEqual(50);
	});
});
