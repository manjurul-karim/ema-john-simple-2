import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { img, name, price, seller, quantity, ratings,id } = product;

  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <h2 className="product-title">{name}</h2>
        <p >Price: <span className="orange-text">${price}</span></p>
        <p>Order Quantity: <span className="orange-text">{quantity}</span></p>
        
      </div>
      <button onClick={() =>handleRemoveFromCart(id)} className="delete-btn"><FontAwesomeIcon className="delete-icon" icon={faTrashAlt} /></button>
    </div>
  );
};

export default ReviewItem;
