import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export type PostDataType = {
	id:number
	message: string
	likesCount:number
}
export const MyPosts = () => {


	let PostData:PostDataType[] = [
		{id:1, 	message: "It's my 2nd post", likesCount:5},
		{id:2, 	message: "Hi, how are you now?", likesCount:7},
		{id:3, 	message: "Where are you from?", likesCount:9},

	]
	return (
		<>
		<div className={s.myPosts}>
			My posts:
		</div>
		<div>
			<textarea placeholder={'Please, enter the post text'} style={{width: 250}}/>
			<div>
				<button>Add post</button>
			</div>

		</div>
		<div className={s.posts}>
			{[<Post message={"It's my first post"} likesCount={10} id={1} key={1}/>,
				<Post message={'Hi, how are you?'} likesCount={11} id={2} key={2}/>]}

			{PostData.map(el=> <Post message={el.message}
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
