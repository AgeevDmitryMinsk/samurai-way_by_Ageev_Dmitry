import {ActionsTypes, addMessage} from "./messages-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthMeThunkCreator} from "./auth-reducer";


export type InitialAppStatePageType = {
	initialized: boolean
	// data: AuthDataType,
	// isAuth: boolean,
	// isFetchingAuth: boolean,
	// profile: UsersProfileResponseType,
	// myStatus: string
}


const initialState = {
	initialized: false
	// data: {} as AuthDataType,
	// isAuth: false,
	// isFetchingAuth: false,
	// profile: {} as UsersProfileResponseType,
	// myStatus: '---'
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialAppStatePageType => {
	switch (action.type) {
		case "SUCCESSFUL_INITIALIZATION": {
			//debugger
			return {
				...state,
				initialized: true,
				//isAuth: true //убрал чтобы при нажатии на Logout был выход из аккаунта пользователя и сделал:
			}
		}
		// case "TOGGLE-AUTH-IS-FETCHING": {
		// 	return {
		// 		...state,
		// 		isFetchingAuth: action.isFetchingAuth
		// 	}
		// }
		// case "SET-AUTH-USER-PROFILE": {
		// 	return {
		// 		...state, profile: action.profile
		// 	}
		// }
		// case "SET-MY-STATUS-FOR-HEADER": {
		// 	return {
		// 		...state, myStatus: action.myStatus
		// 	}
		// }


		default:
			return state

	}
}


export type setSuccessfulInitializationType = ReturnType<typeof setSuccessfulInitialization>

//ActionCreator setSuccessfulInitialization:
export const setSuccessfulInitialization = () => {
	return {
		type: "SUCCESSFUL_INITIALIZATION"
	} as const
}



//Thunk creator

export const initializeAppThunkCreator = () => {
	return async (dispatch: Dispatch<ActionsTypes | any>) => {
		debugger
		const res = await dispatch(getAuthMeThunkCreator())
		console.log('initialAppThunk - ', res)
		//console.log(`hello form initializeAppThunkCreator`, dispatchResult )


		dispatch(setSuccessfulInitialization())


	}
}

