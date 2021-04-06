import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
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

    const sameProduct = newCart.filter((pd) => pd.key === productItem.key);
    const count = sameProduct.length;
    addToDatabaseCart(productItem.key, count);
  }; //handler should be in the same file as useState

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
          <Cart cartItems={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
