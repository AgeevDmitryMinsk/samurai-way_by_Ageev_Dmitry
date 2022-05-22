import {ActionsTypes} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";


//export type InitialAuthStatePageType = typeof initialState

export type InitialAuthStatePageType = {
	data: AuthDataType[]
	isAuth: boolean,
	isFetchingAuth: boolean,
	profile: UsersProfileResponseType[]

}

export type AuthResponseType = {
	resultCode: number
	messages: Array<string>,
	data: AuthDataType[]
}
// { [key: string]: any[] } = {};
export type AuthDataType = {
	id: string
	login: string
	email: string
}

const initialState = {
	data: [] as AuthDataType[],
	isAuth: false,
	isFetchingAuth: false,
	profile: [] as UsersProfileResponseType[]
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
export type setIsFetchingAuth = ReturnType<typeof setIsFetchingAuth>
export type setAuthUserProfileType = ReturnType<typeof setAuthUserProfile>

//ActionCreator setAuthUserData:
export const setAuthUserData = (data: Array<AuthDataType>) => {
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

export const setAuthUserProfile = (profile: Array<UsersProfileResponseType>) => {
	return {
		type: "SET-AUTH-USER-PROFILE",
		profile
	} as const
}
