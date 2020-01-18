import React from 'react';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: props.cart
        };
    }

    render() {
        return (
            <h1>Cart page</h1>
        );
    }
}

export default Cart;