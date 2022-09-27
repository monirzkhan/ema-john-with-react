import React from 'react';

const Price = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Cart Summary</h3>
            <p>Selected Item: {cart.length} </p>
            <p>Total Price: ${total}</p>
        </div>
    );
};

export default Price;