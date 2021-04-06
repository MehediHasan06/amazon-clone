import fakeData from "../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useState, useEffect } from "react";
import styles from "./Shop.module.css";
import { Link } from 'react-router-dom';


import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10Data = fakeData.slice(0, 10); // Getting only the first 10 datas
  const [products] = useState(first10Data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  // Handle the product quantity
  const handleAdd = (productItem) => {
    const toBeAddedKey = productItem.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      productItem.quantity = 1;
      newCart = [...cart, productItem];
    }
    setCart(newCart);
    addToDatabaseCart(productItem.key, count);
  };

  return (
    <>
      {/* This Shop Component is the parent of Product and Cart component */}
      <div className={styles.shopContainer}>
        {/*product Container*/}
        <div className={styles.productContainer}>
          {products.map((item) => (
            <Product
              key={item.key}
              showAddToCart={true}
              productItem={item}
              eventHandler={handleAdd}
            /> // Sending the product values & event handler as props
          ))}
        </div>

        {/*cart Container*/}
        <div className={styles.cartContainer}>
          <Cart cartItems={cart}>
            {/* This will automatically pass the props as children */}
            <Link to="/review"> 
              <button className="main-button">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
