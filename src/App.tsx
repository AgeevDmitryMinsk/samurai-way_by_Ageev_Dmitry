import React, {useEffect} from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Route, withRouter} from 'react-router-dom'
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect, useDispatch} from "react-redux";
import {compose} from "redux";
import {InitialAppStatePageType, initializeAppThunkCreator} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader";
import {getInitialized} from "./redux/app-selectors";


const App: React.FC = (props: any) => {

	const dispatch = useDispatch()

	useEffect(() => {
		console.log(`1st console.log`)
		dispatch(initializeAppThunkCreator())
		//dispatch(getAuthMeThunkCreator())
		console.log(`hello form useEffect APP`)
	}, [dispatch])

	console.log(`APP props.initialized --->`, props.initialized)

	if (!props.initialized) {
		console.log(`APP props.initialized inside IF --->`, props.initialized)
		return <Preloader/>
	} else
		return (
		<>
			<div className="App">Hello, samurai! Let's go!</div>
			<div className={'app-wrapper'}>
				<HeaderContainer/>
				<Navbar/>

				<div className={'app-wrapper__content'}>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
					<Route path={'/login'} render={() => <LoginContainer/>}/>
				</div>

			</div>
		</>
	)
}

type mapStateToPropsType = InitialAppStatePageType

// const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
// 	return {
// 		initialized: state.app.initialized
// 	}
// }
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return {
		initialized: getInitialized(state) // было state.app.initialized
	}
}


export const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps,
	{
		initializeAppThunkCreator
	}))(App);
