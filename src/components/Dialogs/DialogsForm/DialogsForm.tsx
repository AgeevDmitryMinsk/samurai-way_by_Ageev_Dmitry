import React from 'react';
import {Field, InjectedFormProps} from "redux-form";

export const DialogsForm = (props: InjectedFormProps) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field   component={'input'} name={'newMessage'} placeholder={'your dialog message'}/>
			<>{/*<input onChange={newMessageOnChangeHandler}*/}
				{/*	   onKeyPress={ onKeyPressInputHandle}*/}
				{/*	   value={props.newMessageText} />*/}</>

			{/*<button onClick={addMessageHandler}>send message</button>*/}
			<button>send dialog message</button>

		</form>
	);
};

