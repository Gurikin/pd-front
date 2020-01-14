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
            backgroundImage: 'url('+this.state.imgSrc+')'
        };
        return (            
            <div className='product' id={this.state.id} style={sectionStyle}>
                <div className='navbar'>
                    <h4 className="flex-item">{this.state.name}</h4>
                    <h5 className="flex-item">{this.state.price}$</h5>
                </div>
            </div>
        );
    }
}

export default Product;