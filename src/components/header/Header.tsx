import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li><a className={s.navLink} href="#">Home</a></li>
                    <li><a className={s.navLink} href="#skills">Skills</a></li>
                    <li><a className={s.navLink} href="#projects">Projects</a></li>
                    <li><a className={s.navLink}href="#contacts">Contacts</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;