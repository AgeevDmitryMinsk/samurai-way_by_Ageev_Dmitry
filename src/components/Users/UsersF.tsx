import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import Dima_photo from "../../photos/Dima.png";
// import Natasha_photo from "../../photos/Natasha.png";
// import Ksenia_photo from "../../photos/Ksenia.png";
// import Vera_photo from "../../photos/Vera.png";
import axios, {AxiosResponse} from "axios";
import {UsersResponseType} from "../../redux/users-reducer";
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
//axios.get("https://social-network.samuraijs.com/api/1.0/users?page=22&count=2",
// {baseURL: "https://social-network.samuraijs.com/api/1.0",
// withCredentials: true,
// headers: {"API-KEY" : "57f858ff-ce33-4672-b278-3f2f1b802b55"}}


export function UsersF(props: UsersPropsType) {
	let {setUsers} = props

	useEffect(() => {
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users?page=22&count=2")
			.then((response: AxiosResponse<UsersResponseType>) => {
			console.log(response.data.items)
			setUsers(response.data.items)
		})
	},[setUsers])

	return (
		<>
			<div>
				<span>1</span>
				<span className={styles.selectedPage}>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</div>
			<div>
				{/*<button onClick={getUsers}>GET USERS</button>*/}
				{props.users.map(el => (
					<div key={el.id} className={styles.container}>
						<div className={styles.item}>
							<div>
								{/*<img src={el.photo} alt="usersAvatar"/>*/}
								<img src={el.photos.large || Dima_photo} alt="usersAvatar"/>
							</div>
							{el.followed ?
								<div>
									<button onClick={() => props.unFollow(el.id)}>Follow</button>
								</div>
								:
								<div>
									<button onClick={() => props.follow(el.id)}>Unfollow</button>
								</div>}
						</div>

						<span className={styles.description}>
						<div className={styles.item}>
							<div style={{
								fontWeight: "bold",
								color: "#134711a1"
							}}>
								{/*{el.fullName}</div>*/}
								{el.name}</div>
							<div>{el.status}</div>
						</div>

							{/*<div className={styles.item}>*/}
							{/*	<div>{el.location.country}</div>*/}
							{/*	<div>{el.location.city}</div>*/}
							{/*</div>*/}
					</span>
					</div>))}
			</div>
		</>
	);

}


