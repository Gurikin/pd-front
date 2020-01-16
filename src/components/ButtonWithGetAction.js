import React from 'react';
import ReactDOM from 'react-dom'
import Price from './Price';

class ButtonWithGetAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            price: props.price,
            style: props.className,
            cart: null
        };
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
    }

    addToCart(id) {
        const baseUrl = 'http://pd.loc/';        
        fetch(baseUrl + 'api/v1/cart/add/' + id)
            .then(results => {
                return results.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });         
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