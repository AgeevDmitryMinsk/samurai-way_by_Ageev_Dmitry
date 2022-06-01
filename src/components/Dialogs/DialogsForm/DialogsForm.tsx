import React from 'react';
import {AnyObject, Field} from 'react-final-form'

type DialogsFormType = {
	handleSubmit:  (event?: (Partial<Pick<React.SyntheticEvent<Element, Event>, "preventDefault" | "stopPropagation">> | undefined)) => (Promise<AnyObject | undefined> | undefined)
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


