import React from 'react';
import s from "./TextArea.module.css";

export const InputArea = (props: any) => {
	const {input, meta, ...restPprops} = props
	const isError = meta.touched && meta.error

	return (
		<div className={`${s.formControl} ` + (isError ? `${s.error}` : ``)}>

			<div>
				<input {...input} {...restPprops} className={`${s.formControlInput} `}/>
			</div>
			{isError && <span> error: {meta.error}</span>}
			{!isError && <span> &nbsp; </span>}
		</div>
	);
};


