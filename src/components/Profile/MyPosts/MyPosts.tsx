import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {MyPostsPropsType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {MyPostForm} from "./MyPostForm/MyPostForm";


// @ts-ignore
window.props = []

export const MyPosts = React.memo( (props: MyPostsPropsType) => {
	// console.log(25, this.props.posts)
	console.log(`RENDER MyPosts YO`) // 3 раза
	console.log("MY POST PROPS",props)

	const onSubmitHandle = (formData: any,) => {

		console.log(`formData from MyPostReduxForm =`, formData.myTextAreaPost)
		props.addPost(formData.myTextAreaPost)
		formData.myTextAreaPost = ''

	}

	return (
		<>
			<div className={s.myPosts}>
				My posts:
			</div>

			<div>
				<MyPostReduxForm onSubmit={onSubmitHandle}/>
			</div>

			<div className={s.posts}>

				{props.posts.map(el => <Post message={el.message}
											 likesCount={el.likesCount}
											 id={el.id}
											 key={el.id}
				/>)}
			</div>
		</>
	)
})

const MyPostReduxForm = reduxForm({form: 'myPost2022'})(MyPostForm)
