import Dima_photo from "../photos/Dima.png"
import Natasha_photo from "../photos/Natasha.png"
import Vera_photo from "../photos/Vera.png"
import Ksenia_photo from "../photos/Ksenia.png"
//import {v1} from "uuid";
import {AddPostActionType, ChangeNewTextActionType,
//	profileReducer
} from "./profile-reducer";
import {addMessageType, changeNewMessageTextType,
//	messagesReducer
} from "./messages-reducer";
//import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
//import {rerenderEntireTree} from "../rerenderEntireTree";


type MessageType = {
	message: string
	id: string
}
type DialogItemType = {
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
type PostDataType = {
	id: string
	message: string
	likesCount: number
}
// export let PostData: PostDataType[] = [
// 	{id: '1', message: "It's my 3nd post", likesCount: 5},
// 	{id: '2', message: "Hi, how are you now?", likesCount: 7},
// 	{id: '3', message: "Where are you from?", likesCount: 9},
// ]

export type RootStateType = {
	ProfilePage: ProfilePageType
	DialogsPage: DialogsPageType
}

//ProfilePage -> posts
//DialogsPage ->  dialogs + messages
export type ProfilePageType = {
	posts: PostDataType[]
	newPostText: string
}

export type DialogsPageType = {
	messages: MessageType[]
	dialogs: DialogItemType[]
	newMessageText: string
}

// export let state: RootStateType = {
// 	ProfilePage: {
// 		posts: [
// 			{id: '1', message: "It's my 3nd post", likesCount: 5},
// 			{id: '2', message: "Hi, how are you now?", likesCount: 7},
// 			{id: '3', message: "Where are you from?", likesCount: 9}],
// 		newPostText: ""
// 	},
// 	DialogsPage: {
// 		messages: [
// 			{id: '1', message: 'HI !!!3'},
// 			{id: '2', message: 'Hello 3'},
// 			{id: '3', message: 'Good Afternoon 3'},
// 		],
// 		dialogs: [
// 			{id: '1', name: 'Dima3', photo: Dima_photo},
// 			{id: '2', name: 'Natasha3', photo: Natasha_photo},
// 			{id: '3', name: 'Ksenia3', photo: Ksenia_photo},
// 			{id: '4', name: 'Vera3', photo: Vera_photo},
// 		]
// 	}
// }

// export const addPost = (newPostMessage: string) => {
// 	let newPost: PostDataType = {id: v1(), message: newPostMessage, likesCount: 0}
// 	state.ProfilePage.posts.push(newPost)
// 	// rerenderEntireTree(state) //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
// 	rerenderEntireTree2() //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
// }

// export const changeTextareaTitle = (newText: string) => {
// 	state.ProfilePage.newPostText = newText
// 	//rerenderEntireTree(state) //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
// 	//console.log(`changeTextareaTitle from state`)
// 	rerenderEntireTree2() //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
// }
//
// let rerenderEntireTree2 = () => {
// 	console.log(`rerenderEntireTree`)
// }

// export const subscribe = (callback: ()=> void) => {
// 	rerenderEntireTree = callback
// 	console.log(`subscribe`)
// }

// export const subscribe = (callback: () => void) => {
// 	rerenderEntireTree2 = callback
// 	console.log(`subscribe`)
// }


export type StoreType = {
	_state: RootStateType
	_onChange: () => void
	// addPost: (newPostMessage: string) => void
	// changeTextareaTitle: (newText: string) => void
	subscribe: (callback: () => void) => void
	getState: () => RootStateType
	// dispatch: (action: FollowActionType | ChangeNewTextActionType) => void
	dispatch: (action: ActionsTypes) => void
}

// type FollowActionType = {
// 	type: "ADD-POST"
// 	newPostMessage: string
// }


export const store: StoreType = {
	_state: {
		ProfilePage: {
			posts: [
				{id: '1', message: "It's my 3nd post", likesCount: 5},
				{id: '2', message: "Hi, how are you now?", likesCount: 7},
				{id: '3', message: "Where are you from?", likesCount: 9}
			],
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
			],
			newMessageText: ""
		}
	},
	_onChange() {
		console.log(`_rerenderEntireTree2, state changed`)
	},

	subscribe(callback: () => void) {
		console.log(`subscribe`)
		this._onChange = callback
	},
	getState() {
		return this._state
	},

	//перенесем внутренности методов addPost и changeTextareaTitle в метод dispatch:
	// addPost(newPostMessage: string) {
	// 	// const newPost: PostDataType = {id: v1(), message: newPostMessage, likesCount: 0}
	// 	// this._state.ProfilePage.posts.push(newPost)
	// 	// this._state.ProfilePage.newPostText = ``
	// 	// this._onChange()
	// },
	// changeTextareaTitle(newText: string) {
	// 	// this._state.ProfilePage.newPostText = newText
	// 	// //rerenderEntireTree(state) //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
	// 	// //console.log(`changeTextareaTitle from state`)
	// 	// this._onChange() //  необходим в случае использования textarea ref={newTitleRef} в MyPost.tsx
	// },

	dispatch(action) {
		//this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
		//this._state.DialogsPage = messagesReducer(this._state.DialogsPage, action)
		//this._onChange()

		// if (action.type === "ADD-POST") {
		// 	//console.log(`addPost,addPost,addPost`)
		// 	const newPost: PostDataType = {
		// 		id: v1(), message: action.newPostMessage, likesCount: 0
		// 	}
		// 	this._state.ProfilePage.posts.push(newPost)
		// 	this._state.ProfilePage.newPostText = ``
		// 	this._onChange()
		// 	//console.log(this)//{_state: {…}, _onChange: ƒ, subscribe: ƒ, getState: ƒ, addPost: ƒ, …}
		//
		// } else if (action.type === "UPDATE-NEW-POST-TEXT") {
		// 	//console.log(this)
		// 	this._state.ProfilePage.newPostText = action.newText
		// 	this._onChange()
		// } else
		// 	if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
		// 	console.log("UPDATE-NEW-MESSAGE-TEXT")
		// 	this._state.DialogsPage.newMessageText = action.newMessage
		// 	this._onChange()
		// } else if (action.type === "ADD-MESSAGE") {
		// 	//console.log("ADD-MESSAGE")
		// 	const newMessage: MessageType = {
		// 		id: v1(), message: action.newMessageAdd
		// 	}
		// 	this._state.DialogsPage.messages.push(newMessage)
		// 	this._state.DialogsPage.newMessageText = ``
		// 	this._onChange()
		// }

	}
}




//export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>
type ActionsTypes = AddPostActionType | ChangeNewTextActionType | changeNewMessageTextType | addMessageType






// @ts-ignore
//window.state = state
// @ts-ignore
window.store = store
