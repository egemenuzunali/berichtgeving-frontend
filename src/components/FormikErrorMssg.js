import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'left',
		height: 'auto',
		flexWrap: 'wrap',
	},
	root_hide: {
		display: 'flex',
		overflow: 'hidden',
		justifyContent: 'left',
		height: '0px',
		flexWrap: 'wrap',
	},
}));

const FormikErrorMssg = ({ error }) => {
	const classes = useStyles();
	let errorClass = classes.root_hide;
	if (error && error !== undefined) {
		errorClass = classes.root;
	}
	return (
		<div className={errorClass}>
			<Chip color="error" label={error} />
		</div>
	);
};

export default FormikErrorMssg;
