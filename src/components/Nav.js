import React from 'react';
import './../css/style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faUserAlt} from "@fortawesome/free-solid-svg-icons";

function Nav() {
    return (
        <div className='menu'>
            <nav className='ml-auto'>
                <ul>
                    <li className='mr-4'>
                        <a href='./cart' className='a'>
                            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>cart
                        </a>
                    </li>
                    <li className='mr-4'>
                        <a href='./login' className='a'>
                            <FontAwesomeIcon icon={faUserAlt}  size="2x"/>login
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;