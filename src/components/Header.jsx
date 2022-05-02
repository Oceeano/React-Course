import React from 'react';
import cls from './Header.module.css';

// let cls = {
//     'header': ''
// }
const Header = () => {
    return <header className={cls.header}>
        <div>
            <img className='header__img-logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fdiscord-logo-png%2Fdiscord-u2013-logos-brands-logotypes-12.png&f=1&nofb=1' />
        </div>
    </header>
}

export default Header;