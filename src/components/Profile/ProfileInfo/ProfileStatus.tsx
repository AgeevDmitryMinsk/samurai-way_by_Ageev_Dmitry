import React, {useEffect, useState} from 'react';
import {AuthDataType} from "../../../redux/auth-reducer";
import {UsersProfileResponseType} from "../ProfileContainer";

type ProfileStatusProps = {
	status: string //as ProfileStatusType // | null
	updateProfileStatusThunkCreator: (status: string) => void
	//isAuth: boolean
	data: AuthDataType
	profile: UsersProfileResponseType | null
}

export const ProfileStatus = (props: ProfileStatusProps) => {
	const [editmode, setEditMode] = useState<boolean>(false)
	const [textForStatus, setTextForStatus] = useState<string>(props.status)

	useEffect(() => {  // для переотрисовки, если обновились пропсы !!!!
		console.log("useEffect")
		setTextForStatus(props.status)
	}, [props.status])

	//console.log(`props.isAuth =`,  props.isAuth)// говорит о том залогинился ли ты на сайте?
	//console.log(`props.data.id =`, props.data.id) // props.data.id = 22100
	//console.log(`props.profile?.userId =`, props.profile?.userId) // props.profile?.userId = 22100 если в Users выбрал себя, или
	//props.profile?.userId = 2 если в Users выбрал Димыча

	function onChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {

		setTextForStatus(e.currentTarget.value) // Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)

	}

	//console.log(textForStatus) // статус того кого выбрал в Users: Делай то, что нравится — и в твоей жизни не будет ни одного рабочего дня!!! Ведь здорово)

	function onClickHandleActivateEditMode() {
		if (Number(props.data.id) === props.profile?.userId) {
			//		console.log(`before`, editmode) // false
			setEditMode(true)
			//		console.log(`after`, editmode) // и здесь false, т.к. useState асинхронный !
		} else {
			alert(`нельзя редактировать не свой статус!`)
		}

	}

	//console.log(`out`, editmode) // и здесь true, т.к. useState асинхронный !

	function onEnterKeyPressDeactivateEditMode(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			onBlurHandleDeactivateEditMode()
		}
	}

	function onBlurHandleDeactivateEditMode() {
		setEditMode(false)
		console.log(`onBlurHandleDeactivateEditMode`)
		props.updateProfileStatusThunkCreator(textForStatus) // только здесь вызываем updateProfileStatusThunkCreator через пропсы
	}


	return (
		<div>
			{!editmode && <div onClick={onClickHandleActivateEditMode}
                               style={{
								   color: "purple",
								   cursor: "pointer"
							   }}>Мой статус:{textForStatus}
            </div>}
			{editmode && <div>{<input value={textForStatus}
									  autoFocus={true} // добавляет курсор в конец строки input
									  onChange={onChangeHandle}
									  onKeyPress={onEnterKeyPressDeactivateEditMode}
									  onBlur={onBlurHandleDeactivateEditMode}/>}
            </div>}
		</div>
	);
};

