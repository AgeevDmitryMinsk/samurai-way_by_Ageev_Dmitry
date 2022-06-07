import {AppRootStateType} from "./redux-store";

export const getInitialized = (state: AppRootStateType) => {
	return state.app.initialized
}
