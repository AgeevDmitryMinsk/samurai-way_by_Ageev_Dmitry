import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {reduxForm} from "redux-form";
import {DialogsForm} from "./DialogsForm/DialogsForm";

export const Dialogs = (props: DialogsPropsType) => {

	//вынесем данные из компоненты в BLL в index.tsx
	// type DialogItemType = {
	// 	id: number
	// 	name: string
	// }
	// const DialogsData: DialogItemType[] = [
	// 	{id:1, name: 'Dima3'},
	// 	{id:2, name: 'Natasha3'},
	// 	{id:3, name: 'Ksenia3'},
	// 	{id:4, name: 'Vera3'},
	// ]
	//
	// const MessagesData: MessageType[] = [
	// 	{id:1, message: 'HI !!!3'},
	// 	{id:2, message: 'Hello 3'},
	// 	{id:3, message: 'Good Afternoon 3'},
	//
	// ]
	// function newMessageOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
	// 	//console.log(e.currentTarget.value)
	// 	let newMessage = e.currentTarget.value
	// 	//props.store.dispatch(changeNewMessageTextAC(newMessage))
	// 	props.newMessageOnChange(newMessage)
	// 	//console.log('props.MessagesData.newMessageText заносим в state = ', props.MessagesData.newMessageText)
	// }

	// function addMessageHandler() {
	// 	//props.addMessage(props.DialogsPage.newMessageText)
	// 	//props.addMessage()
	// 	//props.store.dispatch(addMessageAC(props.MessagesData.newMessageText))
	// 	//console.log(`props.MessagesData.newMessageText из state до обнуления = `, props.MessagesData.messages.at(-1)?.message)
	// }
	//
	// // function onKeyPressInputHandle(e: React.KeyboardEvent<HTMLInputElement>) {
	// // 	if (e.key === `Enter`) {
	// // 		addMessageHandler()
	// // 	}
	// // }
	//
	// //console.log("props.isAuth = ", props.isAuth) // true если withCredentials: true, и залогинен на https://social-network.samuraijs.com/api/1.0/
	// //if (props.isAuth === false) return <Redirect to={"/login"}/>
	// //isAuth: state.auth.isAuth - не нужно пробрасывать в Dialogs
	// // при использовании withAuthRedirect
	// //console.log(props.dialogs)

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
