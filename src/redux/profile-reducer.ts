import {v1} from "uuid";
import {ActionsTypes} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostDataType = {
	id: string
	message: string
	likesCount: number
}
//export type InitialStateProfilePageType = typeof initialState

export type InitialStateProfilePageType = {
	profile: UsersProfileResponseType | null
	posts: PostDataType[]
	newPostText: string
	status: string//ProfileStatusType //| null
}

export type ProfileStatusResponseType = {
	resultCode: number
	messages: Array<string>
	data: {}
}

const initialState: InitialStateProfilePageType = {
	posts: [
		{
			id: '1',
			message: "It's my 4nd post from profileReducer initialState (connected with Redux by Dimich legacy code)",
			likesCount: 5
		},
		{id: '2', message: "Hi, how are you now?", likesCount: 7},
		{id: '3', message: "Where are you from?", likesCount: 9}
	] as PostDataType[],
	newPostText: "",
	profile: null,
	status: ""// null
}


export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateProfilePageType => {
	switch (action.type) {
		case "ADD-POST": {
			const newPost: PostDataType = {
				id: v1(), message: state.newPostText, likesCount: 0
			}
			// this._state.ProfilePage.posts.push(newPost)
			//state.posts.push(newPost)
			// this._state.ProfilePage.newPostText = ``
			//state.newPostText = ``
			//onChange()
			return {...state, posts: [...state.posts, newPost], newPostText: ''}
		}
		case "UPDATE-NEW-POST-TEXT": {
			console.log(`UPDATE-NEW-POST-TEXT`)
			state.newPostText = action.newText
			console.log(state)
			return {...state, newPostText: action.newText}
		}
		case "SET-USER-PROFILE": {
			return {...state, profile: action.profile}
		}

		case "SET-USER-STATUS": {
			return {...state, status: action.status}
		}

		default:
			return state
	}
}

// export type AddPostActionType = ReturnType<typeof addPostAC>
export type AddPostActionType = ReturnType<typeof addPost>

// type ChangeNewTextActionType = {
// 	type: "CHANGE-NEW-TEXT"
// 	newText: string
// }
// export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
export type ChangeNewTextActionType = ReturnType<typeof changeTextareaTitle>

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export type SetUserStatusActionType = ReturnType<typeof setUserStatus>

// export const addPostAC = (
export const addPost = () => {
	return {
		type: "ADD-POST",
		//newPostMessage: newPostMessage
		//newPostMessage
	} as const //  добавляем as const в случае типизации type FollowActionType = ReturnType<typeof followAC>
}


export const changeTextareaTitle = (newText: string) => {
// export const changeNewTextAC = (newText: string) => {
	return {
		type: "UPDATE-NEW-POST-TEXT",
		newText: newText
		//newText
	} as const
}

// ACTION CREATOR:
export const setUserProfile = (profile: UsersProfileResponseType) => {
	return {
		type: "SET-USER-PROFILE",
		profile
	} as const
}

export const setUserStatus = (status: string//ProfileStatusType
 ) => {
	//debugger
	return {
		type: "SET-USER-STATUS",
		status
	} as const
}

//Thunk creator

export const getProfileThunkCreator = (userId: string) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		profileAPI.getProfile(userId)
			// .then((response: AxiosResponse<UsersProfileResponseType>) => {
			.then((data) => {
				console.log(data)
				//this.props.setUserProfile(response.data)
				dispatch(setUserProfile(data))
			})
	}
}

export const getUserStatusThunkCreator = (userId: string) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		profileAPI.getProfileStatus(userId)
			.then((data)=> {
				console.log(data)
				dispatch(setUserStatus(data))
			})
	}
}

export const updateProfileStatusThunkCreator = (status: string) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		profileAPI.updateProfileStatus(status)
			.then((data)=>{
				console.log(data)
				if (data.resultCode === 0 ) {
					dispatch(setUserStatus(status))
				}
			})
	}
}
