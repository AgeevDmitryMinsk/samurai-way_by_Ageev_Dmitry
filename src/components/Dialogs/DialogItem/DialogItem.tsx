import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

type DialogItemType = {
	name: string
	id: number
}
export const DialogItem = (props: DialogItemType) => {
	return (
		<div>
			<NavLink
				to={`/dialogs/${props.id}`}
				className={s.dialog}
				activeClassName={`${s.dialog} ${s.active}`}
			>
				{props.name}
			</NavLink>
		</div>

	)
}
