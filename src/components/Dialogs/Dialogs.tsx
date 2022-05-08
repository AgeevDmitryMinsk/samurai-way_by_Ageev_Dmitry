import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
	ActionsTypes,
	//addMessageAC,
	//changeNewMessageTextAC,
	//DialogItemType,
	DialogsPageType,
	//MessageType
} from "../../redux/store";
import {addMessageAC, changeNewMessageTextAC} from "../../redux/messages-reducer";
import {ReduxStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
	//DialogsData: DialogItemType[]
	// MessagesData: MessageType[]
	MessagesData: DialogsPageType
	//dispatch: (action: ActionsTypes) => void
	//store: ReduxStoreType
	newMessageOnChange: (newMessage: string) => void
	addMessage: ()=>void
	//store: ReduxStoreType
}

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
	function newMessageOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
		//console.log(e.currentTarget.value)
		let newMessage = e.currentTarget.value
		//props.store.dispatch(changeNewMessageTextAC(newMessage))
		props.newMessageOnChange(newMessage)
		//console.log('props.MessagesData.newMessageText заносим в state = ', props.MessagesData.newMessageText)
	}

	function addMessageHandler() {
		props.addMessage()
		//props.store.dispatch(addMessageAC(props.MessagesData.newMessageText))
		console.log(`props.MessagesData.newMessageText из state до обнуления = `, props.MessagesData.messages.at(-1)?.message)
	}

	//console.log(props.DialogsData)
	return (

		<div className={s.dialogs}>
			Dialogs:
			<div>

				{props.MessagesData.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} photo={el.photo}/>)}
				<>
					{/*<DialogItem name={'Dima'} id={1}/>*/}
					{/*<DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
					{/*<DialogItem name={'Natasha'} id={2}/>*/}
					{/*<DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>*/}
					{/*<DialogItem name={'Ksenia'} id={3}/>*/}
					{/*<DialogItem name={'Vera'} id={4}/>*/}
				</>
			</div>
			<div>
				{props.MessagesData.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)}
				<>
					{/*<Message message={'HI !!!'} id={1}/>*/}
					{/*<Message message={'Hello'} id={2}/>*/}
					{/*<Message message={'Good Afternoon'} id={3}/>*/}
					{/*<Message message={MessagesData[0].message} id={MessagesData[0].id}/>*/}
					{/*<Message message={MessagesData[1].message} id={MessagesData[1].id}/>*/}
					{/*<Message message={MessagesData[2].message} id={MessagesData[2].id}/>*/}
				</>
			</div>
			Please, enter new message:
			<div>
				<input onChange={newMessageOnChangeHandler} value={props.MessagesData.newMessageText}/>
				<button onClick={addMessageHandler}>send message</button>
			</div>

		</div>
	)
}

