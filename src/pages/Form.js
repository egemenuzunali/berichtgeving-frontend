import React from 'react';
import {
	TextField,
	Typography,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from '@material-ui/core/';
import { useQuery } from '@apollo/react-hooks';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

const INITIAL_STATE = {
	cluster: '',
	direction: '',
};

const Form = ({ history }) => {
	const [state, setState] = React.useState({ ...INITIAL_STATE });

	const handleChange = (name) => (event) => {
		setState({ ...state, [name]: event.target.value });
	};

	return (
		<div elevation={0}>
			<Typography>
				Huidig niveau BCP (Business Continuiteits Plan). Op welk niveau zit het
				kernproces nu ?
			</Typography>
			<FormControl fullWidth>
				<InputLabel>Kies huidig BCP Niveau</InputLabel>
				<Select
					value={state.cluster}
					onChange={handleChange('cluster')}
					color="secondary"
				>
					<MenuItem></MenuItem>
				</Select>
			</FormControl>
			<Typography>
				Is continuïteit geborgd? Zijn we in staat om het kernproces op het
				afgesproken niveau te blijven draaien?
			</Typography>
			<FormControl fullWidth>
				<InputLabel>Kies Continuiteitswaarboring</InputLabel>
				<Select
					value={state.cluster}
					onChange={handleChange('cluster')}
					color="secondary"
				>
					<MenuItem></MenuItem>
				</Select>
			</FormControl>
			<Typography>
				Welke beslissing is nodig van Werkgeversteam om continuïteit te borgen?
			</Typography>
			<FormControl fullWidth>
				<InputLabel>Kies gevraagde WG Team actie</InputLabel>
				<Select
					value={state.cluster}
					onChange={handleChange('cluster')}
					color="secondary"
				>
					<MenuItem></MenuItem>
				</Select>
			</FormControl>
			<Typography>
				Geef aan of er een ketenafhankelijkheid is van intern of externe
				partijen voor de voorbereiding en uitvoering van het kernproces? Maak
				een keuze uit Ja of Nee.
			</Typography>
			<FormControl fullWidth>
				<InputLabel>Ketenafhankelijkheid Ja of Nee</InputLabel>
				<Select
					value={state.cluster}
					onChange={handleChange('cluster')}
					color="secondary"
				>
					<MenuItem></MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Form;
