import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {TextArea} from "../../../common/TextArea";


const maxLength10 = maxLengthCreator(10) // необх вынести за пределы функц MyPostForm

// function maxLength10(){ - // ТАК maxLength10 РАБОТАТЬ НЕ БУДЕТ  !!!
// 	maxLengthCreator(10)
// }

export const MyPostForm = (props: InjectedFormProps) => {
	const {handleSubmit} = props

	return (
		<form onSubmit={handleSubmit}>
			<Field component={TextArea}
				//component={'textarea'}
				   name={'myTextAreaPost'}
				   placeholder={'your post'}
				   validate={[requiredField, maxLength10]}
			/>
			<div>
				<button>Add post</button>
			</div>
		</form>
	);
};

