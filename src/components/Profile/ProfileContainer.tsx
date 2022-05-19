import React from 'react';
import {Profile} from "./Profile";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {InitialStateProfilePageType, setUserProfile} from "../../redux/profile-reducer";

class ProfileApiContainer extends React.Component<ProfilePropsType> {

	componentDidMount() {
		axios
			// .get(`https://social-network.samuraijs.com/api/1.0//profile/{userId}`)
			.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
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

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType

type mapStateToPropsType = InitialStateProfilePageType

type mapDispatchToPropsType = {
	setUserProfile: (profile: UsersProfileResponseType) => void
}

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		posts: state.ProfilePage.posts,
		newPostText: state.ProfilePage.newPostText,
		profile: state.ProfilePage.profile


	}
}

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileApiContainer)
export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileApiContainer)


