import React from 'react';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import LoginForm from '../components/LoginForm';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';

const useStyles = makeStyles({
	signInContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
});

const SignIn = ({ history }) => {
	const classes = useStyles();
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	if (loading) return <p>loading</p>;
	if (error) return <p>something went wrong</p>;
	return (
		<Container maxWidth="xl">
			<div className={classes.signInContainer}>
				<LoginForm data={data} history={history} />
			</div>
		</Container>
	);
};

SignIn.propTypes = {
	history: PropTypes.object.isRequired,
};

export default SignIn;
