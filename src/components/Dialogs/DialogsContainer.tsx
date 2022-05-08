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
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
	//DialogsData: DialogItemType[]
	// MessagesData: MessageType[]
	//MessagesData: DialogsPageType
	//dispatch: (action: ActionsTypes) => void
	store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

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
	function newMessageOnChangeHandler(newMessage:string) {
		// console.log(e.currentTarget.value)
		// let newMessage = e.currentTarget.value
		props.store.dispatch(changeNewMessageTextAC(newMessage))
		//console.log('props.MessagesData.newMessageText заносим в state = ', props.MessagesData.newMessageText)
	}

	function addMessageHandler() {
		props.store.dispatch(addMessageAC(props.store.getState().DialogsPage.newMessageText))
		//console.log(`props.MessagesData.newMessageText из state до обнуления = `, props.MessagesData.messages.at(-1)?.message)
	}

	//console.log(props.DialogsData)
	return (<Dialogs MessagesData={props.store.getState().DialogsPage}
					 newMessageOnChange={newMessageOnChangeHandler}
					 addMessage={addMessageHandler}/>	)
}

