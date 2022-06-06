import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {InputArea} from "../common/InputArea";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength25 = maxLengthCreator(25) // необх вынести за пределы функц LoginForm
												// иначе будет зацикливание функции LoginForm

const emailValidation = (value:string)  =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Invalid email address' : undefined



export const LoginForm = (props: InjectedFormProps) => {

	console.log(props.error) //undefined или Email or password is wrong from loginThunkCreator (177 строка)
	//debugger
	//const {handleSubmit,form,clearSubmit,dirty,touch}  = props // можно сделать деструктуризацию
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{/*<input placeholder={"Login"}/> - БЫЛО input, ЗАМЕНИЛИ НА Field */}
				{/*<Field placeholder={"Login"} name={'login'} component={'input'}/>*/}
				{/*component={'input'} ЗАМЕНИЛИ НА component={InputArea}*/}
				<label htmlFor={`email`}>Email</label><br />
				<Field placeholder={"email"}
					   name={'email'}
					   type={'email'}
					   component={InputArea}
					   validate={[requiredField, maxLength25, emailValidation]}
					   dirty={props.dirty}
				/>
			</div>
			<div>
				<label htmlFor={`password`}>Password</label><br />
				<Field placeholder={"password"}
					   name={'password'}
					   component={InputArea}
					   validate={[requiredField, maxLength25]}
					   type={'password'}
					   dirty={props.dirty}
				/>
			</div>
			<span>
				<Field type={"checkbox"} name={'rememberMe'} component={'input'} /> remember me
			</span>

			<div style={{color: "firebrick"}}>{props.error}</div>

			<div>
				<button>Log In</button>
			</div>


		</form>
	)
};



