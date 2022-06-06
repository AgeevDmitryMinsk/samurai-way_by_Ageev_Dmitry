import React from 'react';
import {Header} from "./Header";
import {getAuthMeThunkCreator, InitialAuthStatePageType, logoutThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./Header.module.css";
import {UsersProfileResponseType} from "../Profile/ProfileContainer";
import {updateProfileStatusThunkCreator} from "../../redux/profile-reducer";


class HeaderApiContainer extends React.Component<AuthPropsType> {

	componentDidMount() {

		//this.props.getAuthMeThunkCreator()

		// console.log(`this.props.status =`, this.props.status)
		// console.log(`this.props.myStatus =`, this.props.myStatus)
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

	componentDidUpdate(prevProps: Readonly<AuthPropsType>, prevState: Readonly<{}>, snapshot?: any) { // PureComponent
		// console.log(`this.props.status =`, this.props.status)
		// console.log(`prevProps.status=` , prevProps.status)
		// console.log(`this.props.myStatus =`, this.props.myStatus)
		// console.log(`prevProps.myStatus = `, prevProps.myStatus)

		// if (this.props.status !== prevProps.status)  this.componentDidMount()
		if (this.props.status !== prevProps.status)  this.props.getAuthMeThunkCreator()

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
						  status={this.props.status}
						  userProfile={this.props.userProfile}
						  logoutThunkCreator={this.props.logoutThunkCreator}
				/>
			}
			</>

		);
	}
}

type mapStateToPropsType = InitialAuthStatePageType	& {profile: UsersProfileResponseType}
	& {status: string} &
	{userProfile: UsersProfileResponseType | null}


type mapDispatchToPropsType = {
	// setAuthUserData: (data: AuthDataType) => void
	// setIsFetchingAuth: (isFetchingAuth: boolean) => void
	// setAuthUserProfile: (profile: UsersProfileResponseType) => void
	getAuthMeThunkCreator: ()=>void
	updateProfileStatusThunkCreator: (status: string)=> void
	logoutThunkCreator: ()=>void
}

export type AuthPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return {
		data: state.auth.data,
		isAuth: state.auth.isAuth,
		isFetchingAuth: state.auth.isFetchingAuth,
		profile: state.auth.profile,
		myStatus: state.auth.myStatus,
		status: state.ProfilePage.status,
		userProfile: state.ProfilePage.profile
	}

}
export const HeaderContainer = connect(mapStateToProps,
	{
		// setAuthUserData, //перенес логику вызова из HeaderContainer в Thunk getAuthMeThunkCreator
		// setIsFetchingAuth, // аналогично
		// setAuthUserProfile,
		getAuthMeThunkCreator,
		updateProfileStatusThunkCreator,
		logoutThunkCreator
	})(HeaderApiContainer);
