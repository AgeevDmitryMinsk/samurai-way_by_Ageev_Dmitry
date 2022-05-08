import {ActionsTypes, DialogsPageType, MessageType} from "./store";
import {v1} from "uuid";
import Dima_photo from "../photos/Dima.png"
import Natasha_photo from "../photos/Natasha.png"
import Vera_photo from "../photos/Vera.png"
import Ksenia_photo from "../photos/Ksenia.png"

const initialState: DialogsPageType = {
	messages: [
		{id: '1', message: 'HI from messages-reducer (connected redux by Dimich legacy code)!!!'},
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

export const messagesReducer = (state=initialState, action:ActionsTypes) => {
	switch (action.type){
		case "UPDATE-NEW-MESSAGE-TEXT": {
			state.newMessageText = action.newMessage
			return state
		}
		case "ADD-MESSAGE": {
			const newMessage: MessageType = {
				id: v1(), message: action.newMessageAdd
			}
			state.messages.push(newMessage)
			state.newMessageText = ``
			return state
		}
		default:
			return state
	}
}

export type changeNewMessageTextType = ReturnType<typeof changeNewMessageTextAC>
export type addMessageType = ReturnType<typeof addMessageAC>

export const changeNewMessageTextAC = (newMessage: string) => {
	return {
		type: "UPDATE-NEW-MESSAGE-TEXT",
		newMessage
	} as const
}

export const addMessageAC = (newMessageAdd: string) => {
	return {
		type: "ADD-MESSAGE",
		newMessageAdd
	} as const
}
