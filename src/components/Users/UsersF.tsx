import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";
import Pagination from "./Pagination";


export type UsersPropsTypeF = UsersPropsType & {
	onChangeCurrentPage: (el: number) => void
}
// export const UsersF = (props: UsersPropsTypeF) => {
export const UsersF = (props: UsersPropsTypeF) => { // ??? какой тип сделать здесь


	return (
		<>
			<Pagination {...props}/>
			<User {...props}/>
		</>
	);

}


