import {ActionsTypes, PostDataType, ProfilePageType} from "./store";
import {v1} from "uuid";


const initialState: ProfilePageType = {
		posts: [
			{id: '1', message: "It's my 4nd post from profileReducer initialState (connected with Redux)", likesCount: 5},
			{id: '2', message: "Hi, how are you now?", likesCount: 7},
			{id: '3', message: "Where are you from?", likesCount: 9}
		],
		newPostText: ""
	}


export const profileReducer = (state = initialState, action: ActionsTypes) => {

	switch (action.type){
		case "ADD-POST": {
			const newPost: PostDataType = {
				id: v1(), message: action.newPostMessage, likesCount: 0
			}
			// this._state.ProfilePage.posts.push(newPost)
			state.posts.push(newPost)
			// this._state.ProfilePage.newPostText = ``
			state.newPostText = ``
			//onChange()
			return state
		}
		case "UPDATE-NEW-POST-TEXT": {
			state.newPostText = action.newText
			return state
		}
		default:
			return state
	}
}

export type AddPostActionType = ReturnType<typeof addPostAC>

// type ChangeNewTextActionType = {
// 	type: "CHANGE-NEW-TEXT"
// 	newText: string
// }
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export const addPostAC = (newPostMessage: string) => {
	return {
		type: "ADD-POST",
		newPostMessage: newPostMessage
		//newPostMessage
	} as const //  добавляем as const в случае типизации type AddPostActionType = ReturnType<typeof addPostAC>
}

export const changeNewTextAC = (newText: string) => {
	return {
		type: "UPDATE-NEW-POST-TEXT",
		newText: newText
		//newText
	} as const
}
