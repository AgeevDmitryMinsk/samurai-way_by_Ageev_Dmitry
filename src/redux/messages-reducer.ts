import {ActionsTypes, DialogsPageType, MessageType} from "./state";
import {v1} from "uuid";

export const messagesReducer = (state: DialogsPageType, action:ActionsTypes) => {
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
