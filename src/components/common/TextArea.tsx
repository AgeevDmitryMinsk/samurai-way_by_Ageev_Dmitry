import React from 'react';
import s from './TextArea.module.css'

export const TextArea = (props: any) => {
	//debugger
	const {input, meta, ...restPprops} = props
	const isError = meta.touched && meta.error

	return (
		<div className={`${s.formControl}` + ` ` + (isError ? `${s.error}` : ``)}>

			<div>
				<textarea {...input} {...restPprops} />
			</div>
			{isError && <span> error: {meta.error}</span>}
			{!isError && <span> &nbsp; </span>}
		</div>
	);
};


