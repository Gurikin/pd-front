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
                        <a href='./#' className='a'>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </a>
                    </li>
                    <li className='mr-4'>
                        <a href='./#' className='a'>
                            <FontAwesomeIcon icon={faUserAlt}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;