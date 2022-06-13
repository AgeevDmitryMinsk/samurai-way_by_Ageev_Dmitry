import React from 'react';
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Dima_photo from "../../photos/Dima.png";
import {UsersPropsType} from "./UsersContainer";


export const User = (props: UsersPropsType) => {
	return (
		<div>
			{props.users.map((el) => {
				//console.log(el.id, el.followed)
				return (
					<div key={el.id} className={styles.container}>
						<div className={styles.item}>
							<div>
								<NavLink to={`/profile/` + el.id}>
									<img src={el.photos.large || Dima_photo} alt="usersAvatar"/>
								</NavLink>

							</div>
							{el.followed ? <div>
									<button disabled={props.isFollowingInProgress.some((id:number) => id === el.id)}
										// если id есть в массиве isFollowingInProgress то метод some находит ее и цвет будет серым и состояние disabled:
										// можно также сделать через includes: <button disabled={props.isFollowingInProgress.includes(el.id)}
											style={{background: props.isFollowingInProgress.some((id:number) => id === el.id) ? "gray" : "fuchsia"}}
											onClick={() => {
												props.unFollowThunkCreator(el.id)
												// // axios
												// // 	.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
												// // 		{
												// // 			withCredentials: true,
												// // 			headers: {
												// // 				"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
												// // 			}
												// // 		})
												// props.setIsFollowingInProgress(true, el.id)
												// api.getUnfollow(el.id)
												// 	// .then((response: AxiosResponse<FollowResponseType>) => {
												// 	.then((data) => {
												// 		if (data.resultCode === 0) {
												// 			// props.follow(el.id)
												// 			props.unFollow(el.id)
												// 		}
												// 		props.setIsFollowingInProgress(false, el.id)
												// 	})
												//
												// // }} style={{background: props.isFollowingInProgress ? "gray" : "aqua"}}>Unfollow
											}}
										// style={{background: props.isFollowingInProgress ? "gray" : "aqua"}}
									>Unfollow
									</button>
								</div>
								: <div>
									<button disabled={props.isFollowingInProgress.some((id:number) => id === el.id)}
											style={{background: props.isFollowingInProgress.some((id:number) => id === el.id) ? "gray" : "aqua"}}
										// className={props.isFollowingInProgress ? styles.buttonDisabled : styles.button}
											onClick={() => {
												props.followThunkCreator(el.id)
												// // axios
												// // 	.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
												// // 		{},
												// // 		{
												// // 			withCredentials: true,
												// // 			headers: {
												// // 				"API-KEY": "57f858ff-ce33-4672-b278-3f2f1b802b55"
												// // 			}
												// // 		})
												// props.setIsFollowingInProgress(true, el.id)
												// api.getFollow(el.id)
												// 	// .then((response: AxiosResponse<FollowResponseType>) => {
												// 	.then((data) => {
												// 		// if (response.data.resultCode === 0) {
												// 		if (data.resultCode === 0) {
												// 			// props.unFollow(el.id)
												// 			props.follow(el.id)
												// 		}
												// 		props.setIsFollowingInProgress(false, el.id)
												// 	})
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
	);
};

