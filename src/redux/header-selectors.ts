import {AppRootStateType} from "./redux-store";

export const getIsAuth = (state: AppRootStateType) => {
	return state.auth.isAuth
}

export const getIsFetchingAuth = (state: AppRootStateType) => {
	return state.auth.isFetchingAuth
}

export const getAuthProfile = (state: AppRootStateType) => {
	return state.auth.profile
}

export const getMyStatus = (state: AppRootStateType) => {
	return state.auth.myStatus
}


