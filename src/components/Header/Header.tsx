import React from 'react'
import {NavLink} from 'react-router-dom'
import header_logo from '../../photos/1633774787_19-kartinkin-net-p-monro-pop-art-krasivo-20.jpg'
import s from './Header.module.css'
import {AuthDataType} from "../../redux/auth-reducer";
import {AuthPropsType} from "./HeaderContainer";
import {UsersProfileResponseType} from "../Profile/ProfileContainer";



type HeaderType ={
	data: AuthDataType[]
	isAuth: boolean
	profile: 	UsersProfileResponseType[]
}
export const Header = (props: HeaderType) => {

	console.log(props.data)// {id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}
	console.log(props.profile[`photos`][`large`])
	let smallPhoto = props.profile[`photos`][`large`]
	return (
		<header className={s.header}>
			<img src={header_logo} alt="photo"/>

			<div className={s.login_block}>
				{props.isAuth
					? <div>
					{props.data['login']}
						<img src={smallPhoto} alt="myPhoto"/>
					</div>
					: <NavLink to={`/login/`}>
					LOGIN
				</NavLink>}

			</div>
		</header>
	)
}
