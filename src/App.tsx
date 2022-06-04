import React from 'react'
import './App.css'
import {Navbar} from './components/Navbar/Navbar'
import {Route} from 'react-router-dom'
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";


const App: React.FC = () => {

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
// сделал merge ветки Lesson_43_by_Dimich_legacy_code в ветку main
export default App
