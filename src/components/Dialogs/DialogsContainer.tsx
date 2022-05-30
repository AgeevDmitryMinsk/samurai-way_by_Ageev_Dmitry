// //import React, {ChangeEvent} from 'react'
// import s from './Dialogs.module.css'
// import {DialogItem} from "./DialogItem/DialogItem";
// import {Message} from "./Message/Message";
// import {
// 	ActionsTypes,
// 	//addMessageAC,
// 	//changeNewMessageTextAC,
// 	//DialogItemType,
// 	DialogsPageType, StoreType,
// 	//MessageType
// } from "../../redux/store";
// import {addMessageAC, changeNewMessageTextAC} from "../../redux/messages-reducer";
// //import {ReduxStoreType} from "../../redux/redux-store";
//import {StoreContext} from "../../StoreContext";
//type DialogsPropsType = {
//DialogsData: DialogItemType[]
// MessagesData: MessageType[]
//MessagesData: DialogsPageType
//dispatch: (action: ActionsTypes) => void
//store: ReduxStoreType
// store: StoreType}
// export const DialogsContainer = (props: DialogsPropsType) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				store => {
// 					let state = store.getState().DialogsPage
//
// 					function newMessageOnChangeHandler(newMessage: string) {
// 						// console.log(e.currentTarget.value)
// 						// let newMessage = e.currentTarget.value
// 						//props.store.dispatch(changeNewMessageTextAC(newMessage))
// 						store.dispatch(changeNewMessageTextAC(newMessage))
// 						//console.log('props.MessagesData.newMessageText заносим в state = ', props.MessagesData.newMessageText)
// 					}
//
// 					function addMessageHandler() {
// 						// props.store.dispatch(addMessageAC(props.store.getState().DialogsPage.newMessageText))
// 						// store.dispatch(addMessageAC(props.store.getState().DialogsPage.newMessageText))
// 						store.dispatch(addMessageAC(store.getState().DialogsPage.newMessageText))
// 						//console.log(`props.MessagesData.newMessageText из state до обнуления = `, props.MessagesData.messages.at(-1)?.message)
// 					}
//
// 					return (
// 						<Dialogs MessagesData={store.getState().DialogsPage}
// 											// props.store.getState().DialogsPage}
// 								 newMessageOnChange={newMessageOnChangeHandler}
// 								 addMessage={addMessageHandler}
// 						/>
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	)
//
//
// }

//import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {addMessage, InitialStateType } from "../../redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

type mapStateToPropsType = InitialStateType //& {isAuth:boolean}
type mapDispatchToPropsType = {
	newMessageOnChange: (newMessage: string) => void
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

// function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
// 	return {
// 		newMessageOnChange: (newMessage: string) => {
// 			dispatch(changeNewMessageTextAC(newMessage))
// 		},
// 		addMessage: () => {
// 			dispatch(addMessageAC())
// 		}
// 	}
// }

//compose(withAuthRedirect)(Dialogs)

//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps,
// 	{
// 		newMessageOnChange,
// 		addMessage		}
// 	)(Dialogs))

// export const DialogsContainer = compose(
// 	withAuthRedirect(connect(mapStateToProps,
// 		{newMessageOnChange, addMessage})(Dialogs))
// )
export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps,
	{
		addMessage		}
))(Dialogs)
