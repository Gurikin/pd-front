import React, { useState, useEffect } from 'react';
import Product from '../Product'
import { Cookies } from 'react-cookie'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        // this.cookies = new Cookies();
        // console.log(this.cookies.getAll());

        fetch('http://pd.loc/api/v1/getPizzas', { method: "GET", credentials: 'same-origin'})//credentials: "include",mode: "no-cors"
            .then(results => {
                // cookies.set(results.json().cookies)
                // console.log(token);
                // let [cookies, setCookie, removeCookie] = useCookies(['XSRF-TOKEN']);
                // let token = cookies.get('XSRF-TOKEN');
                // console.log(token);
                // console.log(results);                
                // console.log(results.headers['XSRF-TOKEN']);//'XSRF-TOKEN'                
                //     console.log(results.headers['Authorization']);
                return results.json();
            })
            .then(data => {
                let products = data.map((product) => {
                    return (
                        <div key={product.id}>
                            <Product id={product.id} name={product.name} price={product.price} imgSrc={product.image_url} />
                        </div>
                    )
                })
                this.setState({ products: products });
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