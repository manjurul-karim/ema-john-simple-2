import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //  step 1: get id of the addedProduct
    for (const id in storedCart) {
      // dtep 2: get product from product state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step3: added quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
    }
    // step : set the cart
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (product) => {
    let newCart = [];
    // const newCart = [...cart, product]
    //  if product dosen't exist in the cart, then set quantity = 1
    //  if exist update quantity by 1

    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCut = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCut={handleClearCut}>
          <Link to='./orders'><button className="btn-proceed">Review Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
