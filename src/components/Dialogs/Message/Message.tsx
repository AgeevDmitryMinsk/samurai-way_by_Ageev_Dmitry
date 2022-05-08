import s from "./Mesaage.module.css";
import React from "react";
import {MessageType} from "../../../redux/store";


export const Message = (props: MessageType) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}
