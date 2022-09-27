import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    
    return (
        <div className='product'> 
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p><b>Price: ${price}</b></p>
                <p>Seller: { seller}</p>
                <p>Ratings:{ ratings}</p>
            </div>
            <div className=''>
                <button className='btn-cart' onClick={() => props.addToCart(props.product)}
                >Add to Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
                
            </div>
        </div>
    );
};

export default Product;