import gql from 'graphql-tag';

const GET_ALL_USERS = gql`
	query GET_ALL_USERS {
		getAllUsers {
			name
		}
	}
`;

export default GET_ALL_USERS;
