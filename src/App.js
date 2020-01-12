import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

// import './css/style.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <a href='#' className='navbar-brand ml-5 logo'>Logo</a>
                <div className='menu'>
                    <nav className='ml-auto'>
                        <ul>
                            <li className='mr-4'><a href='#' className='a'><FontAwesomeIcon icon={faShoppingCart}/>Basket</a></li>
                            <li className='mr-4'><a href='#' className='a'><FontAwesomeIcon icon={faUserAlt}/>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default App;
