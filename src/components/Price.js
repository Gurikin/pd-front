import React from 'react';

class ButtonWithGetAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dollarPrice: props.price,
            euroPrice: props.price
        };
    }

    componentDidMount() {
        const euroToDollar = 1.12;
        this.setState({ euroPrice: Number((this.state.dollarPrice * euroToDollar).toFixed(1)) });
    }

    render() {        
        return (
            <span>{this.state.dollarPrice}$/{this.state.euroPrice}€</span>
        );
    }
}

export default ButtonWithGetAction;