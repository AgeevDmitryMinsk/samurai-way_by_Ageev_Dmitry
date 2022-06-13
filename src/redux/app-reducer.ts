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
//then
// export const initializeAppThunkCreator = () => {
// 	return  (dispatch: Dispatch<ActionsTypes | any>) => {
//
// 		let resultPromise =  dispatch(getAuthMeThunkCreator())
// 		console.log(`hello form initializeAppThunkCreator  ===>`, resultPromise )
// 		Promise.all([resultPromise]).then(()=> dispatch(setSuccessfulInitialization()))
// 	}
// }

////async/await
export const initializeAppThunkCreator = () => {
	return async (dispatch: Dispatch<ActionsTypes | any>) => {
		try {

				console.log(85)
				await dispatch(getAuthMeThunkCreator())
				console.log(87)
				dispatch(setSuccessfulInitialization())
				console.log(89)

			//debugger
		} catch (e) {
			alert(e)
		}
	}
}
