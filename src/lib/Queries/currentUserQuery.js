import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
	query CURRENT_USER_QUERY {
		me {
			name
		}
	}
`;

export default CURRENT_USER_QUERY;
