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
	"photos": {
		"small": null | string,
		"large": null | string
	},
	"status": null | string,
	"followed": boolean
}

export type InitialStateUsersPageType = typeof initialState

const initialState = {
	// users: [] as Array<UsersDataType>
	users: [] as Array<UserType>
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
				...state, users: [...state.users, ...action.users]
			}
		}

		default:
			return state
	}
}

export type FollowActionType = ReturnType<typeof followAC>

export type UnFollowActionType = ReturnType<typeof unFollowAC>

export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
	return {
		type: "FOLLOW",
		id: userId,
	} as const //  добавляем as const в случае типизации type FollowActionType = ReturnType<typeof followAC>
}

export const unFollowAC = (userId: number) => {

	return {
		type: "UNFOLLOW",
		userId: userId,
		//newText
	} as const
}

export const setUsersAC = (users: Array<UserType>) => {

	return {
		type: "SET-USERS",
		users: users
	} as const
}
