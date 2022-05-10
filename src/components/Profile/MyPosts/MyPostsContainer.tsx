// import React, {
// 	ChangeEvent,
// //	useState
// } from 'react'
// import s from './MyPosts.module.css'
// import {Post} from './Post/Post'
// import {
// 	ActionsTypes,
// 	//addPostAC, changeNewTextAC,
// 	//PostDataType,
// 	ProfilePageType
// } from "../../../redux/store";
// import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
// import {MyPosts} from "./MyPosts";
// import {StoreContext} from "../../../StoreContext";
// //import {ReduxStoreType} from "../../../redux/redux-store";
//
//
// type MyPostPropsType = {
// 	//PostData: ProfilePageType
// 	//newText: string
// 	// addPost: (newPostMessage:string)=> void
// 	//changeTextareaTitle: (newText: string) => void
// 	//dispatch: (action: ActionsTypes) => void
// 	//store: ReduxStoreType
// }
// export const MyPostsContainer = (props: MyPostPropsType) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				store => {
// 					let state = store.getState().ProfilePage
//
// 					function addPostHandler() {
// 						//props.addPost(props.newText)
// 						//props.dispatch({type:"ADD-POST", newPostMessage: props.newText})
// 						// props.store.dispatch(addPostAC(props.store.getState().ProfilePage.newPostText))
// 						store.dispatch(addPostAC(store.getState().ProfilePage.newPostText))
//
//
// 						//console.log(`props.newText из state = `, props.newText)
// 						//console.log(`обновился список постов`, props.PostData.posts)
// 						//console.log(props.newText)
// 						//props.newText = ``
// 						// props.addPost(``)
// 						// console.log(`createRef`, newTitleRef.current?.value)
// 						// if (newTitleRef.current) {
// 						// 	props.addPost(newTitleRef.current.value)
// 						// }
// 						//console.log(`useState`, title)
// 						//props.addPost(title)
// 						//setTitle(``)
// 					}
//
// 					function newTextOnChangeHandler(newText2: string) {
// 						//console.log(e.currentTarget.value)
// 						//setTitle(e.currentTarget.value)
// 						//props.changeTextareaTitle(e.currentTarget.value)
// 						// props.dispatch(changeNewTextAC(props.newText))
// 						//let newText2 = e.currentTarget.value
// 						// props.store.dispatch(changeNewTextAC(newText2))
// 						store.dispatch(changeNewTextAC(newText2))
// 						//console.log('props.PostData.newPostText заносим в state = ', props.PostData.newPostText)
// 					}
//
// 					// ]
// 					return (<MyPosts PostData={	// props.store.getState().ProfilePage}
// 									store.getState().ProfilePage}
// 									 // newText={props.store.getState().ProfilePage.newPostText}
// 									 newText={store.getState().ProfilePage.newPostText}
// 									 addPost={addPostHandler}
// 									 changeTextareaTitle={newTextOnChangeHandler}/>)
//
//
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	)
//
//
// }


import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {addPostAC, changeNewTextAC, InitialStateProfilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";


type mapStateToPropsType = {
	ProfilePage: InitialStateProfilePageType
}

type mapDispatchToPropsType = {
	addPost: () => void
	changeTextareaTitle: (newText: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

function mapStateToProps(state: AppRootStateType): mapStateToPropsType {
	return {
		ProfilePage: state.ProfilePage
	}
}

function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
	return {
		addPost: () => {
			dispatch(addPostAC())
		},
		changeTextareaTitle: (newText: string) => {
			//debugger
			dispatch(changeNewTextAC(newText))

		}
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
