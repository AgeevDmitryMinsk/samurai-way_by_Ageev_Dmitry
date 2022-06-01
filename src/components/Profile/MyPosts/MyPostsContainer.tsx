import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {
	addPost,

	InitialStateProfilePageType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type mapStateToPropsType = InitialStateProfilePageType

type mapDispatchToPropsType = {
	addPost: (newText: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		posts: state.ProfilePage.posts,
		profile: state.ProfilePage.profile,
		status: state.ProfilePage.status
	}
}


// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export const MyPostsContainer = connect(mapStateToProps,
	{
		addPost
	}
)(MyPosts)
