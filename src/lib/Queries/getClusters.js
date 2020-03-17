import gql from 'graphql-tag';

const GET_CLUSTERS = gql`
	query GET_CLUSTERS {
		getAllClusters {
			description
			id
			directions {
				id
				description
				coreProcesses {
					description
					id
				}
			}
		}
	}
`;

export default GET_CLUSTERS;
