import React, {ChangeEvent,
//	useState
} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {
	ActionsTypes, addPostAC, changeNewTextAC,
	//PostDataType,
	ProfilePageType
} from "../../../redux/state";



type MyPostPropsType = {
	PostData: ProfilePageType
	newText: string
	// addPost: (newPostMessage:string)=> void
	changeTextareaTitle: (newText: string) => void
	dispatch: (action: ActionsTypes) => void
}
export const MyPosts = (props: MyPostPropsType) => {


//вынесем данные из компоненты в BLL в index.tsx
	// let PostData:PostDataType[] = [
	// 	{id:1, 	message: "It's my 2nd post", likesCount:5},
	// 	{id:2, 	message: "Hi, how are you now?", likesCount:7},
	// 	{id:3, 	message: "Where are you from?", likesCount:9},
	//


	//let newTitleRef = React.createRef<HTMLTextAreaElement>() //1й способ с помощью createRef
	//const [title, setTitle] = useState<string>(``) //2й способ с помощью useState

	function addHandlePost() {
		//props.addPost(props.newText)
		//props.dispatch({type:"ADD-POST", newPostMessage: props.newText})
		props.dispatch(addPostAC(props.newText))

		console.log(`props.PostData.newPostText из state = `, props.PostData.newPostText)
		console.log(`обновился список постов`, props.PostData.posts)
		console.log(props.newText)
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
		let newText = e.currentTarget.value
		props.dispatch(changeNewTextAC(newText))
		console.log('props.PostData.newPostText заносим в state = ', props.PostData.newPostText)
	}

	// ]
	return (
		<>
		<div className={s.myPosts}>
			My posts:
		</div>
		<div>
			{/*<textarea ref={newTitleRef} onChange={newTextOnChangeHandler} style={{width: 250}}/>*/}
			<textarea onChange={newTextOnChangeHandler} value={props.newText} style={{width: 250}}/>
			{/*<textarea onChange={newTextOnChangeHandler}  /placeholder={'Please, enter the post text'} value={title}  style={{width: 250}}/>*/}

			<div>
				<button onClick={addHandlePost}>Add post</button>
			</div>

		</div>
		<div className={s.posts}>
			{/*{[<Post message={"It's my first post"} likesCount={10} id={'1'} key={1}/>,*/}
			{/*	<Post message={'Hi, how are you?'} likesCount={11} id={'2'} key={2}/>]}*/}

			{props.PostData.posts.map(el=> <Post message={el.message}
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
