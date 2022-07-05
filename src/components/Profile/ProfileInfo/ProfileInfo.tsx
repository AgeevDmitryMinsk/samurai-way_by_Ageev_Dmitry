import React from 'react';
//import content_logo from "../../../photos/beach.png";
import s from './ProfileInfo.module.css'
import {UsersProfileResponseType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";
import {AuthDataType} from "../../../redux/auth-reducer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";


type ProfileInfoType = {
	// profile: UsersProfileResponseType | null
	// status: string//ProfileStatusType  // | null
	// updateProfileStatusThunkCreator: (status: string) => void
	//isAuth: boolean
	data: AuthDataType
}

const ProfileInfo = (props: ProfileInfoType) => {
	const {profile, status} = useTypedSelector(state=>state.ProfilePage)
	console.log(`profile from ProfileInfo =`, profile)
	console.log(`status from ProfileInfo =`, status)

	if (!profile) {
		return <h1>PROFILE LOADING PROFILE....</h1>
		// return <Preloader/>
	} else return (
		<div className={s.content}>
			{/*<div>*/}
			{/*	<img src={content_logo} alt={'content_logo'}/>*/}
			{/*</div>*/}
			<div className={s.descriptionBlock}>
				<img src={profile?.photos.small || ''} alt={'profile_photos_small'}
					 style={{height: 50, width: 50}}/>
				<ProfileStatus status={status}
							   // updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}
							   data={props.data} profile={profile}/>
				<h3>Меня зовут: {profile.fullName} </h3>
				<h3>Обо мне: {profile.aboutMe} </h3>
				<h3>Ищу работу: {profile.lookingForAJob ? "ДА" : "Нет"}  </h3>
				<h3>Какую работу ищу: {profile.lookingForAJobDescription} </h3>
				<h3>мой ID: {profile.userId} </h3>
				<h3>мой vk: {profile.contacts.vk} </h3>
				ava + descr
			</div>

		</div>
	);
};

export default ProfileInfo;
