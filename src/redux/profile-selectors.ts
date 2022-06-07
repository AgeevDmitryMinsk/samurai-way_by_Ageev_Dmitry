import {AppRootStateType} from "./redux-store";

export const getProfile = (state: AppRootStateType) => {
	return state.ProfilePage.profile
}


export const getStatus = (state: AppRootStateType) => {
	return state.ProfilePage.status
}

export const getAuthData = (state: AppRootStateType) => {
	return state.auth.data
}



// export const getUsers = (state: AppRootStateType ) => {
// 	return state.usersPage.users
// }
//
// export const getPageSize = (state: AppRootStateType ) => {
// 	return state.usersPage.pageSize
// }
//
// export const getTotalUsersCount = (state: AppRootStateType ) => {
// 	return state.usersPage.totalUsersCount
// }
//
// export const getCurrentPage = (state: AppRootStateType ) => {
// 	return state.usersPage.currentPage
// }
//
// export const getIsFetching = (state: AppRootStateType ) => {
// 	return state.usersPage.isFetching
// }
//
// export const getIsFollowingInProgress = (state: AppRootStateType ) => {
// 	return state.usersPage.isFollowingInProgress
// }
//
//
// export const getIsFetchingButtonFollowUnfollow = (state: AppRootStateType ) => {
// 	return state.usersPage.isFetchingButtonFollowUnfollow
// }
