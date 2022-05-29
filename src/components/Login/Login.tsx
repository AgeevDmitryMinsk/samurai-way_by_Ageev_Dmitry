import React from 'react';
import {reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";


export const Login = () => {

	const onSubmitHandle = (formData: { }) =>{
		console.log(`formData =` , formData) // formData = {login: '4564', password: '4654564777', rememberMe: true}
	}

	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<LoginReduxForm
				onSubmit={onSubmitHandle}/>
		</div>
	);
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
