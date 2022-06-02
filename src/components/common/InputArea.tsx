import React from 'react';
import s from "./TextArea.module.css";

export const InputArea = (props: any) => {
	const {input, meta, ...Restprops} = props
	const isError = meta.touched && meta.error

	return (
		<div className={`${s.formControl}` + ` ` + (isError ? `${s.error}` : ``)}>

			<div>
				<input {...input} {...Restprops} style={{width: 180}}/>
			</div>
			{isError && <span> error: {meta.error}</span>}
		</div>
	);
};


