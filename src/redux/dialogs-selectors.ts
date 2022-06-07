import {AppRootStateType} from "./redux-store";

export const getDialogs = (state: AppRootStateType) => {
	return state.DialogsPage.dialogs
}

export const getMessages = (state: AppRootStateType) => {
	return state.DialogsPage.messages
}
