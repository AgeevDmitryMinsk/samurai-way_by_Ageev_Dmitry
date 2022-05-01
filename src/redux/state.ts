import Dima_photo from "../photos/Dima.png"
import Natasha_photo from "../photos/Natasha.png"
import Vera_photo from "../photos/Vera.png"
import Ksenia_photo from "../photos/Ksenia.png"
import {v1} from "uuid";
import {rerenderEntireTree} from "../index";

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
// export const MessagesData: MessageType[] = [
// 	{id: '1', message: 'HI !!!3'},
// 	{id: '2', message: 'Hello 3'},
// 	{id: '3', message: 'Good Afternoon 3'},
//
// ]
export type PostDataType = {
	id: string
	message: string
	likesCount: number
}
// export let PostData: PostDataType[] = [
// 	{id: '1', message: "It's my 3nd post", likesCount: 5},
// 	{id: '2', message: "Hi, how are you now?", likesCount: 7},
// 	{id: '3', message: "Where are you from?", likesCount: 9},
// ]

export type StateType = {
	ProfilePage: ProfilePageType
	DialogsPage: DialogsPageType
}

//ProfilePage -> posts
//DialogsPage ->  dialogs + messages
export type ProfilePageType = {
	posts: PostDataType[]
	newPostText: string

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
			{id: '3', message: "Where are you from?", likesCount: 9}],
		newPostText: ""
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

type StoreType = {
	_state: StateType
}

let store: StoreType = {
	_state: {
		ProfilePage: {
			posts: [
				{id: '1', message: "It's my 3nd post", likesCount: 5},
				{id: '2', message: "Hi, how are you now?", likesCount: 7},
				{id: '3', message: "Where are you from?", likesCount: 9}]
			, newPostText: ""
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
}

// @ts-ignore
window.state = state

export const addPost = (newPostMessage: string) => {
	let newPost: PostDataType = {id: v1(), message: newPostMessage, likesCount: 0}
	state.ProfilePage.posts.push(newPost)
	rerenderEntireTree(state) //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
}

export const changeTextareaTitle = (newText: string) => {
	state.ProfilePage.newPostText = newText
	rerenderEntireTree(state) //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
	//console.log(`changeTextareaTitle from state`)
}


