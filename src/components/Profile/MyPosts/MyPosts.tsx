import React, {ChangeEvent,
//	useState
} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {
	ActionsTypes, DialogsPageType,
	//addPostAC, changeNewTextAC,
	//PostDataType,
	ProfilePageType
} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";



type MyPostPropsType = {
	//PostData: ProfilePageType
	//newText: string

	// addPost: (newPostMessage:string)=> void
	//changeTextareaTitle: (newText: string) => void

	//dispatch: (action: ActionsTypes) => void
}
export const MyPosts = (props: MyPostPropsType) => {

	let ProfilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.ProfilePage)
	let DialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.DialogsPage)
	const dispatch = useDispatch()

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
		//let action = addPostAC(props.newText)
		let action = addPostAC(ProfilePage.newPostText)
		// props.dispatch(action)
		dispatch(action)

		//console.log(`props.newText из state = `, props.newText)
		console.log(`ProfilePage.newPostText из state = `, ProfilePage.newPostText)
		// console.log(`обновился список постов`, props.PostData.posts)
		console.log(`обновился список постов`, ProfilePage.posts)
		// console.log(props.newText)
		console.log(ProfilePage.newPostText)
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

	function newTextOnChangeHandler(e:ChangeEvent<HTMLTextAreaElement>) {
		console.log(e.currentTarget.value)
		//setTitle(e.currentTarget.value)
		//props.changeTextareaTitle(e.currentTarget.value)
		// props.dispatch(changeNewTextAC(props.newText))
		let newText2 = e.currentTarget.value
		let action = changeNewTextAC(newText2)
		// props.dispatch(action)
		dispatch(action)
		// console.log('props.PostData.newPostText заносим в state = ', props.PostData.newPostText)
		console.log('props.PostData.newPostText заносим в state = ', ProfilePage.newPostText)
	}

	// ]
	return (
		<>
		<div className={s.myPosts}>
			My posts:
		</div>
		<div>
			{/*<textarea ref={newTitleRef} onChange={newTextOnChangeHandler} style={{width: 250}}/>*/}
			{/*<textarea onChange={newTextOnChangeHandler} value={props.newText} style={{width: 250}}/>*/}
			<textarea onChange={newTextOnChangeHandler} value={ProfilePage.newPostText} style={{width: 250}}/>
			{/*<textarea onChange={newTextOnChangeHandler}  /placeholder={'Please, enter the post text'} value={title}  style={{width: 250}}/>*/}

			<div>
				<button onClick={addPostHandler}>Add post</button>
			</div>

		</div>
		<div className={s.posts}>
			{/*{[<Post message={"It's my first post"} likesCount={10} id={'1'} key={1}/>,*/}
			{/*	<Post message={'Hi, how are you?'} likesCount={11} id={'2'} key={2}/>]}*/}

			{/*{props.PostData.posts.map(el=> <Post message={el.message}*/}
			{ProfilePage.posts.map(el=> <Post message={el.message}
									likesCount={el.likesCount}
									id={el.id}
									key={el.id}
			/>)}

			{/*<Post message={PostData[0].message}*/}
			{/*	  likesCount={PostData[0].likesCount}*/}
			{/*	  id={PostData[0].id} />*/}

		</div>
</>
)
}
