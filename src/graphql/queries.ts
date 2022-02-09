import { gql } from '@apollo/client/core';

export const GET_POSTS = gql`
	query GetPosts {
		posts {
			id
			slug
			title
			content {
				html
				text
			}
			createdAt
		}
	}
`;

export const GET_POST = gql`
	query getPost($slug: String!) {
		post(where: { slug: $slug }) {
			title
			content {
				html
				text
			}
			teste
			createdAt
		}
	}
`;
