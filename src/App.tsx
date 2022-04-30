import React from 'react'
import './App.css'

import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {News} from "./components/News/News";
import {DialogItemType, MessageType, PostDataType} from "./index";


type AppPropsType = {
	PostData: PostDataType[]
	DialogsData: DialogItemType[]
	MessagesData: MessageType[]
}

function App(props: AppPropsType) {
	console.log(props.PostData)
	return (
		<>
			<BrowserRouter>
				{/*http://localhost:3000/*/}
				{/*http://localhost:3000/profile*/}
				{/*http://localhost:3000/dialogs*/}
			{/*<HashRouter>*/}
				{/*http://localhost:3000/profile#/profile*/}
				{/*http://localhost:3000/profile#/dialogs*/}
				<div className="App">Hello, samurai! Let's go!</div>
				<div className={'app-wrapper'}>
					<Header/>
					<Navbar/>
					<div className={'app-wrapper__content'}>

						{/*<Route path={'/'} component={Profile}/>*/}
						{/*<Route path={'/dialogs'} component={Dialogs}/>*/}
						<Route path={'/dialogs'} render={()=> <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />}/>

						{/*<Route path={'/profile'} component={Profile}/>*/}
						{/*<Route path={'/profile'} component={()=> <Profile PostData={props.PostData}/>}/>*/}
						<Route path={'/profile'} render={()=> <Profile PostData={props.PostData}/>}/>

						<Route path={'/news'} component={News}/>
					</div>
				</div>
			{/*</HashRouter>*/}
			</BrowserRouter>
		</>
	)
}

export default App
