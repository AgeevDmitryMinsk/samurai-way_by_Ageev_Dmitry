import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

type DialogItemType = {
	name: string
	id: number
	photo: string
}
export const DialogItem = (props: DialogItemType) => {
	return (
		<div>
			<NavLink
				to={`/dialogs/${props.name}/${props.id}`}
				className={s.dialog}
				activeClassName={`${s.dialog} ${s.active}`}
			>
				{<img src={props.photo} className={s.photo} alt={'dialog_photo'}/>}
				{props.name}
			</NavLink>
		</div>

	)
}
