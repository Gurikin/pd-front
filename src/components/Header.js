import React from 'react';
import Nav from "./Nav";
import Config from "../config";
import './../css/style.css'

function Header() {
    return (
        <header className="header">
            <div className='main-container'>
                <a href='/' className='navbar-brand ml-5 logo'>
                    <img src='/images/logo.png' alt=''/>
                </a>
                <Nav/>
            </div>
        </header>
    );
}

export default Header;