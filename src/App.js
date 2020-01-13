import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header.js'

// import './css/style.css'

function App() {
    return (
        <Router>
            <div className="App">
                <div className='main-container'>
                    <Header />
                    <Route path='/shop' component={Shop} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/login' component={Login} />
                </div>
            </div>
        </Router>
    );
}

export default App;
