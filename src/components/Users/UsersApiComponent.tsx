//import React from 'react';
//import {UsersPropsType} from "./UsersContainer";
//import styles from './Users.module.css'
//import Dima_photo from "../../photos/Dima.png";
// import Natasha_photo from "../../photos/Natasha.png";
// import Ksenia_photo from "../../photos/Ksenia.png";
// import Vera_photo from "../../photos/Vera.png";
//import axios, {AxiosResponse} from "axios";
//import {UsersResponseType} from "../../redux/users-reducer";
//import {Users} from "./Users";
// import {setUsersAC, UsersResponseType} from "../../redux/users-reducer";
// import {ThunkAction, ThunkDispatch} from "redux-thunk";
// // API KEY: 57f858ff-ce33-4672-b278-3f2f1b802b55
// //Ваш ID: 22100
// type ThunkType = ThunkAction<any, any, any, any>
// type ThunkDispatch1 = ThunkDispatch<any, any, any>
// const instance = axios.create({
// 	baseURL: "https://social-network.samuraijs.com/api/1.0",
// 	withCredentials: true,
// 	headers: {"API-KEY" : "57f858ff-ce33-4672-b278-3f2f1b802b55"}
// })
//
// export const api = {
// 	getUsers() {
// 		return instance.get<UsersResponseType>("/users")
// 	}
// }
// export const getUsersSS = ():ThunkType  => (dispatch: ThunkDispatch1 ) => {
// export const getUsersSS = () => {
// 	debugger
// 	console.log(29)
// 	api.getUsers().then(res=> {
// 		console.log(res.data.items)
// 		//dispatch(setUsersAC(res.data.items))
// 	})
// }
//, {	baseURL: "https://social-network.samuraijs.com/api/1.0",
// withCredentials: true,
// headers: {"API-KEY" : "57f858ff-ce33-4672-b278-3f2f1b802b55"}}

//перенес   class UsersApiComponent в UsersContainer

// export class UsersApiComponent extends React.Component<UsersPropsType> {
//
// 	// constructor(props: UsersPropsType) {
// 	// 	 super(props);
// 	// }
//
// 	componentDidMount() {
// 		axios
// 			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
// 			.then((response: AxiosResponse<UsersResponseType>) => {
// 				console.log(response.data)
// 				console.log(`totalCount/count = `, response.data.totalCount / 5, this.props.totalUsersCount / this.props.pageSize)
// 				this.props.setUsers(response.data.items)
// 				this.props.setUsersTotalCount(response.data.totalCount)
// 			})
// 	}
//
// 	onChangeCurrentPage = (currPage: number) => {
// 		this.props.setCurrentPage(currPage)
// 		axios
// 			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`)
// 			.then((response: AxiosResponse<UsersResponseType>) => {
// 				console.log(response.data)
// 				console.log(`totalCount/count = `, response.data.totalCount / 5, this.props.totalUsersCount / this.props.pageSize)
// 				this.props.setUsers(response.data.items)
// 			})
// 	}
//
// 	render() {
// 		return <Users totalUsersCount={this.props.totalUsersCount}
// 			   pageSize={this.props.pageSize}
// 			   currentPage={this.props.currentPage}
// 			   onChangeCurrentPage={this.onChangeCurrentPage}
// 			   users={this.props.users}
// 			   unFollow={this.props.unFollow}
// 			   follow={this.props.follow}/>
// 	}
// }

export default 1

