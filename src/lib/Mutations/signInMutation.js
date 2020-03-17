import gql from 'graphql-tag';

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($username: String!, $password: String!) {
		signIn(username: $username, password: $password) {
			user {
				fullName
			}
			token
		}
	}
`;

export default SIGNIN_MUTATION;
