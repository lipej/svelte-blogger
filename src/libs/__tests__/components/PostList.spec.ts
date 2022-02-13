import { render } from '@testing-library/svelte';
import { dateFormatter } from 'src/utils';
import PostList from '../../components/PostList.svelte';

describe('PostList component', () => {
	it('should render PostList', () => {
		const { queryByTestId } = render(PostList, {
			data: [
				{
					title: 'Testing',
					slug: 'test',
					description: 'Testing this component',
					createdAt: new Date().toISOString()
				},
				{
					title: 'Testing 2',
					slug: 'test2',
					description: 'Testing this component 2',
					createdAt: new Date().toISOString()
				}
			]
		});

		const firstPost = queryByTestId('test');
		const secondPost = queryByTestId('test2');

		expect(firstPost.querySelector('a')).toHaveProperty('href', 'http://localhost/posts/test');
		expect(firstPost.querySelector('a').innerHTML).toEqual('Testing');

		expect(firstPost.querySelectorAll('span')[0].innerHTML).toEqual(
			dateFormatter(new Date().toISOString())
		);
		expect(firstPost.querySelectorAll('span')[1].innerHTML).toEqual('Testing this component');

		expect(secondPost.querySelector('a')).toHaveProperty('href', 'http://localhost/posts/test2');
		expect(secondPost.querySelector('a').innerHTML).toEqual('Testing 2');

		expect(secondPost.querySelectorAll('span')[0].innerHTML).toEqual(
			dateFormatter(new Date().toISOString())
		);
		expect(secondPost.querySelectorAll('span')[1].innerHTML).toEqual('Testing this component 2');
	});
});
