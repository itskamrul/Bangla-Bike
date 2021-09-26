import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let ProductNameList = [];
    for (const product of cart){
        total = total + product.price;
        ProductNameList.push(product.name);
    };

    const shipping = 1000;
    const tax = total * 0.20;
    const grandTotal = total + shipping + tax;

    return (
        <div className='order-summery'>
            <div className='calculation-container'>
            <h2>Order Summery</h2>
            <div className='total-calculation'>
            <p>Items ordered: {cart.length}</p>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
            </div>
            </div>
            <div className='selected-bike'>
                <h4>Selected Bike</h4>
                <ul>
                    {
                        ProductNameList.map(name => <li>{name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;