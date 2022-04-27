import React from 'react';
import content_logo from "../../photos/beach.png";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {

	return (
		<div className={s.content}>
			Main content
			<div>
				<img src={content_logo} alt={'content_logo'}/>
			</div>
			<div>
				ava + descr
			</div>
			<MyPosts/>
		</div>
	);
};


