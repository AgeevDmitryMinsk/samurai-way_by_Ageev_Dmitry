import React from 'react';
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


export class Users extends React.Component<UsersPropsType> {

	// constructor(props: UsersPropsType) {
	// 	 super(props);
	// }

	componentDidMount() { axios.get("https://social-network.samuraijs.com/api/1.0/users"
		//, {	baseURL: "https://social-network.samuraijs.com/api/1.0",
		// withCredentials: true,
		// headers: {"API-KEY" : "57f858ff-ce33-4672-b278-3f2f1b802b55"}}
	).then((response: AxiosResponse<UsersResponseType>) => {
		//debugger
		console.log(response.data)
		this.props.setUsers(response.data.items)
	})
		// props.setUsers([
		// 	{
		// 		id: '1',
		// 		photo: Dima_photo,
		// 		followed: false,
		// 		fullName: "Dmitry A",
		// 		status: `I'm a boss`,
		// 		location: {city: "Minsk", country: "Belarus"}
		// 	},
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
		// ] )
	}

	render() {

		// для избежания сайд-эффекта при первой загрузке компоненты делаем костыль-заглушку, т.е.
		// оборачиваем код в функцию const getUsers(), затем в рендрере делаем копку GET USERS для вызова костыля
		// const getUsers = () => {
		// 	// if (this.props.users.length === 0) {
		// 	// 	return axios.get("https://social-network.samuraijs.com/api/1.0/users"
		// 	// 		//, {	baseURL: "https://social-network.samuraijs.com/api/1.0",
		// 	// 		// withCredentials: true,
		// 	// 		// headers: {"API-KEY" : "57f858ff-ce33-4672-b278-3f2f1b802b55"}}
		// 	// 	).then((response: AxiosResponse<UsersResponseType>) => {
		// 	// 		//debugger
		// 	// 		console.log(response.data)
		// 	// 		this.props.setUsers(response.data.items)
		// 	// 	})
		// 	// 	// props.setUsers([
		// 	// 	// 	{
		// 	// 	// 		id: '1',
		// 	// 	// 		photo: Dima_photo,
		// 	// 	// 		followed: false,
		// 	// 	// 		fullName: "Dmitry A",
		// 	// 	// 		status: `I'm a boss`,
		// 	// 	// 		location: {city: "Minsk", country: "Belarus"}
		// 	// 	// 	},
		// 	// 	// 	{
		// 	// 	// 		id: '2',
		// 	// 	// 		photo: Natasha_photo,
		// 	// 	// 		followed: true,
		// 	// 	// 		fullName: "Natalia A",
		// 	// 	// 		status: `I'm a house keeper`,
		// 	// 	// 		location: {city: "Minsk", country: "Belarus"}
		// 	// 	// 	},
		// 	// 	// 	{
		// 	// 	// 		id: '3',
		// 	// 	// 		photo: Ksenia_photo,
		// 	// 	// 		followed: true,
		// 	// 	// 		fullName: "Ksenia A",
		// 	// 	// 		status: `I'm a student`,
		// 	// 	// 		location: {city: "Minsk", country: "Belarus"}
		// 	// 	// 	},
		// 	// 	// 	{
		// 	// 	// 		id: '4',
		// 	// 	// 		photo: Vera_photo,
		// 	// 	// 		followed: true,
		// 	// 	// 		fullName: "Vera A",
		// 	// 	// 		status: `I'm a student`,
		// 	// 	// 		location: {city: "Minsk", country: "Belarus"}
		// 	// 	// 	}
		// 	// 	// ] )
		// 	// }
		// }
//debugger
		return (
			<div>
				{/*<button onClick={getUsers}>GET USERS</button>*/}
				{this.props.users.map(el => (
					<div key={el.id} className={styles.container}>
						<div className={styles.item}>
							<div>
								{/*<img src={el.photo} alt="usersAvatar"/>*/}
								<img src={el.photos.large || Dima_photo} alt="usersAvatar"/>
							</div>
							{el.followed ?
								<div>
									<button onClick={() => this.props.unFollow(el.id)}>Follow</button>
								</div>
								:
								<div>
									<button onClick={() => this.props.follow(el.id)}>Unfollow</button>
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
		);
	}
}


