import React from 'react';
import PropTypes from 'prop-types';
import {
	Paper,
	Typography,
	TextField,
	Button,
	makeStyles,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Error from './ErrorMessage';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';
import SIGNIN_MUTATION from '../lib/Mutations/signInMutation';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '50vw',
		padding: '16px',
		[theme.breakpoints.down('sm')]: {
			width: '80vw',
		},
	},
	formStyles: {
		display: 'flex',
		border: 'none !important',
	},
}));

const INITIAL_STATE = {
	email: '',
	password: '',
};

const SignIn = ({ history }) => {
	console.log(history);
	const [state, setState] = React.useState({ ...INITIAL_STATE });
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	const [signIn] = useMutation(SIGNIN_MUTATION);
	const classes = useStyles();

	React.useEffect(() => {
		if (data.me) {
			history.push('/');
		}
	}, [data]);

	const saveToState = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<Paper className={classes.root}>
			<form
				method="post"
				onSubmit={async (e) => {
					e.preventDefault();
					await signIn();
					setState({ password: '', email: '' });
				}}
			>
				<fieldset
					disabled={loading}
					aria-busy={loading}
					className={classes.formStyles}
				>
					<Typography variant="h6">Inloggen</Typography>
					<Error error={error} />
					<TextField
						id="email"
						label="email"
						type="email"
						name="email"
						htmlFor="email"
						value={state.email}
						onChange={saveToState}
						margin="normal"
					/>
					<TextField
						id="password"
						label="password"
						type="password"
						name="password"
						htmlFor="password"
						value={state.password}
						onChange={saveToState}
						margin="normal"
					/>
					<div className="flex-column-center">
						<Button
							variant="contained"
							type="submit"
							className="full-width"
							color="primary"
						>
							Sign In
						</Button>
					</div>
				</fieldset>
			</form>
		</Paper>
	);
};

SignIn.propTypes = {
	history: PropTypes.object.isRequired,
};

export default SignIn;
