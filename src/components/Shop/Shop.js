import fakeData from "../../fakeData";
import { useState } from "react";
import styles from "./Shop.module.css";

import Product from "../Product/Product";

const Shop = () => {
  const first10Data = fakeData.slice(0, 10); // Getting only the first 10 datas
  const [products, setProducts] = useState(first10Data);

  const handleAdd = (productItem) => {
    console.log("product added", productItem);
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
          <h3>This is cart</h3>
        </div>
      </div>
    </>
  );
};

export default Shop;
