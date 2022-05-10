import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, InitialStateUsersPageType, setUsersAC, unFollowAC, UsersDataType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type mapStateToPropsType =	InitialStateUsersPageType

type mapDispatchToPropsType = {
	follow: (userId: string) => void
	unFollow: (userId: string) => void
	setUsers: (users: Array<UsersDataType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		users: state.usersPage.users
	}

}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
	return {
		follow: (userId: string) => {
			dispatch(followAC(userId))
		},
		unFollow: (userId: string) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users: Array<UsersDataType>) => {
			dispatch(setUsersAC(users))
		}

	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
