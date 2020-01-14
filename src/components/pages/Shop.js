import React from 'react';
import Product from '../Product'
// import './css/style.css'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('http://pd.loc/api/v1/getPizzas')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let products = data.map((product) => {
                    return (
                        <div>
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
            <div className='container'>
                <h1>Shop page</h1>
                <div>
                    {this.state.products}
                </div>
            </div>

        );
    }
}

export default Shop;