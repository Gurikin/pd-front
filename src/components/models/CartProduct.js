import React from 'react';
import Product from "../Product";

class CartProduct extends React.Component {

    constructor(props) {
        super(props);
        if (props.state.hasOwnProperty('product') && props.state.product.state.id > 0) {
            this.state = props.state;
            console.log('================================');
            console.log(this);
        } else {
            this.state = {
                product: props,
                toppings: [],
                quantity: 0,
                price: 0.0
            };
            this.incrementQuantity();
        }
    }

    incrementQuantity() {
        this.state.quantity++;
        this.state.price = this.state.price + this.state.product.state.price;
    }

    addTopping(topping) {
        let id = topping.id;
        if (!this.state.toppings.findIndex(id)) {
            let toppings = this.state.toppings;
            toppings[id] = topping;
            this.setState({toppings: toppings});
            this.setState({price: this.state.price + topping.price});
            return true;
        }
        return false;
    }

    render() {
        return (
            <h3>Cart product</h3>
        );
    }
}

export default CartProduct;