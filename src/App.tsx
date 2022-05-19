import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
//import {Profile} from './components/Profile/Profile'
import {Route} from 'react-router-dom'
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

// type AppPropsType = {
// 	// state: RootStateType
// 	// addPost: (newPostMessage:string)=> void
// 	// changeTextareaTitle: (newText: string) =>void
// 	//store: StoreType
// 	//store: ReduxStoreType
// }

const App: React.FC = () => {

	//const state = props.store.getState()

	return (
		<>
			<div className="App">Hello, samurai! Let's go!</div>
			<div className={'app-wrapper'}>
				<Header/>
				<Navbar/>

				<div className={'app-wrapper__content'}>
					<>
						{/*<Route path={'/profile'} component={Profile}/>*/}
						{/*<Route path={'/profile'} component={()=> <Profile PostData={props.PostData}/>}/>*/}
						{/*<Route path={'/profile'} render={()=> <Profile PostData={props.PostData}/>}/>*/}
					</>
					{/*<Route path={'/profile'} render={() =><Profile/>}/>*/}
					{/*<Route path={'/profile/'} render={() =><ProfileContainer/>}/>*/}
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<>
						{/*//store={props.store}*/}
						{/*//PostData={state.ProfilePage}*/}
						{/*// addPost={props.store.addPost.bind(props.store)}*/}
						{/*//changeTextareaTitle={props.store.changeTextareaTitle.bind(props.store)}*/}
						{/*//dispatch={props.store.dispatch//.bind(props.store)*/}
						{/*//bind(props.store) ДЛЯ ПРИВЯЗКИ КОНТЕКСТА ВЫЗОВА: this = props.store*/}
						{/*// тк без bind(props.store): this ={PostData: {…}, dispatch: ƒ}*/}
						{/*<Route path={'/'} component={Profile}/>*/}
						{/*<Route path={'/dialogs'} component={Dialogs}/>*/}
						{/*<Route path={'/dialogs'} render={()=> <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />}/>*/}
					</>
					<Route path={'/dialogs'} render={() => <DialogsContainer
						//store={props.store}
						//DialogsData={state.DialogsPage.dialogs}
						//MessagesData={state.DialogsPage}
						//dispatch={props.store.dispatch
						//	.bind(props.store)
					/>}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
				</div>
			</div>
		</>
	)
}
// сделал merge ветки Lesson_43_by_Dimich_legacy_code в ветку main
export default App
