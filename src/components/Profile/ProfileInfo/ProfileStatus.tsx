import React, {useState} from 'react';

type ProfileStatusProps = {
	status: string //as ProfileStatusType // | null
}

export const ProfileStatus = (props: ProfileStatusProps) => {
	const [editmode, setEditMode] = useState<boolean>(false)
	const [textForStatus, setTextForStatus] = useState<string>(props.status)

	function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.currentTarget.value) {
			setTextForStatus(e.currentTarget.value )
		}
	}

	console.log(textForStatus)

	function onClickHandle() {
		console.log(`before`, editmode) // false
		setEditMode(true)
		console.log(`after`, editmode) // и здесь false, т.к. useState асинхронный !
	}
	console.log(`out`, editmode) // и здесь true, т.к. useState асинхронный !

	function onEnterKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			setEditMode(false)
		}
	}

	function onBlurHandle() {
		setEditMode(false)
		console.log(`onBlurHandle`)
	}


	return (
		<div>
			{!editmode && <h3 onClick={onClickHandle}>Мой статус: {textForStatus}</h3>}
			{editmode && <div>{<input value={textForStatus}
									  autoFocus={true} // добавляет курсор в конец строки input
									  onChange={onChangeHandle}
									  onKeyPress={onEnterKeyPress}
									  onBlur={onBlurHandle}
			/>} </div>}
		</div>
	);
};

