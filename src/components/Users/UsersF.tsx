import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import Dima_photo from "../../photos/Dima.png";
import {NavLink} from 'react-router-dom';
import {api} from "../../api/api";



type UsersPropsTypeF = UsersPropsType & {
	onChangeCurrentPage: (el: number) => void
}
export const UsersF = (props: UsersPropsTypeF) => {
	let {
		totalUsersCount,
		pageSize,
	} = props;

	let pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pageArray = []// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
	for (let i = 1; i <= pagesCount; i++) { //!!! будут лагать, если написать i <= props.totalUsersCount вместо i <= pagesCount т.к. соотношение запросов 19007:191
		pageArray.push(i)
	}

	return (
		<>{pageArray.map(el => {
			return <span key={el}
						 className={props.currentPage === el ? styles.selectedPage : ''}
						 onClick={() => props.onChangeCurrentPage(el)}
						 style={{padding: 10, cursor: "pointer"}}>
				{el}
			</span>
		})}
			<div>
				{props.users.map(el => {
					console.log(el.id, el.followed)
					return(
						<div key={el.id} className={styles.container}>
							<div className={styles.item}>
								<div>
									<NavLink to={`/profile/` + el.id}>
										<img src={el.photos.large || Dima_photo} alt="usersAvatar"/>
									</NavLink>

								</div>
								{el.followed ? <div>
										<button onClick={() => {
											// axios
											// 	.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
											// 		{
											// 			withCredentials: true,
											// 			headers: {
											// 				"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
											// 			}
											// 		})
											api.getUnfollow(el.id)
												// .then((response: AxiosResponse<FollowResponseType>) => {
												.then((data) => {
													if (data.resultCode === 0) {
														// props.follow(el.id)
														props.unFollow(el.id)
													}
												})

										}}>Unfollow
										</button>
									</div>
									: <div>
										<button onClick={() => {
											// axios
											// 	.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
											// 		{},
											// 		{
											// 			withCredentials: true,
											// 			headers: {
											// 				"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
											// 			}
											// 		})
											api.getFollow(el.id)
												// .then((response: AxiosResponse<FollowResponseType>) => {
												.then((data) => {
													// if (response.data.resultCode === 0) {
													if (data.resultCode === 0) {
														// props.unFollow(el.id)
														props.follow(el.id)
													}
												})

										}}>Follow
										</button>
									</div>}
							</div>


							<span className={styles.description}>
						<div className={styles.item}>
							<div style={{
								fontWeight: "bold",
								color: "#134711a1"
							}}>

								{el.name}</div>
							<div>{el.status}</div>
						</div>
					</span>
						</div>)
				})}
			</div>
		</>
	);

}


