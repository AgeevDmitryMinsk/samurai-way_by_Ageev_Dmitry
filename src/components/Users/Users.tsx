import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import Dima_photo from "../../photos/Dima.png";
import Natasha_photo from "../../photos/Natasha.png";
import Ksenia_photo from "../../photos/Ksenia.png";
import Vera_photo from "../../photos/Vera.png";


export const Users = (props: UsersPropsType) => {
if (props.users.length === 0) {
	props.setUsers([
		{
			id: '1',
			photo: Dima_photo,
			followed: false,
			fullName: "Dmitry A",
			status: `I'm a boss`,
			location: {city: "Minsk", country: "Belarus"}
		},
		{
			id: '2',
			photo: Natasha_photo,
			followed: true,
			fullName: "Natalia A",
			status: `I'm a house keeper`,
			location: {city: "Minsk", country: "Belarus"}
		},
		{
			id: '3',
			photo: Ksenia_photo,
			followed: true,
			fullName: "Ksenia A",
			status: `I'm a student`,
			location: {city: "Minsk", country: "Belarus"}
		},
		{
			id: '4',
			photo: Vera_photo,
			followed: true,
			fullName: "Vera A",
			status: `I'm a student`,
			location: {city: "Minsk", country: "Belarus"}
		}
	] )
}


	return (
		<div>
			{props.users.map(el => (
				<div key={el.id} className={styles.container}>
					<div className={styles.item}>
						<div>
							<img src={el.photo} alt="usersAvatar"/>
						</div>
						{el.followed ?
						<div>
							<button onClick={()=>props.unFollow(el.id)}>Follow</button>
						</div>
							:
							<div>
								<button onClick={()=>props.follow(el.id)}>Unfollow</button>
							</div>}
					</div>

					<span className={styles.description}>
						<div className={styles.item}>
							<div style={{
								fontWeight: "bold",
								color: "#134711a1"
							}}>
								{el.fullName}</div>
							<div>{el.status}</div>
						</div>

						<div className={styles.item}>
							<div>{el.location.country}</div>
							<div>{el.location.city}</div>
						</div>
					</span>
				</div>))}
		</div>
	);
};


