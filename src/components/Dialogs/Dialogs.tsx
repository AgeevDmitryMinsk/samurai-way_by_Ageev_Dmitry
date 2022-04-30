import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

export const Dialogs = () => {

	type DialogItemType = {
		id: number
		name: string
	}
	const DialogsData: DialogItemType[] = [
		{id:1, name: 'Dima2'},
		{id:2, name: 'Natasha2'},
		{id:3, name: 'Ksenia2'},
		{id:4, name: 'Vera2'},
	]

	const MessagesData: MessageType[] = [
		{id:1, message: 'HI !!!2'},
		{id:2, message: 'Hello 2'},
		{id:3, message: 'Good Afternoon 2'},

	]

	return (
		<div className={s.dialogs}>
			Dialogs:
			<div className={s.dialogItems}>
				{DialogsData.map(el=><DialogItem name={el.name} id={el.id} key={el.id}/>)}
				{/*<DialogItem name={'Dima'} id={1}/>*/}
				{/*<DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
				{/*<DialogItem name={'Natasha'} id={2}/>*/}
				{/*<DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>*/}
				{/*<DialogItem name={'Ksenia'} id={3}/>*/}
				{/*<DialogItem name={'Vera'} id={4}/>*/}



			</div>
			<div className={s.messages}>
				{MessagesData.map(el=><Message message={el.message} id={el.id} key={el.id}/>)}
				<Message message={'HI !!!'} id={1}/>
				<Message message={'Hello'} id={2}/>
				<Message message={'Good Afternoon'} id={3}/>
				<Message message={MessagesData[0].message} id={MessagesData[0].id}/>
				<Message message={MessagesData[1].message} id={MessagesData[1].id}/>
				<Message message={MessagesData[2].message} id={MessagesData[2].id}/>
			</div>
		</div>
	)
}

type DialogItemType = {
	name: string
	id: number
}
const DialogItem = (props: DialogItemType) => {
	return (
		<div>
			<NavLink
				to={`/dialogs/${props.id}`}
				className={s.dialog}
				activeClassName={`${s.dialog} ${s.active}`}
			>
				{props.name}
			</NavLink>
		</div>

	)
}
type MessageType = {
	message : string
	id:number
}
const Message = (props: MessageType) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}
