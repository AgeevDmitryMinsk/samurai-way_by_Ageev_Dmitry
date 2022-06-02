import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik} from 'formik';
import * as yup from "yup";

export const Dialogs = (props: DialogsPropsType) => {


	//console.log("props.isAuth = ", props.isAuth) // true если withCredentials: true, и залогинен на https://social-network.samuraijs.com/api/1.0/
	//if (props.isAuth === false) return <Redirect to={"/login"}/>
	//isAuth: state.auth.isAuth - не нужно пробрасывать в Dialogs
	// при использовании withAuthRedirect
	//console.log(props.dialogs)

	const validationSchema = yup.object().shape({
		newDialogMessage: yup.string().typeError(`должно быть строкой`).required(`поле обязательно`),
	})

	return (

		<div className={s.dialogs}>
			Dialogs:
			<div>

				{props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} photo={el.photo}/>)}

			</div>
			<div>
				{props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)}

			</div>
			Please, enter new message:
			<div>
				<Formik initialValues={{newDialogMessage: ''}}
						validateOnBlur
						validationSchema={validationSchema}
						onSubmit={(values, {resetForm}) => {
							console.log(values.newDialogMessage)
							props.addMessage(values.newDialogMessage)
							resetForm()
						}
						}>
					{({
						  values,
						  errors,
						  touched,
						  handleChange,
						  handleBlur,
						  isValid,
						  handleSubmit,
						  dirty
					  }) => (<Form>
						<Field name={'newDialogMessage'}
							   type={'input'}
							   className={`${s.input}` + ` ` + (touched.newDialogMessage && errors.newDialogMessage ? `${s.error2}` : ``)}
							   placeholder={"your message "}
							   onChange={handleChange}
							   onBlur={handleBlur}
							   value={values.newDialogMessage}
						/>
						{touched.newDialogMessage && errors.newDialogMessage &&
                            <span className={`${s.error}`}> {errors.newDialogMessage}</span>}
						{!errors.newDialogMessage && <span>    &nbsp; </span>}
						{!touched.newDialogMessage && <span>    &nbsp; </span>}
						<div>
							<button type="submit"
									disabled={!isValid || !dirty}>
								send message
							</button>
						</div>

					</Form>)}

				</Formik>
			</div>

		</div>
	)
}

//http://localhost:3000/dialogs

