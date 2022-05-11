import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

//s = virtual styles object that pointed to special classNames in browsers for every jsx components//
//{`${s.item} ${s.active}`}  - распределение стиля двум классам


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            {/*className={navData => navData.isActive ? s.active : s.item} - new syntax from new react-dom version*/}
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
        </div><div className={s.item}>
            <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
        </div><div className={s.item}>
            <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </div>
    </nav >
}

export default Navbar;