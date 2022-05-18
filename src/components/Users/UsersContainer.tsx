import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
	followAC,
	InitialStateUsersPageType,
	setCurrentPageAC,
	setUsersAC,
	setUsersTotalCountAC,
	unFollowAC, UsersResponseType,
	UserType,
} from "../../redux/users-reducer";
import {Dispatch} from "redux";

//import {UsersApiComponent} from "./UsersApiComponent";
import React from "react";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";
import {UsersF} from "./UsersF";

class UsersApiComponent extends React.Component<UsersPropsType> {

	// constructor(props: UsersPropsType) {
	// 	 super(props);
	// }

	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response: AxiosResponse<UsersResponseType>) => {
				console.log(response.data)
				console.log(`totalCount/count = `, response.data.totalCount / 5, this.props.totalUsersCount / this.props.pageSize)
				this.props.setUsers(response.data.items)
				this.props.setUsersTotalCount(response.data.totalCount)

			})
	}

	onChangeCurrentPage = (currPage: number) => {
		this.props.setCurrentPage(currPage)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.pageSize}`)
			.then((response: AxiosResponse<UsersResponseType>) => {
				console.log(response.data)
				console.log(`totalCount/count = `, response.data.totalCount / 5, this.props.totalUsersCount / this.props.pageSize)
				this.props.setUsers(response.data.items)
				//this.props.setUsersTotalCount(response.data.totalCount)
			})
	}

	render() {
		return <UsersF totalUsersCount={this.props.totalUsersCount}
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
		/>
	}
}


type mapStateToPropsType =	InitialStateUsersPageType

type mapDispatchToPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
	setCurrentPage: (currentPage: number) => void
	setUsersTotalCount: (totalCount: number) => void
}



export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}

}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
	return {
		follow: (userId: number) => {
			dispatch(followAC(userId))
		},
		unFollow: (userId: number) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users: Array<UserType>) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage: number) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setUsersTotalCount: (totalCount: number) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}

	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)
//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersF)
