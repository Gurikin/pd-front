import React from 'react';
import './css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'

// import './css/style.css'

function App() {
    return (
        <Router>
            {/* <Redirect exact from="/" to="shop" /> */}
            <div className="App">
                <Header />
                <div className='main-container'>
                    <Switch>
                        <Route path='/' exact component={Shop} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
