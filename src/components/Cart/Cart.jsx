import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart , handleClearCut,children }) => {
  // const cart =props.cart //system-01
  // const {cart} = props
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0 ){
    //   product.quantity = 1
    // }
    // product.quantity = product.quantity || 1
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Oder summary</h4>
      <hr />
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <hr />
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button onClick={handleClearCut} className="btn-clear-cut">
        <span>Clear cart</span>
        <FontAwesomeIcon className="delete-icon-cart" icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
