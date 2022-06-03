import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {InputArea} from "../common/InputArea";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength25 = maxLengthCreator(25) // необх вынести за пределы функц LoginForm
												// иначе будет зацикливание функции LoginForm

export const LoginForm = (props: InjectedFormProps) => {
	//debugger
	//const {handleSubmit,form,clearSubmit,dirty,touch}  = props // можно сделать деструктуризацию
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				{/*<input placeholder={"Login"}/> - БЫЛО input, ЗАМЕНИЛИ НА Field */}
				{/*<Field placeholder={"Login"} name={'login'} component={'input'}/>*/}
				{/*component={'input'} ЗАМЕНИЛИ НА component={InputArea}*/}
				<Field placeholder={"Login"}
					   name={'login'}
					   component={InputArea}
					   validate={[requiredField, maxLength25]}
					   dirty={props.dirty}
				/>
			</div>
			<div>
				<Field placeholder={"Password"}
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
			<div>
				<button>Log In</button>
			</div>

		</form>
	)
};



