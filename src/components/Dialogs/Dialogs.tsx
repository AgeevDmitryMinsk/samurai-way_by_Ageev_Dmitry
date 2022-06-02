import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {reduxForm} from "redux-form";
import {DialogsForm} from "./DialogsForm/DialogsForm";

export const Dialogs = (props: DialogsPropsType) => {

	const onSubmitHandleDialogs = (formData: any) => {
		console.log(`formData from DialogsReduxForm =` , formData)
		props.addMessage(formData.newMessage)
		formData.newMessage = ''

	}
	return (

		<div className={s.dialogs}>
			Dialogs:
			<div>

				{props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} photo={el.photo}/>)}

			</div>
			<div>
				{props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)}

			</div>
			Please, enter new message:
			<div>
				<DialogsReduxForm onSubmit={onSubmitHandleDialogs}/>



			</div>

		</div>
	)
}

const DialogsReduxForm = reduxForm({form:'dialogs'})(DialogsForm)
