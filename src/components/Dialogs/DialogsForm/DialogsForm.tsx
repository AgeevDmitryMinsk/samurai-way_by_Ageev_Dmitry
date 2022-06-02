import React from 'react';
import {Field, InjectedFormProps} from "redux-form";

import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {InputArea} from "../../common/InputArea";

const maxLength15 = maxLengthCreator(15) // необх вынести за пределы функц MyPostForm
												// иначе будет зацикливание функции DialogsForm

export const DialogsForm = (props: InjectedFormProps) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={InputArea}
				//component={'input'}
				   name={'newMessage'}
				   placeholder={'your dialog message'}
				   validate={[requiredField, maxLength15]}
			/>

			<button>send dialog message</button>

		</form>
	);
};

