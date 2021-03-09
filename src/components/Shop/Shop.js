import fakeData from "../../fakeData";
import { useState } from "react";
import styles from "./Shop.module.css";

const Shop = () => {
  const first10Data = fakeData.slice(0, 10); // Getting only the first 10 datas
  const [ products, setProducts ] = useState(first10Data);

  return (
    <>
      <div className={styles.shopContainer}>

        <div className={styles.productContainer}>
          <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
          </ul>
        </div>
        <div className={styles.cartContainer}>
          <h3>This is cart</h3>
        </div>

      </div>
    </>
  );
};

export default Shop;