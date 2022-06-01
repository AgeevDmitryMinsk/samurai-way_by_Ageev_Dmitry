import {v1} from "uuid";
import Dima_photo from "../photos/Dima.png"
import Natasha_photo from "../photos/Natasha.png"
import Vera_photo from "../photos/Vera.png"
import Ksenia_photo from "../photos/Ksenia.png"
import {
	AddPostActionType,
	SetUserProfileActionType,
	SetUserStatusActionType
} from "./profile-reducer";
import {
	FollowActionType,
	SetCurrentPageActionType,
	setIsFetchingActionType, setIsFollowingInProgressType,
	SetUsersActionType,
	setUsersTotalCountActionType,
	UnFollowActionType
} from "./users-reducer";
import {setAuthUserProfileType, setIsFetchingAuthType, setMyStatusForHeaderType, setUserDataType} from "./auth-reducer";
// export type DialogsPageType = {
// 	messages: MessageType[]
// 	dialogs: DialogItemType[]
// 	newMessageText: string
// }

export type ActionsTypes =
	AddPostActionType
	| AddMessageType
	| FollowActionType
	| UnFollowActionType
	| SetUsersActionType
	| SetCurrentPageActionType
	| setUsersTotalCountActionType
	| setIsFetchingActionType
	| SetUserProfileActionType
	| setUserDataType
	| setIsFetchingAuthType
	| setAuthUserProfileType
	| setIsFollowingInProgressType
	| SetUserStatusActionType
	| setMyStatusForHeaderType
export type MessageType = {
	message: string
	id: string
}
export type DialogItemType = {
	id: string
	name: string
	photo: string
}
export type InitialStateType = typeof initialState

const initialState = {
	messages: [
		{id: '1', message: 'HI from messages-reducer (connected redux by Dimich legacy code)!!!'},
		{id: '2', message: 'Hello 3'},
		{id: '3', message: 'Good Afternoon 3'},
	] as MessageType[],
	dialogs: [
		{id: '1', name: 'Dima3', photo: Dima_photo},
		{id: '2', name: 'Natasha3', photo: Natasha_photo},
		{id: '3', name: 'Ksenia3', photo: Ksenia_photo},
		{id: '4', name: 'Vera3', photo: Vera_photo},
	] as DialogItemType[],
	// newMessageText: ""
}


export const messagesReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case "ADD-MESSAGE": {
			const newMessage: MessageType = {
				id: v1(), message: action.newMessageAdd
			}

			return {...state, messages: [...state.messages, newMessage]}
		}
		default:
			return state
	}
}

export type AddMessageType = ReturnType<typeof addMessage>

//export const addMessageAC = (
export const addMessage = (
	newMessageAdd: string
) => {
	return {
		type: "ADD-MESSAGE",
		newMessageAdd
	} as const
}
