import React from 'react'
import './App.css'

import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {News} from "./components/News/News";
import {changeTextareaTitle, StateType} from "./redux/state";


type AppPropsType = {
	state: StateType
	addPost: (newPostMessage:string)=> void
	changeTextareaTitle: (newText: string) =>void

}

const App: React.FC<AppPropsType> = (props) => {
	//console.log(props.state.DialogsPage.dialogs)
	return (
		<>
			<div className="App">Hello, samurai! Let's go!</div>
			<div className={'app-wrapper'}>
				<Header/>
				<Navbar/>
				<div className={'app-wrapper__content'}>

					{/*<Route path={'/'} component={Profile}/>*/}
					{/*<Route path={'/dialogs'} component={Dialogs}/>*/}
					{/*<Route path={'/dialogs'} render={()=> <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />}/>*/}
					<Route path={'/dialogs'} render={() => <Dialogs DialogsData={props.state.DialogsPage.dialogs}
																	MessagesData={props.state.DialogsPage.messages}/>}/>

					{/*<Route path={'/profile'} component={Profile}/>*/}
					{/*<Route path={'/profile'} component={()=> <Profile PostData={props.PostData}/>}/>*/}
					{/*<Route path={'/profile'} render={()=> <Profile PostData={props.PostData}/>}/>*/}
					<Route path={'/profile'} render={() => <Profile PostData={props.state.ProfilePage}
																	addPost={props.addPost}
																	changeTextareaTitle={props.changeTextareaTitle}
					/>}/>

					<Route path={'/news'} component={News}/>
				</div>
			</div>
		</>
	)
}

export default App
