import React from 'react';
import {LoginForm} from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type FormDataType = {
	email: string
	password: string
	rememberMe: boolean // | null
}

const Login = (props: OwnLoginPropsType) => {

	const onSubmitHandle = (formData: FormDataType  ) => {
		//debugger
		console.log(`formData from Login =` , formData) // formData = {login: '4564', password: '4654564777', rememberMe: true}
		props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
		console.log(`21 props.isAuth in Login.tsx:`, props.isAuth.toString())
		//reset or clear forms:
		formData.email = ``
		formData.password = ``
		formData.rememberMe =  false//null
	}
	console.log(`27 props.isAuth in Login.tsx:`, props.isAuth.toString()) // true/false  - залогинен/незалогинен

	if (props.isAuth) return <Redirect to={`/profile`}/>
	//if (props.isAuth) return <Redirect to={'/profile/:userId?'}/>

	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<LoginReduxForm onSubmit={onSubmitHandle}/>

		</div>
	);
};


type OwnLoginPropsType = mapDispatсhToPropsType & mapStateToPropsType



type mapDispatсhToPropsType = {
	loginThunkCreator: (email: string, password: string, rememberMe: null | boolean) => void
}

const LoginReduxForm = reduxForm<FormDataType, any>({form: 'login'})(LoginForm)

type mapStateToPropsType = {
	isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return {
		isAuth: state.auth.isAuth // нужно пробрасывать в Login для дальнейшего ридеректа на profilePage, если пользователь залогиен
	}
}



export const LoginContainer = connect(mapStateToProps, {loginThunkCreator,})(Login)

// export  const LoginContainer = compose<React.ComponentType>(
// 	withAuthRedirect, connect(null,
// 		{loginThunkCreator},
// 	))(Login)
