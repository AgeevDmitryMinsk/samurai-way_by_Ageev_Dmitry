import React from 'react';
import {Field, InjectedFormProps} from "redux-form";


export const LoginForm = (props: InjectedFormProps) => {
	//debugger
	//const {handleSubmit,form,clearSubmit,dirty,touch}  = props // можно сделать деструктуризацию
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{/*<input placeholder={"Login"}/> - БЫЛО input, ЗАМЕНИЛИ НА Field */}
				<Field placeholder={"Login"} name={'login'} component={'input'}/>
			</div>
			<div>
				<Field placeholder={"Password"}  name={'password'} component={'input'}/>
			</div>
			<div>
				<Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
			</div>
			<div>
				<button>Log In</button>
			</div>

		</form>
	);
};



