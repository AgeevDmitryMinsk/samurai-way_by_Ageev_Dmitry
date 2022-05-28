import React from 'react';
import {Header} from "./Header";
import {getAuthMeThunkCreator, InitialAuthStatePageType} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./Header.module.css";
import {UsersProfileResponseType} from "../Profile/ProfileContainer";


class HeaderApiContainer extends React.Component<AuthPropsType> {

	componentDidMount() {
		this.props.getAuthMeThunkCreator()

		// this.props.setIsFetchingAuth(true)
		// // axios
		// // 	.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
		// // 		{withCredentials: true}
		// // 	)
		// // 	.then((response: AxiosResponse<AuthResponseType>) => {
		// api.getAuthMe()
		// 	.then((data) => {
		// 		if (data.resultCode === 0) {
		// 			// let {id, login, email} = response.data.data
		// 			this.props.setAuthUserData(data.data)
		// 			this.props.setIsFetchingAuth(false)
		// 		} else {this.props.setIsFetchingAuth(false)}
		// 		// console.log(response.data.data.id)
		// 		// axios
		// 		// 	.get(`https://social-network.samuraijs.com/api/1.0/profile/` + data.data.id)
		// 		api.getMyProfileInAuthMe(data)
		// 			// .then((response: AxiosResponse<UsersProfileResponseType>) => {
		// 			.then((data) => {
		// 				//console.log(response.data)//{aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
		//
		//
		// 				this.props.setAuthUserProfile(data)
		// 			})
		// 	})
		//
		// // console.log(myId)
	}

	render() {
		//console.log(this.props.data)//{} //{id: 22100, login: 'AgeevDmitryMinsk', email: 'ageev.dmitry@outlook.com'}
		//console.log(this.props.profile) // {} // {aboutMe: 'Looking for Angular, React, JavaScript the remote job\nБусидо - 51/1', contacts: {…}, lookingForAJob: true, lookingForAJobDescription: 'JS, React, Angular', fullName: 'AgeevDmitryMinsk', …}
		//console.log('this.props.isFetchingAuth = ', this.props.isFetchingAuth) //false / true
		return (

			<>{this.props.isFetchingAuth
				// ? <Preloader/>
				? <h1 className={s.header}> H E A D E R L O A D I N G </h1>
				: <Header data={this.props.data}
						  isAuth={this.props.isAuth}
						  profile={this.props.profile}
						  myStatus={this.props.myStatus}
				/>
			}
			</>

		);
	}
}

type mapStateToPropsType = InitialAuthStatePageType & {profile: UsersProfileResponseType}

type mapDispatchToPropsType = {
	// setAuthUserData: (data: AuthDataType) => void
	// setIsFetchingAuth: (isFetchingAuth: boolean) => void
	// setAuthUserProfile: (profile: UsersProfileResponseType) => void
	getAuthMeThunkCreator: ()=>void
}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return {
		data: state.auth.data,
		isAuth: state.auth.isAuth,
		isFetchingAuth: state.auth.isFetchingAuth,
		profile: state.auth.profile,
		myStatus: state.auth.myStatus
	}

}
export const HeaderContainer = connect(mapStateToProps,
	{
		// setAuthUserData, //перенес логику вызова из HeaderContainer в Thunk getAuthMeThunkCreator
		// setIsFetchingAuth, // аналогично
		// setAuthUserProfile,
		getAuthMeThunkCreator
	})(HeaderApiContainer);
