import {ActionsTypes} from "./messages-reducer";
import {Dispatch} from "redux";
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
	// return async (dispatch: Dispatch<ActionsTypes | any>) => {
	return async (dispatch: Dispatch<ActionsTypes | any>) => {
		//debugger
		const res = await dispatch(getAuthMeThunkCreator())

		console.log(`hello form initializeAppThunkCreator  ===>`, res )
		// без await будет: hello form initializeAppThunkCreator  ===> Promise {<pending>}
		// c await будет:   hello form initializeAppThunkCreator  ===> IT-Incubator


		dispatch(setSuccessfulInitialization())


	}
}

