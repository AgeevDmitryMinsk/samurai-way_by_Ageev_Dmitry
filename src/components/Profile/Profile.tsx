import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UsersProfileResponseType} from "./ProfileContainer";
import {AuthDataType} from "../../redux/auth-reducer";
//import {MyPosts} from "./MyPosts/MyPosts";
//import {ActionsTypes,	//PostDataType,	ProfilePageType} from "../../redux/store";
//import s from './Profile.module.css';
//import {Redirect} from "react-router-dom";
//import {ReduxStoreType} from "../../redux/redux-store";
// type ProfilePropsType = {
// 	//PostData: ProfilePageType
// 	// addPost: (newPostMessage: string) => void
// 	//changeTextareaTitle: (newText: string) => void
// 	//dispatch: (action: ActionsTypes) => void
// 	//store: ReduxStoreType
// }

type ProfileType = {
	profile: UsersProfileResponseType | null
	status: string//ProfileStatusType // | null
	updateStatus: (status: string) => void
	data: AuthDataType,
}
export const Profile = (props: ProfileType) => {

	return (
		<div>
			Main content

			<ProfileInfo profile={props.profile}
						 status={props.status}
						 data={props.data}
						 updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
			<>
				{/*//PostData={props.PostData}*/}
				{/*	 // newText={props.PostData.newPostText}*/}
				{/*	 //addPost={props.addPost}*/}
				{/*	 //changeTextareaTitle={props.changeTextareaTitle}*/}
				{/*	 //dispatch = {props.dispatch}*/}
				{/*//store = {props.store}*/}
			</>


		</div>
	)
}
