import {Field, Form, Formik} from 'formik';
import React from 'react';
import * as yup from 'yup'
import s from './styleLogin.module.css'


export const LoginForm = () => {


	const validationSchema = yup.object().shape({
		Login: yup.string().typeError(`должно быть строкой`).required(`поле обязательно`),
		Password: yup.string().typeError(`должно быть строкой`).required(`поле обязательно`)
	})

	return (
		<>
			<Formik initialValues={{Login: '', Password: '', rememberMe: false}}
					validateOnBlur
					onSubmit={(values, {resetForm}) => {
						console.log(values)
						resetForm() // сбрасываю значения полей после нажатия кнопки
					}}
					validationSchema={validationSchema}
			>
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
						<div>
							<label htmlFor={`Login`}> Login</label> <br/>

							<Field className={`${s.input}` + ` `+ (touched.Login && errors.Login ? `${s.error2}` : ``)}

								   name={'Login'}
								   placeholder={"Login"}
								   onChange={handleChange}
								   onBlur={handleBlur}
								   value={values.Login}/>
						</div>
						{touched.Login && errors.Login && <span className={`${s.error}`}> {errors.Login}</span>}
						{!errors.Login &&<span>    &nbsp; </span>}

						<div>
							<label htmlFor={`Login`}> Password</label> <br/>
							<Field name={'Password'}
								   placeholder={"Password"}
								   className={`${s.input}` + ` `+ (touched.Password && errors.Password ? `${s.error2}` : ``)}
								   onChange={handleChange}
								   onBlur={handleBlur}
								   value={values.Password}
								   type={'password'}
							/>
						</div>
						{touched.Password && errors.Password &&
                            <span className={`${s.error}`}> {errors.Password}</span>}
						{!errors.Password &&<span>    &nbsp; </span>}
						{!touched.Password &&<span>    &nbsp; </span>}

						<div>
							<input type={"checkbox"} name={'rememberMe'}
								   onChange={handleChange} onBlur={handleBlur}
								   value={values.rememberMe.toString()}/> remember me
						</div>
						<div>
							<button type="submit"
									disabled={!isValid || !dirty}
								// onClick={handleSubmit}

							>Log In
							</button>

						</div>

					</Form>
				)}


			</Formik>

		</>

	);
};

