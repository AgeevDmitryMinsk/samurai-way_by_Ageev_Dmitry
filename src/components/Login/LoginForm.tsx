import {Field, Form, Formik } from 'formik';
import React from 'react';


export const LoginForm = () => {
	return (
		<>
			<Formik initialValues={{Login:'', Password:'', rememberMe:''}}
					onSubmit={(values) => {
						console.log(values)
					}}>

				<Form>
					<div>
						<Field name={'Login'} type={'input'} placeholder={"Login"}/>
					</div>
					<div>
						<Field name={'Password'} type={'input'} placeholder={"Password"}/>
					</div>
					<div>
						<Field type={"checkbox"} name={'rememberMe'}/> remember me
					</div>
					<div>
						<button type="submit">Log In</button>
					</div>

				</Form>

			</Formik>

		</>

	);
};

