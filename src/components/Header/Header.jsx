import React from 'react';
import s from './Header.module.css';

// let cls = {
//     'header': ''
// }
const Header = () => {
    return <header className={s.header}>
        <div className={s.header_background}>
            <img className={s.header__img} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fdiscord-logo-png%2Fdiscord-u2013-logos-brands-logotypes-12.png&f=1&nofb=1' />
        </div>
    </header>
}

export default Header;