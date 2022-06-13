import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams, withRouter} from "react-router-dom";
import {
	getProfileThunkCreator,
	getUserStatusThunkCreator,
	updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect, useDispatch} from "react-redux";

type UserIdType = {
	userId: string
}

const ProfileContainerWithHooks: React.FC = () => {
	const profile = useTypedSelector(state=>state.ProfilePage.profile)
	console.log(`profile from ProfileContainerWithHooks =`, profile)

	const dispatch = useDispatch()
	const {data} = useTypedSelector(state=>state.auth)
	let { userId }= useParams<any>();
	console.log(userId)

	useEffect(()=> {
		if (userId === undefined) {
			// userId = `22100`
			if (data.id) {
				userId = data.id
				console.log(data.id)
			}

		}
		dispatch(getProfileThunkCreator(userId))
		dispatch(getUserStatusThunkCreator(userId))
	}, [userId])

	return (
		<Profile data={data}/>
	);
};

export default compose<React.ComponentType>(
	withAuthRedirect //  withAuthRedirect для проверки залогирован ли пользователь
	)(ProfileContainerWithHooks)