import styles from "./Product.module.css";

const Product = ({ productItem }) => {
  const { name, price, img, seller, stock } = productItem; //
  return (
    <>
      <div className={styles.product}>
        <div>
          <img src={img} alt="" />
          {/** Getting the destructured props value **/}
        </div>
        <div>
          <h4 className={styles.productName}>{name}</h4>
          <br />
          <p>
            <small>by: {seller}</small>
          </p>
          <p>${price}</p>
          <p>
            <small>Only {stock} left in stock - Order soon</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
