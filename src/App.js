import React from 'react';
import './css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import { Cookies, useCookies, withCookies } from 'react-cookie'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
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
}

export default withCookies(App);
