import React, {useState, useEffect} from 'react';
import Product from '../Product'
import {Cookies} from 'react-cookie'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        // this.cookies = new Cookies();
        // console.log(this.cookies.getAll());

        await fetch(localStorage.getItem('baseUrl') + 'getPizzas', {
            method: "GET",
            headers: {
                // 'Accept': 'application/json'
                'X-CSRF-TOKEN': localStorage.getItem('token')
            },
        })
            .then(results => {
                return results.json();
            })
            .then(data => {
                let products = data.map((product) => {
                    return (
                        <div key={product.id}>
                            <Product id={product.id} name={product.name} price={product.price}
                                     imgSrc={product.image_url}/>
                        </div>
                    )
                })
                this.setState({products: products});
            })
            .catch(error => {
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