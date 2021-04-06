import styles from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;

  const reviewItemStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "200px",
  };

  return (
    <div style={reviewItemStyle}>
      <h4 className={styles.productName}>{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>
        <small>$ {price}</small>
      </p>
      <br />
      <button 
        onClick={() => props.removeProduct(key)} //We are passing key parameter to identify which product is clicked tp be removed. 
        className={styles.mainButton}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
