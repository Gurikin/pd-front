import React, { useState, useEffect} from 'react';
import Product from '../Product'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };        
    }

    componentDidMount() {
        fetch('http://pd.loc/api/v1/getPizzas')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let products = data.map((product) => {
                    return (
                        <div key={product.id}>
                            <Product id={product.id} name={product.name} price={product.price} imgSrc={product.image_url}/>
                        </div>                        
                    )
                })
                this.setState({ products: products });
                console.log("state", this.state.products);
                // console.log("data", data);
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='shop-container'>
                {this.state.products}
            </div>

        );
    }
}

export default Shop;