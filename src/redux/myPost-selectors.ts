import {AppRootStateType} from "./redux-store";

export const getPosts = (state: AppRootStateType) => {
	return state.ProfilePage.posts
}
