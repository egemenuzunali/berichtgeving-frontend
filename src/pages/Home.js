import React from 'react';
import { Typography, Paper, Button, TextField } from '@material-ui/core/';
import { useMutation, useQuery } from '@apollo/react-hooks';
import ADD_USER from '../lib/Mutations/addUser';
import GET_ALL_USERS from '../lib/Queries/getAllUsers';

const INITIAL_STATE = {
	name: '',
};

const Home = () => {
	const [addUser] = useMutation(ADD_USER);
	const { loading, error, data } = useQuery(GET_ALL_USERS);
	const [state, setState] = React.useState({ INITIAL_STATE });

	const handleChange = (name) => (event) => {
		setState({ ...state, [name]: event.target.value });
	};

	const doAddUser = async (e) => {
		e.preventDefault();
		await addUser({
			variables: {
				name: state.name,
			},
			refetchQueries: [
				{
					query: GET_ALL_USERS,
				},
			],
		});
	};

	return (
		<Paper elevation={0}>
			<Typography>placeholder</Typography>
			<form onSubmit={doAddUser}>
				<TextField
					required
					id="name"
					label="name"
					onChange={handleChange('name')}
				/>

				<Button
					variant="contained"
					color="secondary"
					onClick={doAddUser}
					disabled={!state.name}
					type="submit"
				>
					Add User
				</Button>
			</form>
			{data &&
				data.getAllUsers.map((user) => (
					<Typography key={user.name}>{user.name}</Typography>
				))}
		</Paper>
	);
};

export default Home;
