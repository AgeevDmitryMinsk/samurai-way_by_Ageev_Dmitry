import React from 'react';
import { Field } from 'react-final-form'

type DialogsFormType = {
	handleSubmit: any
}

export const DialogsForm = (props: DialogsFormType) => {
	const {handleSubmit} = props
	return (
		<form onSubmit={handleSubmit}>
			<Field name={'newMessage'} component={'input'}  placeholde={'your dialog message'}/>
				{/*// onChange={newMessageOnChangeHandler}*/}
				{/*//    onKeyPress={ onKeyPressInputHandle}*/}
				{/*//    value={props.newMessageText} />*/}
			{/*<button onClick={addMessageHandler}>send message</button>*/}
			<button type={'submit'}>send message</button>
		</form>
	);
};


