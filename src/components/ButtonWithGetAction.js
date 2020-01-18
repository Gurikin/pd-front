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
        let oldCart = JSON.parse(localStorage.getItem('cart'));
        let cart = new Cart(oldCart);
        let product = new Product(this.state.product.props);
        cart.addProduct(product);
        const baseUrl = 'http://pd.loc/';
        let token = (await Axios.get(baseUrl)).data;
        console.log(token);

        let p = Axios.post(baseUrl + 'api/v1/cart/add/' + id, JSON.stringify(cart), {headers: {"X-AUTH-TOKEN": token}});
        console.log(p);


        // await fetch(baseUrl + 'api/v1/cart/add/' + id,
        //     {
        //         method: "post",
        //         headers: {
        //             "X-AUTH-TOKEN": token
        //         },
        //         body: JSON.stringify(cart),
        //     })
        //     .then(function(data) {console.log(data)})
        //     .catch(error => {
        //         console.log(error);
        //     });
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
