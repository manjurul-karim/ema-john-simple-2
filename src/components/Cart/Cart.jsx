import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart =props.cart //system-01
    // const {cart} = props
    return (
      <div className='cart'>
        <h4>Oder summary</h4>
        <p>Selected Items:{cart.length}</p>
        <p>Total Price:</p>
        <p>Total Shipping:</p>
        <p>Tax:</p>
        <h6>Grand Total:</h6>
      </div>
    );
};

export default Cart;