import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";


export const Login = () => {

	const onSubmitHandle = (formData: any ) =>{
		console.log(`formData from Login =` , formData) // formData = {login: '4564', password: '4654564777', rememberMe: true}

		//reset or clear forms:
		formData.login = ``
		formData.password = ``
		formData.rememberMe = null
	}

	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<LoginReduxForm	onSubmit={onSubmitHandle}/>
		</div>
	);
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
