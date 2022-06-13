import React from 'react';
import styles from "./Users.module.css";
import {UsersPropsTypeF} from "./UsersF";

const Pagination = (props:UsersPropsTypeF ) => {
	let {
		totalUsersCount,
		pageSize,
	} = props;

	let pagesCount = Math.ceil(totalUsersCount / pageSize)

	let pageArray = []// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
	for (let i = 1; i <= pagesCount; i++) { //!!! будут лагать, если написать i <= props.totalUsersCount вместо i <= pagesCount т.к. соотношение запросов 19007:191
		//for (let i = 1; i <= 5; i++) { //!!! будут лагать, если написать i <= props.totalUsersCount вместо i <= pagesCount т.к. соотношение запросов 19007:191
		pageArray.push(i)
	}
	console.log('usersF', props.isFollowingInProgress, props.isFetchingButtonFollowUnfollow, props.currentPage)
	// console.log("props.isAuth = ", props.isAuth)
	// if (props.isAuth === false) return <Redirect to={"/login"}/>
	//isAuth: state.auth.isAuth - не нужно пробрасывать в UsersF
	// при использовании withAuthRedirect
	return (
		<>
			{pageArray.map(el => el > 3845 ? (<span key={el}
													className={props.currentPage === el ? styles.selectedPage: ''}
													onClick={() => props.onChangeCurrentPage(el)}
													style={{padding: 10, cursor: "pointer"}}>
				{el}
			</span>
					)
					: null
			)}
		</>
	);
};

export default Pagination;
