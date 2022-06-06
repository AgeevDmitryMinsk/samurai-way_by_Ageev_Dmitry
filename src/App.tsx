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
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {getAuthMeThunkCreator} from "./redux/auth-reducer";


const App: React.FC = () => {

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(initializeAppThunkCreator())
		//dispatch(getAuthMeThunkCreator())
		console.log(`hello form useEffect APP`)
	},[])

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
					<Route path={'/login'} render={()=> <LoginContainer/>}/>
				</div>

			</div>
		</>
	)
}


export default compose<React.ComponentType>(withRouter, connect(null,
	{
		initializeAppThunkCreator
	}))(App);


