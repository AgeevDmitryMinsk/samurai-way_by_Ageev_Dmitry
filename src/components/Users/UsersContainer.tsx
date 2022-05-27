import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
	follow,
	followThunkCreator,
	getUsersThunkCreator,
	InitialStateUsersPageType,
	setCurrentPage,
	setIsFetching,
	setIsFollowingInProgress,
	setUsers,
	setUsersTotalCount,
	unFollow,
	unFollowThunkCreator,
} from "../../redux/users-reducer";

import React from "react";
import {UsersF} from "./UsersF";
import {Preloader} from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
//import {api} from "../../api/api";


// class UsersApiComponent extends React.Component<UsersPropsType> {
class UsersApiComponent extends React.Component<UsersPropsType> { // ??? какой тип сделать здесь

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onChangeCurrentPage = (currPage: number) => {
		this.props.getUsersThunkCreator(currPage, this.props.pageSize)
		// this.props.setIsFetching(true)
		// this.props.setCurrentPage(currPage)
		// // axios
		// // 	.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`,
		// // 		{withCredentials: true}
		// // 	)
		// api.getUsers(currPage, this.props.pageSize)
		// 	// .then((response: AxiosResponse<UsersResponseType>) => {
		// 	.then((data) => {
		// 		this.props.setIsFetching(false)
		// 		// this.props.setUsers(response.data.items)
		// 		this.props.setUsers(data.items)
		// 	})
	}

	render() {
		return (
			<>{this.props.isFetching
				? <Preloader/>
				: <UsersF totalUsersCount={this.props.totalUsersCount}
					// return <Users totalUsersCount={this.props.totalUsersCount}
						  pageSize={this.props.pageSize}
						  currentPage={this.props.currentPage}
						  onChangeCurrentPage={this.onChangeCurrentPage}
						  users={this.props.users}
						  // unFollow={this.props.unFollow}
						  // follow={this.props.follow}
						  //setUsers={this.props.setUsers}
						  //setUsersTotalCount={this.props.setUsersTotalCount}
						  // setCurrentPage={this.props.setCurrentPage}
						  //setIsFetching={this.props.setIsFetching}
						  isFetching={this.props.isFetching}
						  isFollowingInProgress={this.props.isFollowingInProgress}
						  // setIsFollowingInProgress={this.props.setIsFollowingInProgress}
						  isFetchingButtonFollowUnfollow={this.props.isFetchingButtonFollowUnfollow}
						  followThunkCreator={this.props.followThunkCreator}
						  unFollowThunkCreator={this.props.unFollowThunkCreator}
						  getUsersThunkCreator={this.props.getUsersThunkCreator}
						  // isAuth={this.props.isAuth}
						  //isAuth: state.auth.isAuth - не нужно пробрасывать в UsersF
						  // при использовании withAuthRedirect

				/>}
			</>)
	}
}


type mapStateToPropsType = InitialStateUsersPageType //& {isAuth: boolean}

type mapDispatchToPropsType = {
	//follow: (userId: number) => void
	// unFollow: (userId: number) => void
	//setUsers: (users: Array<UserType>) => void
	// setCurrentPage: (currentPage: number) => void
	//setUsersTotalCount: (totalCount: number) => void
	//setIsFetching: (isFetching: boolean) => void
	// setIsFollowingInProgress: (isFetchingButtonFollowUnfollow: boolean, userId: number) => void
	followThunkCreator: (id: number) => void
	unFollowThunkCreator: (id: number) => void
	getUsersThunkCreator: (currentPage: number, pageSize:number) => void
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		isFollowingInProgress: state.usersPage.isFollowingInProgress,
		isFetchingButtonFollowUnfollow: state.usersPage.isFetchingButtonFollowUnfollow,
		//isAuth: state.auth.isAuth
	}

}

// function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
// 	return {
// 		follow: (userId: number) => {
// 			dispatch(followAC(userId))
// 		},
// 		unFollow: (userId: number) => {
// 			dispatch(unFollowAC(userId))
// 		},
// 		setUsers: (users: Array<UserType>) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (currentPage: number) => {
// 			dispatch(setCurrentPageAC(currentPage))
// 		},
// 		setUsersTotalCount: (totalCount: number) => {
// 			dispatch(setUsersTotalCountAC(totalCount))
// 		},
// 		setIsFetching: (isFetching: boolean) => {
// 			dispatch(setIsFetchingAC(isFetching))
// 		}
// 	}
// }

export const UsersContainer = withAuthRedirect(connect(mapStateToProps,
	// {
	// 	follow: followAC,
	// 	unFollow: unFollowAC,
	// 	setUsers: setUsersAC,
	// 	setCurrentPage: setCurrentPageAC,
	// 	setUsersTotalCount: setUsersTotalCountAC,
	// 	setIsFetching: setIsFetchingAC
	// }
	{
		follow,
		unFollow,
		setUsers,
		setCurrentPage,
		setUsersTotalCount,
		setIsFetching,
		setIsFollowingInProgress,
		getUsersThunkCreator,
		followThunkCreator,
		unFollowThunkCreator
	}
)(UsersApiComponent))
//withAuthRedirect - HOC для обработки поступающих в качестве аргумента компонент на предмет залогирован
//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersF)

