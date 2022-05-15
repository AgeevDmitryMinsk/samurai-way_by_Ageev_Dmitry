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


export const UsersF = (props: UsersPropsType) => {
	let {setUsers, 
		//users,
		setUsersTotalCount, 
		totalUsersCount,
		pageSize, 
		//setCurrentPage,
		currentPage, 
		//unFollow, follow
	} = props;

	console.log('Users Functional com[pent')

	useEffect(() => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then((response: AxiosResponse<UsersResponseType>) => {
				//console.log(response.data.items)
				setUsers(response.data.items)
				setUsersTotalCount(response.data.totalCount)
			})
	}, [currentPage, pageSize, setUsers, setUsersTotalCount])

	const onChangeCurrentPage = (curPage:number) => {
		props.setCurrentPage(curPage)
		// axios
		// 	.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curPage}&count=${props.pageSize}`)
		// 	.then((response: AxiosResponse<UsersResponseType>) => {
		// 		console.log(response.data.items)
		// 		setUsers(response.data.items)
		// 	})
	}
	let pagesCount = Math.ceil(totalUsersCount/pageSize)

	let pageArray = []// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
	for (let i = 1; i <= pagesCount; i++) { //!!! будут лагать, если написать i <= props.totalUsersCount вместо i <= pagesCount т.к. соотношение запросов 19007:191
		pageArray.push(i)
	}
	console.log(pageArray)
	console.log(totalUsersCount, pagesCount)

	return (
		<>{pageArray.map(el => {
			return <span key={el}
						 className={props.currentPage === el ? styles.selectedPage : ''}
						 onClick={() => onChangeCurrentPage(el)}
						 style={{padding:10, cursor:"pointer"}}>
				{el}
			</span>
		})}
			<>{/*<div>*/}
				{/*	<span>1</span>*/}
				{/*	<span className={styles.selectedPage}>2</span>*/}
				{/*	<span>3</span>*/}
				{/*	<span>4</span>*/}
				{/*	<span>5</span>*/}
				{/*</div>*/}</>
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


