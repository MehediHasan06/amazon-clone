import fakeData from "../../fakeData";
import { useState } from "react";
import styles from "./Shop.module.css";

import Product from "../Product/Product";

const Shop = () => {
  const first10Data = fakeData.slice(0, 10); // Getting only the first 10 datas
  const [products, setProducts] = useState(first10Data);

  return (
    <>
      <div className={styles.shopContainer}>

        <div className={styles.productContainer}>
            {products.map((item) => (
              <Product productItem={item} /> // Sending the values as props
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
