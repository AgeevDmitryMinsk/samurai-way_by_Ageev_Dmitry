import React from 'react';
import {Field, InjectedFormProps} from "redux-form";

export const MyPostForm = (props: InjectedFormProps) => {
	const {handleSubmit} = props
	return (
		<form onSubmit={handleSubmit}>
			<Field component={'textarea'}
				   name={'myTextAreaPost'}
				   placeholder={'your post'}
				   style={{width: 250}}
				// onChange={newTextOnChangeHandler}
				// 	  onKeyPress={onKeyPressHandler}
				// 	  value={props.newPostText}
			/>
			{/*<textarea onChange={newTextOnChangeHandler}  /placeholder={'Please, enter the post text'} value={title}  style={{width: 250}}/>*/}

			<div>
				<button
					// onClick={addPostHandler}
				>Add post
				</button>
			</div>
		</form>
	);
};

