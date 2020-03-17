import gql from 'graphql-tag';

const GET_DIRECTIONS_FROM_CLUSTER = gql`
	query GET_DIRECTIONS_FROM_CLUSTER($clusterId: String!) {
		getDirectionByCluster(clusterId: $clusterId) {
			description
			id
		}
	}
`;

export default GET_DIRECTIONS_FROM_CLUSTER;
