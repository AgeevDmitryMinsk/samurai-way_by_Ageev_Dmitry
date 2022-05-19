import React from 'react';
import {Profile} from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

class ProfileApiContainer extends React.Component<PropsType> {

	componentDidMount() {
		let userId = this.props.match.params.userId
		console.log(this.props.match.params.userId)
		if (!userId) { userId = `2`}

		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			//.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response: AxiosResponse<UsersProfileResponseType>) => {
				console.log(response.data)
				this.props.setUserProfile(response.data)
			})
	}

	render() {

		return (
			<Profile profile={this.props.profile}/>
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

type PropsType = RouteComponentProps<PathParamsType> & OwnProfilePropsType

type PathParamsType = {	userId: string}
type mapStateToPropsType = {
	profile: UsersProfileResponseType | null
}

type mapDispatchToPropsType = {
	setUserProfile: (profile: UsersProfileResponseType) => void
}

function mapStateToProps(state: AppRootStateType) {
	return {
		profile: state.ProfilePage.profile
	}
}

let WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileApiContainer)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
