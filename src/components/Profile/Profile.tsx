import React from 'react'
//import s from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ActionsTypes,
	//PostDataType,
	ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
//import {ReduxStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
	//PostData: ProfilePageType
	// addPost: (newPostMessage: string) => void
	//changeTextareaTitle: (newText: string) => void
	//dispatch: (action: ActionsTypes) => void
	//store: ReduxStoreType
}
export const Profile = (props: ProfilePropsType) => {

	//console.log(props.PostData)
	return (
		<div>
			Main content

			<ProfileInfo/>
			<MyPostsContainer //PostData={props.PostData}
					 // newText={props.PostData.newPostText}
					 //addPost={props.addPost}
					 //changeTextareaTitle={props.changeTextareaTitle}
					 //dispatch = {props.dispatch}
				//store = {props.store}
			/>

		</div>
	)
}
