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
	pageSize: 100,
	totalUsersCount: 10,
	currentPage: 1,
	isFetching: false
	// users: [
	// 	{
	// 		name: "sobraniebluee",
	// 		id: 23966,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Aliher4ik",
	// 		id: 23965,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Elenaya",
	// 		id: 23964,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "kinghong556677",
	// 		id: 23963,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "evgen_prog",
	// 		id: 23962,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Ketsamesama",
	// 		id: 23961,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "tinalychko",
	// 		id: 23960,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Lida",
	// 		id: 23959,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Vanya_iz_3a",
	// 		id: 23958,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// 	{
	// 		name: "Ponchik",
	// 		id: 23957,
	// 		uniqueUrlName: null,
	// 		photos: {
	// 			small: null,
	// 			large: null,
	// 		},
	// 		status: null,
	// 		followed: false,
	// 	},
	// ] as Array<UserType>
}
//
// [
// {
// 	id: '1',
// 	photo: Dima_photo,
// 	followed: false,
// 	fullName: "Dmitry A",
// 	status: `I'm a boss`,
// 	location: {city: "Minsk", country: "Belarus"}
// },
// 	{
// 		id: '2',
// 		photo: Natasha_photo,
// 		followed: true,
// 		fullName: "Natalia A",
// 		status: `I'm a house keeper`,
// 		location: {city: "Minsk", country: "Belarus"}
// 	},
// 	{
// 		id: '3',
// 		photo: Ksenia_photo,
// 		followed: true,
// 		fullName: "Ksenia A",
// 		status: `I'm a student`,
// 		location: {city: "Minsk", country: "Belarus"}
// 	},
// 	{
// 		id: '4',
// 		photo: Vera_photo,
// 		followed: true,
// 		fullName: "Vera A",
// 		status: `I'm a student`,
// 		location: {city: "Minsk", country: "Belarus"}
// 	}
// ]


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
