import React from 'react';

const Price = (props) => {
    const { cart } = props;
    let total = 0;
    let tax = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        tax = parseFloat((total * 0.1).toFixed(2));
        shipping = shipping + product.shipping;
      
    }
    const grandTotal = parseFloat(total + tax + shipping).toFixed(2);
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Cart Summary</h3>
            <p>Selected Item: {cart.length} </p>
            <p>Total Price: ${total}</p>
            <p>Tax: ${tax}</p>
            <p>Shipping Cost: ${shipping}</p>

            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Price;