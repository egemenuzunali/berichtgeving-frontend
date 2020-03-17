import React, { Fragment } from 'react';
import { useFormik, Formik, Form } from 'formik';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { useMutation, useQuery } from '@apollo/react-hooks';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';
import SIGNIN_MUTATION from '../lib/Mutations/signInMutation';

import Error from '../components/ErrorMessage';
import FormikTextField from '../components/FormikTextField';
import FormikErrorMssg from '../components/FormikErrorMssg';

const LoginFormSchema = Yup.object().shape({
	email: Yup.string()
		.email('Email is invalid')
		.required('Email is required'),
	password: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'That seems a bit long')
		.required('Password is required'),
});

const Login = (props) => {
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	const [signIn] = useMutation(SIGNIN_MUTATION);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: LoginFormSchema,
		onSubmit: async (values) => {
			try {
				await signIn({
					variables: values,
					refetchQueries: [
						{
							query: CURRENT_USER_QUERY,
						},
					],
				});
			} catch (err) {
				formik.setFieldError('general', err);
			}
		},
	});
	console.log(formik);
	return (
		<Fragment>
			<Paper elevation={1}>
				<h3>Capaciteit</h3>
				<form onSubmit={formik.handleSubmit}>
					<Error error={error} />
					<FormikErrorMssg error={formik.errors.general} />
					<FormikTextField
						type="email"
						formik
						name="email"
						label="Email"
						formik={formik}
					/>
					<FormikTextField
						type="password"
						formik
						name="password"
						label="Password"
						formik={formik}
					/>
					<Button
						variant="contained"
						type="submit"
						className="full-width"
						color="primary"
					>
						Sign In
					</Button>
				</form>
			</Paper>
		</Fragment>
	);
};

export default Login;
