import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, Formik} from 'formik';

export const Dialogs = (props: DialogsPropsType) => {


	//console.log("props.isAuth = ", props.isAuth) // true если withCredentials: true, и залогинен на https://social-network.samuraijs.com/api/1.0/
	//if (props.isAuth === false) return <Redirect to={"/login"}/>
	//isAuth: state.auth.isAuth - не нужно пробрасывать в Dialogs
	// при использовании withAuthRedirect
	//console.log(props.dialogs)
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
						onSubmit={(values) => {
							console.log(values.newDialogMessage)
							props.addMessage(values.newDialogMessage)
						}
						}>

					<Form>
						<Field name={'newDialogMessage'} type={'input'} />
						<button type="submit">
							send message
						</button>
					</Form>

				</Formik>
			</div>

		</div>
	)
}

//http://localhost:3000/dialogs

