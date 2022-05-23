import React from 'react';
import {Header} from "./Header";
import axios, {AxiosResponse} from "axios";
import {
	AuthDataType,
	AuthResponseType,
	InitialAuthStatePageType,
	setAuthUserData, setAuthUserProfile,
	setIsFetchingAuth
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./Header.module.css";
import {UsersProfileResponseType} from "../Profile/ProfileContainer";

class HeaderApiContainer extends React.Component<AuthPropsType> {

	componentDidMount() {
		this.props.setIsFetchingAuth(true)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: false})
			.then((response: AxiosResponse<AuthResponseType>) => {
				//debugger
				if (response.data.resultCode === 0) {
					// let {id, login, email} = response.data.data
					this.props.setAuthUserData(response.data.data)
					this.props.setIsFetchingAuth(false)
				} else {this.props.setIsFetchingAuth(false)}
				// console.log(response.data.data.id)
				axios
					.get(`https://social-network.samuraijs.com/api/1.0/profile/` + response.data.data.id)
					.then((response: AxiosResponse<UsersProfileResponseType>) => {
						//console.log(response.data)//{aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}


						this.props.setAuthUserProfile(response.data)
					})
			})

		// console.log(myId)
	}

	render() {
		console.log(this.props.data)//{} //{id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}
		console.log(this.props.profile) // {} // {aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
		console.log(this.props.isFetchingAuth) //false / true
		return (

			<>{this.props.isFetchingAuth
				// ? <Preloader/>
				? <h1 className={s.header}> H E A D E R L O A D I N G </h1>
				: <Header data={this.props.data} isAuth={this.props.isAuth} profile={this.props.profile}/>
			}
			</>

		);
	}
}

type mapStateToPropsType = InitialAuthStatePageType

type mapDispatchToPropsType = {
	setAuthUserData: (data: AuthDataType) => void
	setIsFetchingAuth: (isFetchingAuth: boolean) => void
	setAuthUserProfile: (profile: UsersProfileResponseType) => void
}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return {
		data: state.auth.data,
		isAuth: state.auth.isAuth,
		isFetchingAuth: state.auth.isFetchingAuth,
		profile: state.auth.profile
	}

}
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, setIsFetchingAuth, setAuthUserProfile})(HeaderApiContainer);