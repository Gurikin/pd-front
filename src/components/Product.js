import React from 'react';

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
    }

    render() {
        const sectionStyle = {
            backgroundImage: 'url(' + this.state.imgSrc + ')'
        };
        const baseUrl = 'http://dm.loc/';
        return (
            <div className='product m-3' id={this.state.id} style={sectionStyle}>
                <div className="title pull-left">
                    {this.state.name}
                </div>
                <button className="add-to-cart pull-right" href={baseUrl + "cart/add/" + this.state.id}>
                    {this.state.price}$
                </button>
            </div>
        );
    }
}

export default Product;