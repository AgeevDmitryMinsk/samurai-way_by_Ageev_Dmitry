import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
	ActionsTypes,
	//addMessageAC,
	//changeNewMessageTextAC,
	//DialogItemType,
	DialogsPageType, StoreType,
	//MessageType
} from "../../redux/store";
import {addMessageAC, changeNewMessageTextAC} from "../../redux/messages-reducer";
//import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
	//DialogsData: DialogItemType[]
	// MessagesData: MessageType[]
	//MessagesData: DialogsPageType
	//dispatch: (action: ActionsTypes) => void
	//store: ReduxStoreType
	// store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
	return (
		<StoreContext.Consumer>
			{
				store => {
					let state = store.getState().DialogsPage

					function newMessageOnChangeHandler(newMessage: string) {
						// console.log(e.currentTarget.value)
						// let newMessage = e.currentTarget.value
						//props.store.dispatch(changeNewMessageTextAC(newMessage))
						store.dispatch(changeNewMessageTextAC(newMessage))
						//console.log('props.MessagesData.newMessageText заносим в state = ', props.MessagesData.newMessageText)
					}

					function addMessageHandler() {
						// props.store.dispatch(addMessageAC(props.store.getState().DialogsPage.newMessageText))
						// store.dispatch(addMessageAC(props.store.getState().DialogsPage.newMessageText))
						store.dispatch(addMessageAC(store.getState().DialogsPage.newMessageText))
						//console.log(`props.MessagesData.newMessageText из state до обнуления = `, props.MessagesData.messages.at(-1)?.message)
					}

					return (
						<Dialogs MessagesData={store.getState().DialogsPage}
											// props.store.getState().DialogsPage}
								 newMessageOnChange={newMessageOnChangeHandler}
								 addMessage={addMessageHandler}
						/>
					)
				}
			}
		</StoreContext.Consumer>
	)


}

