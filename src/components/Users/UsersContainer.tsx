import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, InitialStateUsersPageType, setUsersAC, unFollowAC, UserType,} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type mapStateToPropsType =	InitialStateUsersPageType

type mapDispatchToPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		users: state.usersPage.users
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
		}

	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
