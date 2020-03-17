import React from 'react';
import LoginForm from './LoginForm';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router';

const PleaseSignIn = (props) => {
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something went wrong</p>;
	if (!data.me) {
		return (
			<div>
				<p>Please Sign In before Continuing</p>
				<LoginForm history={props.history} />
			</div>
		);
	}
	return props.children;
};

export default withRouter(PleaseSignIn);
