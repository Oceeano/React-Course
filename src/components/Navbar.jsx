import React from "react";
import cls from './Navbar.module.css';

// let cls = {
//     'nav': ''
//     'item': ''
// }

const Navbar = () => {
    return <nav className={cls.nav}>
        <div className={cls.item}>
            <a href="#S">Profile</a>
        </div>
        <div className={cls.item}>
            <a href="#S">Messages</a>
        </div><div className={cls.item}>
            <a href="#S">News</a>
        </div><div className={cls.item}>
            <a href="#S">Music</a>
        </div>
        <div className={cls.item}>
            <a href="#S">Settings</a>
        </div>
    </nav >
}

export default Navbar;