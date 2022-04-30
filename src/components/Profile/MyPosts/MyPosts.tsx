import React, {ChangeEvent, useState} from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostDataType} from "../../../redux/state";


type MyPostPropsType = {
	PostData: PostDataType[]
	addPost: (newPostMessage:string)=> void
}
export const MyPosts = (props: MyPostPropsType) => {

//вынесем данные из компоненты в BLL в index.tsx
	// let PostData:PostDataType[] = [
	// 	{id:1, 	message: "It's my 2nd post", likesCount:5},
	// 	{id:2, 	message: "Hi, how are you now?", likesCount:7},
	// 	{id:3, 	message: "Where are you from?", likesCount:9},
	//


	//let newTitleRef = React.createRef<HTMLTextAreaElement>() //1й способ с помощью createRef
	const [title, setTitle] = useState<string>(``) //2й способ с помощью useState

	function addHandlePost() {
	//	console.log(`createRef`, newTitleRef.current?.value)
		console.log(`useState`, title)
		props.addPost(title)
		console.log(props.PostData)
	}

	function onchangeHandle(e:ChangeEvent<HTMLTextAreaElement>) {
		console.log(e.currentTarget.value)
		setTitle(e.currentTarget.value)
	}

	// ]
	return (
		<>
		<div className={s.myPosts}>
			My posts:
		</div>
		<div>
			{/*<textarea ref={newTitleRef} onChange={onchangeHandle} style={{width: 250}}/>*/}
			<textarea onChange={onchangeHandle}
					  placeholder={'Please, enter the post text'}
					  style={{width: 250}}/>

			<div>
				<button onClick={addHandlePost}>Add post</button>
			</div>

		</div>
		<div className={s.posts}>
			{[<Post message={"It's my first post"} likesCount={10} id={'1'} key={1}/>,
				<Post message={'Hi, how are you?'} likesCount={11} id={'2'} key={2}/>]}

			{props.PostData.map(el=> <Post message={el.message}
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
