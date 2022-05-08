import React, {ChangeEvent,
//	useState
} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {
	ActionsTypes,
	//addPostAC, changeNewTextAC,
	//PostDataType,
	ProfilePageType
} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";



type MyPostPropsType = {
	//PostData: ProfilePageType
	//newText: string
	// addPost: (newPostMessage:string)=> void
	//changeTextareaTitle: (newText: string) => void
	//dispatch: (action: ActionsTypes) => void
	store: ReduxStoreType
}
export const MyPostsContainer = (props: MyPostPropsType) => {


//вынесем данные из компоненты в BLL в index.tsx
	// let PostData:PostDataType[] = [
	// 	{id:1, 	message: "It's my 2nd post", likesCount:5},
	// 	{id:2, 	message: "Hi, how are you now?", likesCount:7},
	// 	{id:3, 	message: "Where are you from?", likesCount:9},
	//


	//let newTitleRef = React.createRef<HTMLTextAreaElement>() //1й способ с помощью createRef
	//const [title, setTitle] = useState<string>(``) //2й способ с помощью useState

	function addPostHandler() {
		//props.addPost(props.newText)
		//props.dispatch({type:"ADD-POST", newPostMessage: props.newText})
		props.store.dispatch(addPostAC(props.store.getState().ProfilePage.newPostText))


		//console.log(`props.newText из state = `, props.newText)
		//console.log(`обновился список постов`, props.PostData.posts)
		//console.log(props.newText)
		//props.newText = ``
		// props.addPost(``)
		// console.log(`createRef`, newTitleRef.current?.value)
		// if (newTitleRef.current) {
		// 	props.addPost(newTitleRef.current.value)
		// }
		//console.log(`useState`, title)
		//props.addPost(title)
		//setTitle(``)
	}

	function newTextOnChangeHandler(newText2: string) {
		//console.log(e.currentTarget.value)
		//setTitle(e.currentTarget.value)
		//props.changeTextareaTitle(e.currentTarget.value)
		// props.dispatch(changeNewTextAC(props.newText))
		//let newText2 = e.currentTarget.value
		props.store.dispatch(changeNewTextAC(newText2))
		//console.log('props.PostData.newPostText заносим в state = ', props.PostData.newPostText)
	}

	// ]
	return (<MyPosts PostData={props.store.getState().ProfilePage}
					 newText={props.store.getState().ProfilePage.newPostText}
					 addPost={addPostHandler}
					 changeTextareaTitle={newTextOnChangeHandler} />)
}
