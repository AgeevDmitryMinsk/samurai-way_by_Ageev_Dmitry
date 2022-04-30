import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


export type MessageType = {
	message: string
	id: number
}
export type DialogItemType = {
	id: number
	name: string
}
export const DialogsData: DialogItemType[] = [
	{id:1, name: 'Dima3'},
	{id:2, name: 'Natasha3'},
	{id:3, name: 'Ksenia3'},
	{id:4, name: 'Vera3'},
]

export const MessagesData: MessageType[] = [
	{id:1, message: 'HI !!!3'},
	{id:2, message: 'Hello 3'},
	{id:3, message: 'Good Afternoon 3'},

]

export type PostDataType = {
	id:number
	message: string
	likesCount:number
}

let PostData:PostDataType[] = [
	{id:1, 	message: "It's my 3nd post", likesCount:5},
	{id:2, 	message: "Hi, how are you now?", likesCount:7},
	{id:3, 	message: "Where are you from?", likesCount:9},

]

ReactDOM.render(<App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>, document.getElementById('root'))
