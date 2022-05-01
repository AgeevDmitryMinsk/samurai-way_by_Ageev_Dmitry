import Dima_photo from "../photos/Dima.png"
import Natasha_photo from "../photos/Natasha.png"
import Vera_photo from "../photos/Vera.png"
import Ksenia_photo from "../photos/Ksenia.png"
import {v1} from "uuid";

export type MessageType = {
	message: string
	id: string
}
export type DialogItemType = {
	id: string
	name: string
	photo: string
}
// export const DialogsData: DialogItemType[] = [
// 	{id: 1, name: 'Dima3', photo: Dima_photo},
// 	{id: 2, name: 'Natasha3', photo: Natasha_photo},
// 	{id: 3, name: 'Ksenia3', photo: Ksenia_photo},
// 	{id: 4, name: 'Vera3', photo: Vera_photo},
// ]
export const MessagesData: MessageType[] = [
	{id: '1', message: 'HI !!!3'},
	{id: '2', message: 'Hello 3'},
	{id: '3', message: 'Good Afternoon 3'},

]
export type PostDataType = {
	id: string
	message: string
	likesCount: number
}
export let PostData: PostDataType[] = [
	{id: '1', message: "It's my 3nd post", likesCount: 5},
	{id: '2', message: "Hi, how are you now?", likesCount: 7},
	{id: '3', message: "Where are you from?", likesCount: 9},
]

export type StateType = {
	// posts: PostDataType[]
	// messages: MessageType[]
	// dialogs: DialogItemType[]
	ProfilePage: ProfilePageType
	DialogsPage: DialogsPageType
}

//ProfilePage -> posts
//DialogsPage ->  dialogs + messages
type ProfilePageType = {
	posts: PostDataType[]
}

type DialogsPageType = {
	messages: MessageType[]
	dialogs: DialogItemType[]
}

export let state: StateType = {
	ProfilePage: {
		posts: [
			{id: '1', message: "It's my 3nd post", likesCount: 5},
			{id: '2', message: "Hi, how are you now?", likesCount: 7},
			{id: '3', message: "Where are you from?", likesCount: 9}]
	},
	DialogsPage: {
		messages: [
			{id: '1', message: 'HI !!!3'},
			{id: '2', message: 'Hello 3'},
			{id: '3', message: 'Good Afternoon 3'},
		],
		dialogs: [
			{id: '1', name: 'Dima3', photo: Dima_photo},
			{id: '2', name: 'Natasha3', photo: Natasha_photo},
			{id: '3', name: 'Ksenia3', photo: Ksenia_photo},
			{id: '4', name: 'Vera3', photo: Vera_photo},
		]
	}
}


// @ts-ignore
window.state = state

export const addPost = (newPostMessage:string) => {
	debugger
	let newPost:PostDataType = {id: v1(), message: newPostMessage, likesCount:0}
	state.ProfilePage.posts.push(newPost)
}

