import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    } , [])


    return (
        <div className='row ms-2'>
            <div className='product-container col-md-9 row'>
                {
                    product.map(product => <Product 
                    key={product.product}
                    product={product}>

                    </Product> )
                }
            </div>
            <di className='col-md-3'> 
                <h1>This is cart</h1>
            </di>
        </div>
    );
};

export default Shop;