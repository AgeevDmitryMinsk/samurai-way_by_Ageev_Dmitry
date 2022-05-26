import React from 'react'
import {NavLink} from 'react-router-dom'
import header_logo from '../../photos/1633774787_19-kartinkin-net-p-monro-pop-art-krasivo-20.jpg'
import s from './Header.module.css'
import {AuthDataType} from "../../redux/auth-reducer";
import {UsersProfileResponseType} from "../Profile/ProfileContainer";



type HeaderType ={
	data: AuthDataType
	isAuth: boolean
	profile: UsersProfileResponseType
}
export const Header = (props: HeaderType) => {

	//console.log(props.data)// {id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}
	//console.log(props.profile.photos?.large)
	return (
		<header className={s.header}>
			<img src={header_logo} alt="photo_logo"/>

			<div className={s.login_block}>
				{props.isAuth
					? <>
						{props.data.login}
						<img src={props.profile.photos?.large || ``} alt="myPhoto"/>
						{/*<img src={props.profile[`photos`][`large`] || `` } alt="myPhoto"/>*/}
					</>
					: <NavLink to={`/login/`}>
					LOGIN
				</NavLink>}

			</div>
		</header>
	)
}
