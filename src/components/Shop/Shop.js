import fakeData from "../../fakeData";
import { useState } from "react";
import styles from "./Shop.module.css";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10Data = fakeData.slice(0, 10); // Getting only the first 10 datas
  const [products, setProducts] = useState(first10Data);
  const [cart, setCart] = useState([]);

  const handleAdd = (productItem) => {
    const newCart = [...cart, productItem];
    setCart(newCart);
  }; //handler should be in the same file as useState

  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.productContainer}>
          {products.map((item) => (
            <Product productItem={item} eventHandler={handleAdd} /> // Sending the product values & event handler as props
          ))}
        </div>

        <div className={styles.cartContainer}>
          <Cart cartItems = {cart}>
            
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
