import React from 'react';
import ReactDOM from 'react-dom'
import Price from './Price';
import Cart from "./models/Cart";
import Product from "./Product";
import Axios from 'axios'

class ButtonWithGetAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.product.props.id,
            price: props.product.props.price,
            product: props.product,
            style: props.className
        };
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.setState({
            id: this.state.product.props.id,
            price: this.state.product.props.price
        });
    }

    async addToCart(id) {
        // Axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'; //.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        let oldCart = JSON.parse(localStorage.getItem('cart'));
        // console.log('cart before adding ' + localStorage.getItem('cart'));
        let cart = new Cart(oldCart);
        let product = new Product(this.state.product.props);
        cart.addProduct(product);
        console.log(cart);
        const baseUrl = 'http://pd.loc/';
        // let response = await Axios.post(baseUrl + 'api/v1/cart/add/' + id,JSON.stringify(cart));
        let token = (await Axios.get(baseUrl)).data;

        await fetch(baseUrl + 'api/v1/cart/add/' + id,
            {
                method: "post",
                headers: {
                    // 'Accept': 'application/json, text/plain, */*',
                    // 'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    'X-Auth-Token': token
                    // 'XSRF_TOKEN': csrf_token
                    // 'csrf_token': 'fake_token'
                },
                // credentials:"include",
                body: JSON.stringify(cart)
                , mode: 'cors'
            })
        .then(results => {
            console.log(results)
            return results.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
        ;
        // localStorage.setItem('cart', JSON.stringify(cart));
    }

    render() {
        return (
            <button onClick={() => this.addToCart(this.state.id)} className={this.state.style}>
                <Price price={this.state.price}/>
            </button>
        );
    }
}

export default ButtonWithGetAction;