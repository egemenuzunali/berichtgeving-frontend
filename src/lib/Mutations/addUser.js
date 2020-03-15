import gql from 'graphql-tag';

const ADD_USER = gql`
	mutation ADD_USER($name: String!) {
		addUser(name: $name) {
			name
		}
	}
`;

export default ADD_USER;
