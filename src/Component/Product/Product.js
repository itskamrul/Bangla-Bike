import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, image, cc, mileage, launchedBy } = props.product;
    return (
        <div className='col-md-4'>
            <div className="card card-container">
            <img src={image} className="card-img-top" alt=""/>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <small>launched By: {launchedBy}</small>
            <p>CC: {cc}</p>
            <p>mileage: {mileage}</p>
            <p>Price: {price}</p>
            </div>
             
            <button href="#" 
            onClick={() => props.handleAddtoCart(props.product)}
            className="btn btn-dark"> <p> <i className="fas fa-cart-plus"></i> Add to cart</p> </button>
            </div>
            
        </div>
    );
};

export default Product;