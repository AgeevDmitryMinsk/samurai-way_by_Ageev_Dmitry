import React, {useEffect, useState} from 'react';

type ProfileStatusProps = {
	status: string //as ProfileStatusType // | null
	updateStatus:(status: string) => void
}

export const ProfileStatus = (props: ProfileStatusProps) => {
	const [editmode, setEditMode] = useState<boolean>(false)
	const [textForStatus, setTextForStatus] = useState<string>(props.status)
	// useEffect(()=>{
	// 	setTextForStatus(props.status)
	// },[props.status])

	//debugger

	function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {

			setTextForStatus(e.currentTarget.value )

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
		props.updateStatus(textForStatus)
	}


	return (
		<div>
			{!editmode && <div onClick={onClickHandle} style={{color:"purple", cursor:"pointer"}}>Мой статус:{textForStatus}</div>}
			{editmode && <div>{<input value={textForStatus}
									  autoFocus={true} // добавляет курсор в конец строки input
									  onChange={onChangeHandle}
									 // onKeyPress={onEnterKeyPress}
									  onBlur={onBlurHandle}
			/>} </div>}
		</div>
	);
};

