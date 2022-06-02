import React from 'react'
import s from './myPosts.module.css'
import {Post} from './Post/Post'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, Form, Formik} from 'formik';
import * as yup from "yup";


export function MyPosts(props: MyPostsPropsType) {
	console.log(25, props.posts)

	const validationSchema = yup.object().shape({
		myPostText: yup.string().typeError(`должно быть строкой`).required(`поле обязательно`),
	})

	return (
		<>
			<div className={s.myPosts}>
				My posts:
			</div>
			<div>
				<Formik initialValues={{myPostText: ''}}
						validateOnBlur
						validationSchema={validationSchema}
						onSubmit={(values, {resetForm}) => {
							console.log(values)
							props.addPost(values.myPostText)
							resetForm()
						}}>

					{({
						  values,
						  errors,
						  touched,
						  handleChange,
						  handleBlur,
						  isValid,
						  handleSubmit,
						  dirty
					  }) => (
						<Form className={`${s.form}`}>

							<Field name={'myPostText'}
								   style={{width: 250}}
								   component="textarea" rows="4"
								   className={`${s.input}` + ` `+ (touched.myPostText && errors.myPostText ? `${s.error2}` : ``) }
								   placeholder={"your post"}
								   onChange={handleChange}
								   onBlur={handleBlur}
								   value={values.myPostText}
							/>
							{touched.myPostText && errors.myPostText &&
                                <span className={`${s.error}`}> {errors.myPostText}</span>}
							{!errors.myPostText &&<span>    &nbsp; </span>}
							{!touched.myPostText &&<span>    &nbsp; </span>}

							<div>
								<button type="submit"
										disabled={!isValid || !dirty}
								>Add post
								</button>
							</div>

						</Form>


					)}

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
