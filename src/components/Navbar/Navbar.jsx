import React from "react";
import s from './Navbar.module.css';

//s = virtual styles object that pointed to special classNames in browsers for every jsx components//
//{`${s.item} ${s.active}`}  - распределение стиля двум классам


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href="#S">Profile</a>
        </div>
        <div className={s.item}>
            <a href="#S">Messages</a>
        </div><div className={s.item}>
            <a href="#S">News</a>
        </div><div className={s.item}>
            <a href="#S">Music</a>
        </div>
        <div className={s.item}>
            <a href="#S">Settings</a>
        </div>
    </nav >
}

export default Navbar;