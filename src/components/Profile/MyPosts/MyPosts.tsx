import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, Form, Formik} from 'formik';


export function MyPosts(props: MyPostsPropsType) {
	console.log(25, props.posts)

	return (
		<>
			<div className={s.myPosts}>
				My posts:
			</div>
			<div>
				<Formik initialValues={{myPostText: ''}}
						onSubmit={(values) => {
							console.log(values)
							props.addPost(values.myPostText)
						}}>

					<Form>
						<Field name={'myPostText'} style={{width: 250}} component="textarea" rows="4"/>
						<button type="submit">
							Add post
						</button>
					</Form>
				</Formik>
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
}
