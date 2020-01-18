import React from 'react';
import CartProduct from "./CartProduct";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        if (props !== null) {
            let oldCart = props.state;
            this.state = {
                products: oldCart.products,
                totalQuantity: oldCart.totalQuantity,
                totalPrice: oldCart.totalPrice
            }
        } else {
            this.state = {
                products: [],
                totalQuantity: 0,
                totalPrice: 0.0
            }
        }
    }

    addProduct(product) {
        let id = product.props.id;
        console.log('has product is ' + this.hasProduct(id));
        if (this.hasProduct(id)) {
            let index = this.findProductIndex(id);
            let cartProduct = new CartProduct(this.state.products[index]);
            cartProduct.incrementQuantity();
            this.state.products[index] = cartProduct;
            // this.state.products[index].incrementQuantity();
            // console.log(this.state.products[index]);
        } else {
            let index = this.findProductIndex(id);
            let cartProduct = new CartProduct(product);
            if (index !== -1) {
                this.state.products[index] = cartProduct;
            } else {
                this.state.products.push(cartProduct)
            }
        }
        this.state.totalQuantity++;
        this.state.totalPrice = this.state.totalPrice + product.props.price;
    }

    addTopping(topping) {
        let id = topping.props.id;
        if (this.state.products[id] !== null) {
            let added = this.products[id].addTopping(topping);
            if (added) {
                this.state.totalPrice = this.state.totalPrice + topping.props.price;
                this.state.totalQuantity++;
            }
        }
    }

    hasProduct(id) {
        let product = this.state.products.find(function (product) {
            if (product.state.product.state.id === id) {
                return true;
            }
        });
        if (product) {
            return true;
        }
        return false;
    }

    findProductIndex(id) {
        let index = this.state.products.findIndex(function (product) {
            if (product.state.product.state.id === id) {
                return true;
            }
        });
        if (index !== null) {
            return index;
        }
    }
}

export default Cart;