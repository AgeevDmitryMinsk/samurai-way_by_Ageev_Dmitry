import React from 'react';
import content_logo from "../../../photos/beach.png";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.content}>
			<div>
				<img src={content_logo} alt={'content_logo'}/>
			</div>
			<div className={s.descriptionBlock}>
				ava + descr
			</div>

		</div>
	);
};

export default ProfileInfo;
