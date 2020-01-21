import React from 'react';
import './css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Axios from "axios";
import Header from './components/Header'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import { Cookies, useCookies, withCookies } from 'react-cookie'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        localStorage.setItem('baseUrl','http://pd.loc/api/v1/');
        if (typeof localStorage.getItem('token') == 'undefined' || localStorage.getItem('token') == null) {
            let token = await Axios(localStorage.getItem('baseUrl') + 'get-token').then(response => { return response.data });
            if (typeof token !== 'undefined') {
                localStorage.setItem('token', token);
            }
            console.log('token is ' + token);
        } else {
            let token = localStorage.getItem('token');
            console.log(token);
        }
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
