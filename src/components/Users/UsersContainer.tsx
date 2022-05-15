import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
	followAC,
	InitialStateUsersPageType,
	setCurrentPageAC,
	setUsersAC, setUsersTotalCountAC,
	unFollowAC,
	UserType,
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
//import {Users} from "./Users";
import {UsersF} from "./UsersF";


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

//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersF)
