import axios, {AxiosResponse} from "axios";
import {UsersResponseType} from "../redux/users-reducer";
import {AuthResponseType, FollowResponseType} from "../redux/auth-reducer";
import {UsersProfileResponseType} from "../components/Profile/ProfileContainer";
import {ProfileStatusResponseType} from "../redux/profile-reducer";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {"API-KEY": "ea4bd029-6219-425e-8f84-95f6a13dad97"}

})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance
			// .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
			.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data
			})
	},
	getUnfollow(id: number) {
		return instance
			.delete<FollowResponseType>(`follow/${id}`)
			.then(response => response.data)
	},

	getFollow(id: number) {
		return instance
			.post<FollowResponseType>(`follow/${id}`)
			.then(response => response.data)
	}
}

export const profileAPI = {
	getProfile(userId: string) {
		return instance
			.get<UsersProfileResponseType>(`profile/` + userId)
			.then(response => response.data)
	},
	// getProfileStatus(userId: string) {
	// 	return instance
	// 		.get<string>(`/profile/status/${userId}`)
	// 		.then(response => {
	// 			console.log(`getProfileStatus`, response.data)
	// 			return response.data})
	// },
	getProfileStatus(userId: number) {
		return instance.get<any, AxiosResponse<string>>(`profile/status/${userId}`)
			.then(response => response.data)
	},

	updateProfileStatus(status: string) {
		return instance
			.put<ProfileStatusResponseType>('/profile/status', {status: status})
			.then(response => {
				console.log(`updateProfileStatus`, response.data)
				return response.data})

	}
}

export const authAPI = {
	getAuthMe() {

		return instance
			.get<AuthResponseType>(`auth/me`)
			.then(response => {
				//debugger
				return response.data
			})
	},
	getMyProfileInAuthMe(data: AuthResponseType) {

		return instance
			.get(`profile/` + data.data.id)
			.then(response => {
				//debugger
					console.log(response)
					return response.data
				}
			)
	},
	getMyStatus (data: AuthResponseType) {
		return instance
			.get(`profile/status/${+data.data.id}`)
			.then(response => {
					//debugger
					console.log(response)
					return response.data
				})
			// .then(instance.get(`profile/status/${data.data.userId}`)
			// 	.then(response => response.data))
	}
}

//const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

// export const getUsers = (currentPage: number, pageSize: number) => {
// 	return axios
// 		// .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
// 		.get<UsersResponseType>(`${baseUrl}/users?page=${currentPage}&count=${pageSize}`,
// 			{withCredentials: true}
// 		).then(response=> {
// 			return response.data})
// }

//перенес методы из объекта api в объект usersAPI, profileAPI, usersAPI
// export const api = {
// getUsers(currentPage: number, pageSize: number) {
// 	return instance
// 		// .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
// 		.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
// 		.then(response=> {
// 			return response.data})
// }, перенес в объект usersAPI.getUsers
// getAuthMe() {
// 	//debugger
// 	return instance
// 		.get<AuthResponseType>(`auth/me`)
// 		.then(response=> {
// 			return response.data})
// },
// getMyProfileInAuthMe(data:AuthResponseType) {
// 	return instance
// 		.get(`profile/` + data.data.id)
// 		.then(response => response.data)
// },
// getProfile(userId:string) {
// 	return instance
// 		.get<UsersProfileResponseType>(`profile/` + userId)
// 		.then(response => response.data)
// },
// getUnfollow(id:number) {
// 	return  instance
// 		.delete<FollowResponseType>(`follow/${id}`)
// 		.then(response => response.data)
// },

// getFollow (id:number) {
// 	return instance
// 		.post<FollowResponseType>(`follow/${id}`)
// 		.then(response => response.data)
// }
// }


// export const getUsers = (currentPage: number, pageSize: number) => {
// 	return instance
// 		// .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
// 		.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`,
// 			{withCredentials: true}
// 		).then(response=> {
// 			return response.data})
// }

// export const getAuthMe = () => {
// 	return instance
// 		.get<AuthResponseType>(`auth/me`,
// 			{withCredentials: true}
// 		).then(response=> {
// 		return response.data})
// }

// export const getMyProfileInAuthMe = (data:AuthResponseType) => {
// 	//debugger
// 	return instance
// 		.get(`profile/` + data.data.id)
// 		.then(response => response.data)
// }

// export const getProfile = (userId:string) => {
// 	return instance
// 		.get<UsersProfileResponseType>(`profile/` + userId)
// 		.then(response => response.data)
// }

// export const getUnfollow = (id:number) => {
// 	return  axios
// 		.delete<FollowResponseType>(`${baseUrl}/follow/${id}`,
// 			{
// 				withCredentials: true,
// 				headers: {
// 					"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
// 				}
// 			})
// 		.then(response => response.data)
// }

// export const getUnfollow = (id:number) => {
// 	return  instance
// 		.delete<FollowResponseType>(`follow/${id}`)
// 		.then(response => response.data)
// }
//
// export const getFollow = (id:number) => {
//   return instance
// 	  .post<FollowResponseType>(`follow/${id}`)
// 	  .then(response => response.data)
// }
