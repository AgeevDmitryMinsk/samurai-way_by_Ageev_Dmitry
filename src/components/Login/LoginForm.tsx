import React from 'react';
import {AnyObject, Field} from "react-final-form";

type LoginFormProps ={
	handleSubmit:  (event?: (Partial<Pick<React.SyntheticEvent<Element, Event>, "preventDefault" | "stopPropagation">> | undefined)) => (Promise<AnyObject | undefined> | undefined)
}

export const LoginForm = (props:LoginFormProps ) => {
	const {handleSubmit} = props
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field placeholder={"Login"} name={'LoginFinal'} component={"input"}/>
			</div>
			<div>
				<Field placeholder={"Password"} name={"Password"} component={"input"}/>
			</div>
			<div>
				<Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
			</div>
			<div>
				<button type={"submit"}>Log In</button>
			</div>

		</form>
	);
};

