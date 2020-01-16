import React from 'react';
import ButtonWithGetAction from './ButtonWithGetAction'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            imgSrc: require("../../public/images/products/" + props.imgSrc)
        };
    }

    componentDidMount() {
        // id={this.state.id} 
    }

    render() {
        const sectionStyle = {
            backgroundImage: 'url(' + this.state.imgSrc + ')'
        };
        return (
            <div className='product m-3' style={sectionStyle} id={this.state.id}>
                <div className="title pull-left">
                    {this.state.name}
                </div>
                <ButtonWithGetAction className="add-to-cart pull-right" id={this.state.id} price={this.state.price} />
            </div>
        );
    }
}

export default Product;