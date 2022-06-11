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
	//newPostText: string
	status: string//ProfileStatusType //| null
}

export type ProfileStatusResponseType = {
	resultCode: number
	messages: Array<string>
	data: {}
	fieldsErrors: Array<string>
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
	//newPostText: "",
	profile: null,
	status: ''// null
}


export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateProfilePageType => {
	switch (action.type) {
		case "ADD-POST": {
			const newPost: PostDataType = {
				// id: v1(), message: state.newPostText, likesCount: 0
				id: v1(), message: action.newPostMessage, likesCount: 0
			}
			return {...state, posts: [...state.posts, newPost] }
		}

		case "REMOVE-POST":{
			return {...state, posts: state.posts.filter(el=> el.id !== action.postID)}
		}

		case "SET-USER-PROFILE": {
			return {...state, profile: action.profile}
		}

		case "SET-USER-STATUS": {
			//debugger
			return {...state, status: action.status}
		}

		default:
			return state
	}
}


export type AddPostActionType = ReturnType<typeof addPost>

export type RemovePostActionType = ReturnType<typeof removePost>

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export type SetUserStatusActionType = ReturnType<typeof setUserStatus>

// export const addPostAC = (
export const addPost = (newPostMessage:string) => {
	return {
		type: "ADD-POST",
		//newPostMessage: newPostMessage
		newPostMessage
	} as const //  добавляем as const в случае типизации type FollowActionType = ReturnType<typeof followAC>
}

export const removePost = (postID: string) => {
	return{
		type: "REMOVE-POST",
		postID
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

//Thunk creators:

export const getProfileThunkCreator = (userId: number) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		profileAPI.getProfile(userId)
			// .then((response: AxiosResponse<UsersProfileResponseType>) => {
			.then((data) => {
				//console.log(data)//{aboutMe: 'я круто чувак 1001%', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'не ищу, а дурачусь', fullName: 'samurai dimych', …}
				//this.props.setUserProfile(response.data)
				dispatch(setUserProfile(data))
			})
	}
}

export const getUserStatusThunkCreator = (userId: number) => {

	return (dispatch: Dispatch<ActionsTypes>) => {
		profileAPI.getProfileStatus(userId)
			.then((data)=> {
				//debugger
				//console.log(data) //статус того кого выбрал в Users: Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)
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
					console.log(data)
					console.log(status) //Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)))!!!$
					dispatch(setUserStatus(status))
				}
			})
	}
}
