import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {
	addPost,

	InitialStateProfilePageType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {getProfile, getStatus} from "../../../redux/profile-selectors";
import {getPosts} from "../../../redux/myPost-selectors";


type mapStateToPropsType = InitialStateProfilePageType

type mapDispatchToPropsType = {
	addPost: (newText: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		posts: getPosts(state), //state.ProfilePage.posts,
		profile: getProfile(state), // было state.ProfilePage.profile,
		status: getStatus(state), // было state.ProfilePage.status,
	}
}


// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export const MyPostsContainer = connect(mapStateToProps,
	{
		addPost
	}
)(MyPosts)
