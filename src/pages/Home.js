import React from 'react';
import {
	Paper,
	List,
	ListItem,
	FormControl,
	ListItemAvatar,
	ListItemText,
	Select,
	MenuItem,
	InputLabel,
	Grid,
} from '@material-ui/core/';
import { useQuery } from '@apollo/react-hooks';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import GET_CLUSTERS from '../lib/Queries/getClusters';

const INITIAL_STATE = {
	cluster: '',
	direction: '',
};

const Home = () => {
	const [state, setState] = React.useState({ ...INITIAL_STATE });
	const { loading, error, data } = useQuery(GET_CLUSTERS);

	const handleChange = (name) => (event) => {
		if (name === 'cluster') {
			return setState({
				...state,
				[name]: event.target.value,
				direction: '',
			});
		}
		setState({ ...state, [name]: event.target.value });
	};

	const renderDirectionItems = () => {
		const selectedCluster = data.getAllClusters.filter(
			(cluster) => cluster.id === state.cluster
		)[0];

		return selectedCluster.directions.map((direction) => (
			<MenuItem value={direction.id} key={direction.description}>
				{direction.description}
			</MenuItem>
		));
	};

	const renderCoreProcesses = () => {
		const selectedCluster = data.getAllClusters.filter(
			(cluster) => cluster.id === state.cluster
		)[0];
		const selectedDirection = selectedCluster.directions.filter(
			(direction) => direction.id === state.direction
		);
		return selectedDirection[0].coreProcesses.map((process) => (
			<ListItem key={process.id} button>
				<ListItemAvatar>
					<Avatar>
						<FolderIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={process.description}
					secondary={process.crucial ? 'Cruciaal: JA' : 'Cruciaal: Nee'}
				/>
			</ListItem>
		));
	};

	return (
		<Paper elevation={0}>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<FormControl fullWidth>
						<InputLabel>Kies cluster</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state.cluster}
							onChange={handleChange('cluster')}
							color="secondary"
						>
							{data &&
								data.getAllClusters.map((cluster) => (
									<MenuItem value={cluster.id} key={cluster.description}>
										{cluster.description}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<FormControl fullWidth>
						<InputLabel>Kies Directie</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state.direction}
							onChange={handleChange('direction')}
							color="secondary"
							disabled={!state.cluster}
						>
							{state.cluster && renderDirectionItems()}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={6}>
					<List dense>
						{state.cluster && state.direction && renderCoreProcesses()}
					</List>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Home;
