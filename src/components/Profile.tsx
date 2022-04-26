import React from 'react';
import content_logo from "../photos/beach.png";
import s from "./Profile.module.css"

export const Profile = () => {

	return (
		<div className={s.content}>
			Main content
			<div>
				<img src={content_logo}/>
			</div>
			<div>
				ava + descr
			</div>
			<div>
				My posts
			</div>
			<div>
				New posts
			</div>
			<div>
				<div>Post1</div>
				<div>Post2</div>
			</div>

		</div>
	);
};


