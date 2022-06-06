import {ActionsTypes} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";


//export type InitialAuthStatePageType = typeof initialState

export type InitialAuthStatePageType = {
	data: AuthDataType,
	isAuth: boolean,
	isFetchingAuth: boolean,
	profile: UsersProfileResponseType,
	myStatus: string
}

export type AuthResponseType = {
	resultCode: number
	messages: Array<string>,
	data: AuthDataType
}

export type LoginResponseType = {
	resultCode: number
	messages: Array<string>,
	data: {
		userId: number
	}
}

export type LogoutResponseType = {
	resultCode: number
	messages: Array<string>,
	data: {}
}


export type FollowResponseType = {
	resultCode: number
	messages: Array<string>
	data: {}
}
export type AuthDataType = {
	id: string | null
	login: string | null
	email: string | null
}

const initialState = {
	data: {} as AuthDataType,
	isAuth: false,
	isFetchingAuth: false,
	profile: {} as UsersProfileResponseType,
	myStatus: '---'
}
export const authReducer = (state = initialState, action: ActionsTypes): InitialAuthStatePageType => {
	switch (action.type) {
		case "SET_USER_DATA": {
			//debugger
			return {
				...state,
				data: action.payload.data,
				//isAuth: true //убрал чтобы при нажатии на Logout был выход из аккаунта пользователя и сделал:
				isAuth: action.payload.isAuth,
			}
		}
		case "TOGGLE-AUTH-IS-FETCHING": {
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
		case "SET-MY-STATUS-FOR-HEADER": {
			return {
				...state, myStatus: action.myStatus
			}
		}


		default:
			return state

	}
}

export type setUserDataType = ReturnType<typeof setAuthUserData>
export type setIsFetchingAuthType = ReturnType<typeof setIsFetchingAuth>
export type setAuthUserProfileType = ReturnType<typeof setAuthUserProfile>
export type setMyStatusForHeaderType = ReturnType<typeof setMyStatusForHeader>

//ActionCreator setAuthUserData:
export const setAuthUserData = (data: AuthDataType, isAuth: boolean) => {
	return {
		type: "SET_USER_DATA",
		payload: {data, isAuth}
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

export const setMyStatusForHeader = (myStatus: string) => {
	return {
		type: "SET-MY-STATUS-FOR-HEADER",
		myStatus
	} as const
}

//Thunk creator

export const getAuthMeThunkCreator = () => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		dispatch(setIsFetchingAuth(true))
		authAPI.getAuthMe()
			.then((data) => {
				//console.log(data)//{data: {id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}, messages: Array(0), fieldsErrors: Array(0), resultCode: 0}
				if (data.resultCode === 0) { // если "resultCode":1, то  message: "You are not authorized"
					// если  resultCode === 0, то пользователь залогинен, т.е. у него есть в куках: id, login, email
					//console.log(data.resultCode) //0
					let {id, login, email} = data.data
					//console.log(id, login, email) //22100 'AgeevDmitryMinsk' 'ageev.dmitry@outlook.com'
					//dispatch(setAuthUserData(data.data))
					dispatch(setAuthUserData({id, login, email}, true))
					dispatch(setIsFetchingAuth(false))
					authAPI.getMyProfileInAuthMe(data)
						// .then((response: AxiosResponse<UsersProfileResponseType>) => {
						.then((data) => {
							//console.log(data)//{aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
							dispatch(setAuthUserProfile(data))
						})
					authAPI.getMyStatus(data)
						.then((data) => {
							//console.log(120, data) // 'Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)))!!!'
							dispatch(setMyStatusForHeader(data))
						})

				} else {
					dispatch(setIsFetchingAuth(false))
				}
				// console.log(response.data.data.id)
				// axios
				// 	.get(`https://social-network.samuraijs.com/api/1.0/profile/` + data.data.id)

			})

	}
}

export const loginThunkCreator = (email: string, password: string, rememberMe: null | boolean) => {


	return (dispatch: (arg0: (dispatch: Dispatch<ActionsTypes>) => void) => void) => { // сложный тип т.к. здесь дисптчим не просто action, a ThunkCreator
		authAPI.login(email, password, rememberMe)
			.then((response) => {
				if (response.data.resultCode === 0) {
					dispatch(getAuthMeThunkCreator())// ?
				} else {
					//let action = stopSubmit("login", {_error: `Email or password is wrong`})
					 //dispatch(dispatch => stopSubmit("login", {_error: `Email or password is wrong`}))
					//@ts-ignore
					dispatch(stopSubmit("login", {_error: `Email or password is wrong from loginThunkCreator`}))
				}
			})
	}

}

export const logoutThunkCreator = () => (dispatch:Dispatch<ActionsTypes> ) => {
	authAPI.logout()
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData({id: null, login: null, email: null}, false))
			}
		})

}
