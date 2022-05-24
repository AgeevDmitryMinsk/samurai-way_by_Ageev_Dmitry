import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
	follow,
	InitialStateUsersPageType,
	setCurrentPage,
	setIsFetching, setIsFollowingInProgress,
	setUsers,
	setUsersTotalCount,
	unFollow,
	UserType,
} from "../../redux/users-reducer";

import React from "react";
import {UsersF} from "./UsersF";
import {Preloader} from "../common/Preloader";
import {api} from "../../api/api";


class UsersApiComponent extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.setIsFetching(true)
		// axios
		// 	.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
		// 		{withCredentials: true}
		// 	)


		api.getUsers(this.props.currentPage, this.props.pageSize)
			//.then((response: AxiosResponse<UsersResponseType>) => {
			.then((data) => {
				this.props.setIsFetching(false)
				// this.props.setUsers(response.data.items)
				this.props.setUsers(data.items)
				this.props.setUsersTotalCount(data.totalCount)

			})
	}

	onChangeCurrentPage = (currPage: number) => {
		this.props.setIsFetching(true)
		this.props.setCurrentPage(currPage)
		// axios
		// 	.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`,
		// 		{withCredentials: true}
		// 	)
		api.getUsers(currPage, this.props.pageSize)
			// .then((response: AxiosResponse<UsersResponseType>) => {
			.then((data) => {
				this.props.setIsFetching(false)
				// this.props.setUsers(response.data.items)
				this.props.setUsers(data.items)
			})
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
						  unFollow={this.props.unFollow}
						  follow={this.props.follow}
						  setUsers={this.props.setUsers}
						  setUsersTotalCount={this.props.setUsersTotalCount}
						  setCurrentPage={this.props.setCurrentPage}
						  setIsFetching={this.props.setIsFetching}
						  isFetching={this.props.isFetching}
						  isFollowingInProgress={this.props.isFollowingInProgress}
						  setIsFollowingInProgress={this.props.setIsFollowingInProgress}
						  isFetchingButtonFollowUnfollow = {this.props.isFetchingButtonFollowUnfollow}

				/>}
			</>)
	}
}


type mapStateToPropsType = InitialStateUsersPageType

type mapDispatchToPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setUsersTotalCount: (totalCount: number) => void
	setIsFetching: (isFetching: boolean) => void
	setIsFollowingInProgress: (isFetchingButtonFollowUnfollow: boolean, userId: number)=> void
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
		isFetchingButtonFollowUnfollow: state.usersPage.isFetchingButtonFollowUnfollow
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

export const UsersContainer = connect(mapStateToProps,
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
		setIsFollowingInProgress
	}
)(UsersApiComponent)
//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersF)
