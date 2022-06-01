import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {addMessage, InitialStateType} from "../../redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

type mapStateToPropsType = InitialStateType //& {isAuth:boolean}
type mapDispatchToPropsType = {
	addMessage: (newMessage2: string) => void
}


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		dialogs: state.DialogsPage.dialogs,
		messages: state.DialogsPage.messages,
		//newMessageText: state.DialogsPage.newMessageText,
		//isAuth: state.auth.isAuth - не нужно пробрасывать в Dialogs
		// при использовании withAuthRedirect
	}
}


export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps,
	{
		addMessage
	}
))(Dialogs)
