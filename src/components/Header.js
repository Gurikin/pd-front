import React from 'react';
import Nav from "./Nav";
import './../css/style.css'

function Header() {
    return (
        <header className="header">
            <div className='header-container'>
                <a href='/' className='navbar-brand ml-5 logo'>
                    <img src='/images/menu/logo.png' alt=''/>
                </a>
                <Nav />
            </div>
        </header>
    );
}

export default Header;