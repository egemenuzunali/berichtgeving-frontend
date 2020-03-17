import gql from 'graphql-tag';

const SIGN_OUT_MUTATION = gql`
	mutation SIGN_OUT_MUTATION {
		signOut {
			message
		}
	}
`;

export default SIGN_OUT_MUTATION;
