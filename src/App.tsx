import React from 'react'
import './App.css'

import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {News} from "./components/News/News";
import {
	//RootStateType,
	StoreType
} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";


type AppPropsType = {
	// state: RootStateType
	// addPost: (newPostMessage:string)=> void
	// changeTextareaTitle: (newText: string) =>void
	//store: StoreType // ДЛЯ store.ts
}

const App: React.FC<AppPropsType> = (props) => {

	//const state = props.store.getState()

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
					<Route path={'/dialogs'} render={() => <Dialogs //DialogsData={state.DialogsPage.dialogs}
																	// MessagesData={state.DialogsPage}
																	//MessagesData={DialogsPage}
																	//dispatch={props.store.dispatch.bind(props.store)}
					/>}/>

					{/*<Route path={'/profile'} component={Profile}/>*/}
					{/*<Route path={'/profile'} component={()=> <Profile PostData={props.PostData}/>}/>*/}
					{/*<Route path={'/profile'} render={()=> <Profile PostData={props.PostData}/>}/>*/}

					<Route path={'/profile'} render={() =>
						<Profile //PostData={state.ProfilePage}
							// addPost={props.store.addPost.bind(props.store)}
							//changeTextareaTitle={props.store.changeTextareaTitle.bind(props.store)}
								 //dispatch={props.store.dispatch.bind(props.store)
									 //bind(props.store) ДЛЯ ПРИВЯЗКИ КОНТЕКСТА ВЫЗОВА: this = props.store
									 // тк без bind(props.store): this ={PostData: {…}, dispatch: ƒ}
								// }

						/>}/>

					<Route path={'/news'} component={News}/>
				</div>
			</div>
		</>
	)
}

export default App
