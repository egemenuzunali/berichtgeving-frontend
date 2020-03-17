import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
	query CURRENT_USER_QUERY {
		getCurrentUser {
			fullName
		}
	}
`;

export default CURRENT_USER_QUERY;
