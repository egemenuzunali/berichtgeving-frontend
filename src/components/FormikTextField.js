import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import FormikErrorMssg from './FormikErrorMssg';

const FormikTextField = ({ label, name, placeholder, type, formik }) => {
	if (!type) {
		type = 'test';
	}
	let error;
	if (formik.errors[name] && formik.touched[name]) {
		error = formik.errors[name];
	}
	return (
		<Fragment>
			<TextField
				id={name}
				name={name}
				label={label}
				type={type}
				error={formik.errors[name] && formik.touched[name]}
				onChange={formik.handleChange(name)}
				onBlur={formik.handleBlur(name)}
				margin="normal"
			/>
			<FormikErrorMssg error={error} />
		</Fragment>
	);
};

export default FormikTextField;
