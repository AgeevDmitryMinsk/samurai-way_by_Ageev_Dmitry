import {ActionsTypes} from "./messages-reducer";

// export type UsersDataType = {
// 	id: string
// 	photo: string
// 	followed: boolean
// 	fullName: string
// 	status: string
// 	location: LocationType
// }
// type LocationType = {
// 	city: string
// 	country: string
// }

export type UsersResponseType = {
	"items": UserType[],
	"totalCount": number,
	"error": null | string
}

export type UserType = {
	"name": string
	"id": number,
	uniqueUrlName?: null,
	"photos": {
		"small": null | string,
		"large": null | string
	},
	"status": null | string,
	"followed": boolean
}

export type InitialStateUsersPageType = typeof initialState

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 10,
	currentPage: 1,
	isFetching: false,
	isFollowingInProgress: false
}



export const usersReducer = (state: InitialStateUsersPageType = initialState, action: ActionsTypes): InitialStateUsersPageType => {
	switch (action.type) {
		case "FOLLOW": {
			return {
				...state, users: state.users.map(el => el.id === action.id
					? {...el, followed: true}
					: el
				)
			}
		}
		case "UNFOLLOW": {
			return {
				...state, users: state.users.map(el => el.id === action.userId
					? {...el, followed: false}
					: el
				)
			}
		}
		case "SET-USERS": {
			return {
				// ...state, users: [...state.users, ...action.users] - неправильно !!!
				...state, users: action.users
			}
		}
		case "SET-CURRENT-PAGE": {
			return {
				...state, currentPage: action.currentPage
			}
		}
		case "SET-USERS-TOTAL-COUNT": {
			return {
				...state, totalUsersCount: action.usersTotalCount
			}
		}
		case "TOGGLE-IS-FETCHING": {
			return {
				...state, isFetching: action.isFetching
			}
		}
		case "TOGGLE-IS-FOLLOWING-IN-PROGRESS": {
			return {
				...state, isFollowingInProgress: action.isFollowingInProgress
			}
		}


		default:
			return state
	}
}

// export type FollowActionType = ReturnType<typeof followAC>
export type FollowActionType = ReturnType<typeof follow>

export type UnFollowActionType = ReturnType<typeof unFollow>

export type SetUsersActionType = ReturnType<typeof setUsers>

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type setUsersTotalCountActionType = ReturnType<typeof setUsersTotalCount>

export type setIsFetchingActionType = ReturnType<typeof  setIsFetching>

export type setIsFollowingInProgressType = ReturnType<typeof setIsFollowingInProgress>

// export const followAC = (userId: number) => {
export const follow = (userId: number) => {
	return {
		type: "FOLLOW",
		id: userId,
	} as const //  добавляем as const в случае типизации type FollowActionType = ReturnType<typeof followAC>
}

// export const unFollowAC = (userId: number) => {
export const unFollow = (userId: number) => {

	return {
		type: "UNFOLLOW",
		userId: userId,
		//newText
	} as const
}

// export const setUsersAC = (users: Array<UserType>) => {
export const setUsers = (users: Array<UserType>) => {

	return {
		type: "SET-USERS",
		users: users
	} as const
}

// export const setCurrentPageAC = (currentPage: number) => {
export const setCurrentPage = (currentPage: number) => {
	return {
		type: "SET-CURRENT-PAGE",
		currentPage: currentPage
	} as const
}

// export const setUsersTotalCountAC = (usersTotalCount: number) => {
export const setUsersTotalCount = (usersTotalCount: number) => {
	return {
		type: "SET-USERS-TOTAL-COUNT",
		usersTotalCount: usersTotalCount
	} as const
}

// export const setIsFetchingAC = (isFetching: boolean) => {
export const setIsFetching = (isFetching: boolean) => {
	return {
		type: "TOGGLE-IS-FETCHING",
		isFetching: isFetching
	} as const
}

export const setIsFollowingInProgress = (isFollowingInProgress: boolean) => {
	return {
		type: "TOGGLE-IS-FOLLOWING-IN-PROGRESS",
		isFollowingInProgress
	} as const
}
