import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type mapStateToPropsForRedirectType = {
	isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): mapStateToPropsForRedirectType => {
	return {
		isAuth: state.auth.isAuth
	}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
		let {isAuth, ...restProps} = props

		if (!isAuth) return <Redirect to={'/login'}/>

		console.log('isAuth in RedirectComponent', isAuth.toString())
		return <Component {...restProps as T}/>
	}

	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
/// обязательно расширение tsx !!!!!
