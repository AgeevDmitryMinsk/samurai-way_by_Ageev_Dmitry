import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
	getProfileThunkCreator,
	getUserStatusThunkCreator,
	updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileApiContainer extends React.Component<PropsType> {

	componentDidMount() {

		let userId = this.props.match.params.userId
		console.log(this.props.match.params.userId)
		if (userId === undefined) {
			userId = `2`
		}
		this.props.getProfileThunkCreator(userId)
		this.props.getUserStatusThunkCreator(userId)
		this.props.updateProfileStatusThunkCreator(this.props.status)
		//debugger

		// axios
		// 	.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
		//.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
		// api.getProfile(userId)
		// 	// .then((response: AxiosResponse<UsersProfileResponseType>) => {
		// 	.then((data) => {
		// 		console.log(data)
		// 		//this.props.setUserProfile(response.data)
		// 		this.props.setUserProfile(data)
		// 	})
	}

	render() {
		//console.log(this.props.isAuth) // залогинен ? true/false
		//для версии v5 react-router-dom <Redirect to=""/>
		//if (!this.props.isAuth ) return <Redirect to={"/login"}/> // if (this.props.isAuth === false) return <Redirect to={"/login"}/>
		// if (this.props.isAuth === false) return <Navigate to={"/login"}/> - <Navigate to=""/> для версии v6 react-router-dom

		return (
			<Profile profile={this.props.profile}
					 updateStatus={this.props.updateProfileStatusThunkCreator}
					 status={this.props.status}
				//isAuth={this.props.isAuth}
			/>
		);
	}
}

export type UsersProfileResponseType = {
	aboutMe: string
	contacts: {
		facebook: string
		website: string | null,
		vk: string | null,
		twitter: string | null,
		instagram: string | null,
		youtube: string | null,
		github: string | null,
		mainLink: string | null,
	},
	lookingForAJob: boolean
	lookingForAJobDescription: string | null,
	fullName: string | null,
	userId: number
	photos: {
		small: string | null,
		large: string | null,
	}
}

export type OwnProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

export type ProfileStatusType = {status: string}

type PathParamsType = { userId: string }
export type mapStateToPropsType = {
	profile: UsersProfileResponseType | null
	status: string// ProfileStatusType // | null
	//isAuth: boolean
}

type mapDispatchToPropsType = {
	// setUserProfile: (profile: UsersProfileResponseType) => void
	getProfileThunkCreator: (userId: string) => void
	getUserStatusThunkCreator: (userId: string) => void
	updateProfileStatusThunkCreator: (status: string) => void

}

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		profile: state.ProfilePage.profile,
		//isAuth: state.auth.isAuth - не нужно пробрасывать в ProfileApiContainer
		// при использовании withAuthRedirect
		status: state.ProfilePage.status
	}
}

//let WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileApiContainer)
// export const ProfileContainer = withAuthRedirect(connect(mapStateToProps,
// 	{
// 		// setUserProfile,  убрал setUserProfile в Thunk getProfileThunkCreator
// 		getProfileThunkCreator
// 	})(WithUrlDataContainerComponent))
//withAuthRedirect - HOC для обработки поступающих в качестве аргумента компонент на предмет залогирован

export const ProfileContainer = compose<React.ComponentType>(
	//withAuthRedirect,
	withRouter, connect(mapStateToProps,
		{getProfileThunkCreator, getUserStatusThunkCreator, updateProfileStatusThunkCreator },
	))(ProfileApiContainer)

