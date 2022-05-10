import React from 'react'
import {NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <>
                    {/*<a href={'/profile'} className={s.item}>*/}
                    {/*    Profile*/}
                    {/*</a>*/}
                </>
                <NavLink
                    to={'/profile'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    Profile
                </NavLink>
            </div>
            <div>
                <>
                    {/*<a href={'/dialogs'} className={`${s.item} ${s.active}`}>*/}
                    {/*    Messages*/}
                    {/*</a>*/}
                </>
                <NavLink
                    to={'/dialogs'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={'/news'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    News
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={'/music'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink
                    to={'/settings'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    Settings
                </NavLink>
            </div>

            <div>
                <NavLink
                    to={'/users'}
                    className={s.item}
                    activeClassName={`${s.item} ${s.active}`}
                >
                    Users
                </NavLink>
            </div>



        </nav>
    )
}
