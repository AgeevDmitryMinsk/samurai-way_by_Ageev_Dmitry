import {ActionsTypes} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {api} from "../api/api";


//export type InitialAuthStatePageType = typeof initialState

export type InitialAuthStatePageType = {
	data: AuthDataType,
	isAuth: boolean,
	isFetchingAuth: boolean,
	profile: UsersProfileResponseType

}

export type AuthResponseType = {
	resultCode: number
	messages: Array<string>,
	data: AuthDataType
}
export type FollowResponseType = {
	resultCode: number
	messages: Array<string>
	data: {}
}
export type AuthDataType = {
	id: string
	login: string
	email: string
}

const initialState = {
	data: {} as AuthDataType,
	isAuth: false,
	isFetchingAuth: false,
	profile: {} as UsersProfileResponseType
}
export const authReducer = (state  = initialState, action: ActionsTypes): InitialAuthStatePageType => {
	switch (action.type) {
		case "SET_USER_DATA": {
			return {
				...state,
				data: action.data,
				isAuth: true
			}
		}
		case "TOGGLE-AUTH-IS-FETCHING":{
			return {
				...state,
				isFetchingAuth: action.isFetchingAuth
			}
		}
		case "SET-AUTH-USER-PROFILE": {
			return {
				...state, profile: action.profile
			}

		}


		default:
			return state

	}
}

export type setUserDataType = ReturnType<typeof setAuthUserData>
export type setIsFetchingAuthType = ReturnType<typeof setIsFetchingAuth>
export type setAuthUserProfileType = ReturnType<typeof setAuthUserProfile>

//ActionCreator setAuthUserData:
export const setAuthUserData = (data: AuthDataType) => {
	return {
		type: "SET_USER_DATA",
		data
	} as const
}
export const setIsFetchingAuth = (isFetchingAuth: boolean) => {
	return {
		type: "TOGGLE-AUTH-IS-FETCHING",
		isFetchingAuth
	} as const
}

export const setAuthUserProfile = (profile: UsersProfileResponseType) => {
	return {
		type: "SET-AUTH-USER-PROFILE",
		profile
	} as const
}

//Thunk creator

export const getAuthMeThunkCreator = ()=>{
	return (dispatch: Dispatch<ActionsTypes>) => {
		dispatch(setIsFetchingAuth(true))
		api.getAuthMe()
			.then((data) => {
				if (data.resultCode === 0) {
					// let {id, login, email} = response.data.data
					dispatch(setAuthUserData(data.data))
					dispatch(setIsFetchingAuth(false))
				} else {dispatch(setIsFetchingAuth(false))}
				// console.log(response.data.data.id)
				// axios
				// 	.get(`https://social-network.samuraijs.com/api/1.0/profile/` + data.data.id)
				api.getMyProfileInAuthMe(data)
					// .then((response: AxiosResponse<UsersProfileResponseType>) => {
					.then((data) => {
						//console.log(response.data)//{aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
						dispatch(setAuthUserProfile(data))
					})
			})

	}
}
