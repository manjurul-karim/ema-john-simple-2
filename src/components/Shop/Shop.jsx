import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 useEffect(() =>{
  const storedCart = getShoppingCart()
  const savedCart = []
  //  step 1: get id of the addedProduct
  for(const id in storedCart){
    // dtep 2: get product from product state by using id
    const addedProduct = products.find (product => product.id === id)
    if(addedProduct){
      // step3: added quantity
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      // step 4: add the added product to the saved cart
      savedCart.push(addedProduct);
    }
   
  }
  // step : set the cart
  setCart(savedCart);
 },[products])
    const handleAddToCart = (product) => {
      const newCart = [...cart, product]
      setCart(newCart)
      addToDb(product.id)
    };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id}
           product={product} 
          handleAddToCart={handleAddToCart}>

          </Product>
        ))}
      </div>
      <div className="cart-container">
       <Cart cart ={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
