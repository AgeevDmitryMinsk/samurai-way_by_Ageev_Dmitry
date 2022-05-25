import {ActionsTypes} from "./messages-reducer";
import {api} from "../api/api";
import {Dispatch} from "redux";


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

type isFollowingInProgressType = Array<number>

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 10,
	currentPage: 1,
	isFetching: false,
	// isFollowingInProgress: false
	isFollowingInProgress: [] as isFollowingInProgressType, // внутрь массива [] будем добавлять id того юзера, которого будем follow/unfollow
	isFetchingButtonFollowUnfollow: false // хочу отслеживать в консоли состояние кнопки follow/unfollow true или false по ответу сервера
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
			debugger
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
				...state, isFollowingInProgress: action.isFetchingButtonFollowUnfollow
					? [...state.isFollowingInProgress, action.userId] // добавляем в массив id юзера по которому нажали кнопку follow/unfollow
					: state.isFollowingInProgress.filter(id => id !== action.userId), // удаляем из массива id юзера по которому нажали кнопку follow/unfollow
				isFetchingButtonFollowUnfollow: action.isFetchingButtonFollowUnfollow // отслеживаю состояние изменения disabled кнопки follow/unfollow
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

export type setIsFetchingActionType = ReturnType<typeof setIsFetching>

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

export const setIsFollowingInProgress = (isFetchingButtonFollowUnfollow: boolean, userId: number) => {
	return {
		type: "TOGGLE-IS-FOLLOWING-IN-PROGRESS",
		isFetchingButtonFollowUnfollow,
		userId
	} as const
}

//Thunk creator
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		// this.props.setIsFetching(true)
		dispatch(setIsFetching(true))


		api.getUsers(currentPage, pageSize)
			//.then((response: AxiosResponse<UsersResponseType>) => {
			.then((data) => {
				// this.props.setIsFetching(false)
				dispatch(setIsFetching(false))
				dispatch(setUsers(data.items))
				dispatch(setCurrentPage(currentPage))
				dispatch(setUsersTotalCount(data.totalCount))

			})
	}
}
export const followThunkCreator = (userId:number) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		// axios
		// 	.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
		// 		{},
		// 		{
		// 			withCredentials: true,
		// 			headers: {
		// 				"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
		// 			}
		// 		})
		console.log('followThunkCreator')
		dispatch(setIsFollowingInProgress(true, userId))
		api.getFollow(userId)
			// .then((response: AxiosResponse<FollowResponseType>) => {
			.then((data) => {
				// if (response.data.resultCode === 0) {
				if (data.resultCode === 0) {
					// props.unFollow(el.id)
					dispatch(follow(userId))
				}
				dispatch(setIsFollowingInProgress(false, userId))
			})
	}
}
export const unFollowThunkCreator = (userId:number) => {
	return (dispatch: Dispatch<ActionsTypes>) => {
		console.log('unFollowThunkCreator')
		dispatch(setIsFollowingInProgress(true, userId))
		api.getUnfollow(userId)
			// .then((response: AxiosResponse<FollowResponseType>) => {
			.then((data) => {
				if (data.resultCode === 0) {
					// props.follow(el.id)
					dispatch(unFollow(userId))
				}
				dispatch(setIsFollowingInProgress(false, userId))
			})
	}
}
