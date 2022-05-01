import React from 'react'
//import s from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostDataType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
	PostData: ProfilePageType
	addPost: (newPostMessage: string) => void
	changeTextareaTitle: (newText: string) => void
}
export const Profile = (props: ProfilePropsType) => {

	//console.log(props.PostData)
	return (
		<div>
			Main content

			<ProfileInfo/>
			<MyPosts PostData={props.PostData}
					 addPost={props.addPost}
					 changeTextareaTitle={props.changeTextareaTitle}
					 newText={props.PostData.newPostText}
			/>

		</div>
	)
}