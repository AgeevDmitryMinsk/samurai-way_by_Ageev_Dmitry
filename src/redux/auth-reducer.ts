import {ActionsTypes} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


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
	return async (dispatch: Dispatch<ActionsTypes>) => {
		dispatch(setIsFetchingAuth(true))
		try {
			const res = await authAPI.getAuthMe()
			console.log(`res in auth-reducer ~~>`, res)//{data: {id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}, messages: Array(0), fieldsErrors: Array(0), resultCode: 0}
			if (res.resultCode === 0) { // если "resultCode":1, то  message: "You are not authorized"
				// если  resultCode === 0, то пользователь залогинен, т.е. у него есть в куках: id, login, email
				//console.log(data.resultCode) //0
				let {id, login, email} = res.data
				//console.log(id, login, email) //22100 'AgeevDmitryMinsk' 'ageev.dmitry@outlook.com'
				//dispatch(setAuthUserData(data.data))
				dispatch(setAuthUserData({id, login, email}, true))
				dispatch(setIsFetchingAuth(false))
				authAPI.getMyProfileInAuthMe(res)
					// .then((response: AxiosResponse<UsersProfileResponseType>) => {
					.then((data) => {
						//console.log(data)//{aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
						dispatch(setAuthUserProfile(data))
					})
				authAPI.getMyStatus(res)
					.then((data) => {
						//console.log(120, data) // 'Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)))!!!'
						dispatch(setMyStatusForHeader(data))
					})
			} else {
				dispatch(setIsFetchingAuth(false))
			}
			//return 'IT-Incubator'

		} catch (e) {

		}


	}
}

export const loginThunkCreator = (email: string, password: string, rememberMe: null | boolean) => {


	return async (dispatch: Dispatch<ActionsTypes | any>) => { // сложный тип т.к. здесь дисптчим не просто action, a ThunkCreator
		try {
			const res = await authAPI.login(email, password, rememberMe)
				// .then((response) => {
					console.log(173, 173, 173, res)
					// console.log(174,174, 174, response)
					if (res.data.resultCode === 0)
						//	|| 	(response.data.resultCode === 1 && response.data.messages[0] ==="The RememberMe field is required."))
					{
						dispatch(getAuthMeThunkCreator())// ?
					} else {
						//let action = stopSubmit("login", {_error: `Email or password is wrong`})
						//dispatch(dispatch => stopSubmit("login", {_error: `Email or password is wrong`}))

						// let errorMessage = (response.data.messages.length > 0) ? response.data.messages[0] : `Email or password is wrong from loginThunkCreator`
						let errorMessage = (res.data.messages.length > 0) ? res.data.messages[0] : `Email or password is wrong from loginThunkCreator`

						dispatch(stopSubmit("login", {_error: errorMessage}))
					}
				// }

		} catch (e) {
			alert(e)
		}

	}

}

export const logoutThunkCreator = () => async (dispatch: Dispatch<ActionsTypes>) => {
	const res = await authAPI.logout()
		// .then(response => {
	try{
		if (res.data.resultCode === 0) {
			dispatch(setAuthUserData({id: null, login: null, email: null}, false))
		}
	}catch (e) {
		alert(e)
	}
}
