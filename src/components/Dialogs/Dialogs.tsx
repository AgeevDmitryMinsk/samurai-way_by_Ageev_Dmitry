import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message } from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/state";

type DialogsPropsType = {
	DialogsData: DialogItemType[]
	MessagesData: MessageType[]
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
	//console.log(props.DialogsData)
	return (

		<div className={s.dialogs}>
			Dialogs:
			<div>

				{props.DialogsData.map(el=><DialogItem name={el.name} id={el.id} key={el.id} photo={el.photo}/>)}
				{/*<DialogItem name={'Dima'} id={1}/>*/}
				{/*<DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
				{/*<DialogItem name={'Natasha'} id={2}/>*/}
				{/*<DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>*/}
				{/*<DialogItem name={'Ksenia'} id={3}/>*/}
				{/*<DialogItem name={'Vera'} id={4}/>*/}
			</div>
			<div>
				{props.MessagesData.map(el=><Message message={el.message} id={el.id} key={el.id}/>)}
				{/*<Message message={'HI !!!'} id={1}/>*/}
				{/*<Message message={'Hello'} id={2}/>*/}
				{/*<Message message={'Good Afternoon'} id={3}/>*/}
				{/*<Message message={MessagesData[0].message} id={MessagesData[0].id}/>*/}
				{/*<Message message={MessagesData[1].message} id={MessagesData[1].id}/>*/}
				{/*<Message message={MessagesData[2].message} id={MessagesData[2].id}/>*/}
			</div>
		</div>
	)
}

