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
        fetch('http://pd.loc/api/v1/getPizzas',
            { mode: 'no-cors'})
            .then(results => {
                return results.json();
            })
            .then(data => {
                let products = data.results.map((product) => {
                    return (
                        <div key={product.id}>
                            <Product />
                        </div>
                    )
                })
                this.setState({ products: products });
                console.log("state", this.state.products)
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