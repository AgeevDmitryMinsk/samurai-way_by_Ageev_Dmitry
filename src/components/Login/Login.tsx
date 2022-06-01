import React from 'react';
import {LoginForm} from "./LoginForm";
import { Form, Field } from 'react-final-form'


export const Login = () => {

	const onSubmitHandle = (formData: {}) =>{
		console.log(`formData =` , formData) // formData = {login: '4564', password: '4654564777', rememberMe: true}
	}

	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<Form onSubmit={onSubmitHandle} render={({handleSubmit})=>
				(<LoginForm handleSubmit={handleSubmit}/>)}/>
		</div>
	);
};


