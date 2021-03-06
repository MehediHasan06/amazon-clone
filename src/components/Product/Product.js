import styles from "./Product.module.css";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = ({ productItem, eventHandler, showAddToCart }) => {
  const { name, price, img, seller, stock, key } = productItem; // Props destructuring
  return (
    <>
      <div className={styles.product}>
        <div>
          <img src={img} alt="" />
          {/** Getting the destructured props value **/}
        </div>
        <div>
          <h4 className={styles.productName}><Link to={"/product/"+key}>{name}</Link></h4>
          <br />
          <p>
            <small>by: {seller}</small>
          </p>
          <p>${price}</p>
          <p>
            <small>Only {stock} left in stock - Order soon</small>
          </p>
          {showAddToCart && <button className={styles.mainButton} onClick={()=> eventHandler(productItem)}> 
          {/** we have to pass a parameter from here to identify which product's button is clicked from shop component's event handler function. we can not pass a parameter, eventHandler(props.product) just like that. Cause, eventHandler() this thing invokes a function whenever we call them. That is why, when we have to pass a parameter from a dynamic object, we have to invoke a array function.
          So, when we click the button, this eventHandler will send the "productItem" as props. **/}
            <IoMdCart /> Add to Cart
          </button>} 
          {/* Conditional Rendering to decide where we want to show the "add to cart" button */}
        </div>
      </div>
    </>
  );
};

export default Product;
