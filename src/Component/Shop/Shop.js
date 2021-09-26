import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    } , [])

    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='row ms-2'>
            <div className='product-container col-md-9 row'>
                {
                    product.map(product => <Product 
                    key={product.product}
                    product={product}
                    handleAddtoCart={handleAddtoCart}
                    >

                    </Product> )
                }
            </div>
            <div className='col-md-3'> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;