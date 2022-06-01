import React, {ChangeEvent,} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
// import {
// 	//ActionsTypes,
// 	//followAC, unFollowAC,
// 	//PostDataType,
// 	ProfilePageType
// } from "../../../redux/store";
//import {followAC, unFollowAC} from "../../../redux/profile-reducer";
import {MyPostsPropsType} from "./MyPostsContainer";


// type MyPostPropsType = {
// 	PostData: ProfilePageType
// 	newText: string
// 	addPost: (newPostMessage:string)=> void
// 	changeTextareaTitle: (newText: string) => void
// 	//dispatch: (action: ActionsTypes) => void
// }
export function MyPosts(props: MyPostsPropsType) {
	console.log(25, props.posts)
	console.log(26, props.newPostText)


//вынесем данные из компоненты в BLL в index.tsx
	// let PostData:PostDataType[] = [
	// 	{id:1, 	message: "It's my 2nd post", likesCount:5},
	// 	{id:2, 	message: "Hi, how are you now?", likesCount:7},
	// 	{id:3, 	message: "Where are you from?", likesCount:9},
	//


	//let newTitleRef = React.createRef<HTMLTextAreaElement>() //1й способ с помощью createRef
	//const [title, setTitle] = useState<string>(``) //2й способ с помощью useState

	function addPostHandler() {
		console.log(39)
		props.addPost()
		//props.dispatch({type:"ADD-POST", newPostMessage: props.newText})
		//props.dispatch(followAC(props.newText))
		// console.log(`props.newText из state = `, props.newText)
		// console.log(`обновился список постов`, props.PostData.posts)
		// console.log(props.newText)
		// //props.newText = ``
		// props.addPost(``)
		// console.log(`createRef`, newTitleRef.current?.value)
		// if (newTitleRef.current) {
		// 	props.addPost(newTitleRef.current.value)
		// }
		//console.log(`useState`, title)
		//props.addPost(title)
		//setTitle(``)
	}

	function newTextOnChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
		//debugger
		console.log(e.currentTarget.value)
		//setTitle(e.currentTarget.value)
		props.changeTextareaTitle(e.currentTarget.value)
		// props.dispatch(unFollowAC(props.newText))
		//let newText2 = e.currentTarget.value
		//props.dispatch(unFollowAC(newText2))
		//console.log('props.PostData.newPostText заносим в state = ', props.PostData.newPostText)
	}

	// ]

	function onKeyPressHandler(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === "Enter") {
			addPostHandler()
		}
	}

	return (
		<>
			<div className={s.myPosts}>
				My posts:
			</div>
			<div>
				{/*<textarea ref={newTitleRef} onChange={newTextOnChangeHandler} style={{width: 250}}/>*/}
				{/*<textarea onChange={newTextOnChangeHandler} value={props.ProfilePage.newPostText} style={{width: 250}}/>*/}
				<textarea onChange={newTextOnChangeHandler}
						  onKeyPress={onKeyPressHandler}
						  value={props.newPostText}
						  style={{width: 250}}/>
				{/*<textarea onChange={newTextOnChangeHandler}  /placeholder={'Please, enter the post text'} value={title}  style={{width: 250}}/>*/}

				<div>
					<button onClick={addPostHandler}>Add post</button>
				</div>

			</div>
			<div className={s.posts}>
				{/*{[<Post message={"It's my first post"} likesCount={10} id={'1'} key={1}/>,*/}
				{/*	<Post message={'Hi, how are you?'} likesCount={11} id={'2'} key={2}/>]}*/}

				{props.posts.map(el => <Post message={el.message}
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
};
