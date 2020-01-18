import React from 'react';
import ReactDOM from 'react-dom'
import Price from './Price';
import Cart from "./models/Cart";
import Product from "./Product";

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

    addToCart(id) {
        let oldCart = JSON.parse(localStorage.getItem('cart'));
        // console.log('cart before adding ' + localStorage.getItem('cart'));
        let cart = new Cart(oldCart);
        let product = new Product(this.state.product.props);
        cart.addProduct(product);
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        // const baseUrl = 'http://pd.loc/';
        // fetch(baseUrl + 'api/v1/cart/add/' + id, {})
        //     .then(results => {
        //         console.log(results.headers.keys)
        //         return results.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
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