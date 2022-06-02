import React from 'react';
import s from './TextArea.module.css'

export const TextArea = (props: any) => {
	//debugger
	const {input, meta, ...Restprops} = props
	const isError = meta.touched && meta.error

	return (
		<div className={`${s.formControl}` + ` ` + (isError ? `${s.error}` : ``)}>

			<div>
				<textarea {...input} {...Restprops} />
			</div>
			{isError && <span> error: {meta.error}</span>}
		</div>
	);
};


