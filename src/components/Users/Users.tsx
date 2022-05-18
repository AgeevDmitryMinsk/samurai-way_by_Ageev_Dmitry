import React from 'react';
import styles from "./Users.module.css";
import Dima_photo from "../../photos/Dima.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onChangeCurrentPage:(el:number) => void
	users: Array<UserType>
	unFollow:(id:number) => void
	follow:(id:number)=>void

}

export const Users = (props: UsersPropsType) => {

	console.log('Users Class com[pent')
	// количество отображаемых страниц округляем в большую сторону:
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	console.log(pagesCount)

	let pagesArray = []
	for (let i = 1; i <= pagesCount; i++) {
		pagesArray.push(i)
	}
	console.log(pagesArray)


	return (
		<>
			<div>
				{pagesArray.map((el: number) => {
					return <span key={el}
								 className={props.currentPage === el ? styles.selectedPage : ''}
								 onClick={() => props.onChangeCurrentPage(el)}
								 style={{padding: 10, cursor: "pointer"}}>
						{el}
						</span>
				})}

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
					</span>
					</div>))}
			</div>
		</>
	);
}
