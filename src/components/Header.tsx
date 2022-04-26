import React from 'react';
import header_logo from "../photos/1633774787_19-kartinkin-net-p-monro-pop-art-krasivo-20.jpg";
import s from "./Header.module.css"



export const Header = () => {
	return (
		<header className={s.header}>
			<img src={header_logo} alt='photo'/>
		</header>
	);
};


