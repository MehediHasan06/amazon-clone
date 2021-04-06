import { useEffect, useState } from "react";
import styles from "./Review.module.css";

import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from '../../images/giphy.gif';

// We are using browser's local storage to save the cart product.

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
}

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    //cart
    const savedCart = getDatabaseCart(); //This is a key-value pair object. Where key is the "product-key" and value is the "quantity" of that product in the cart. To get the keys/values, we can use object.keys/values method

    const productKeys = Object.keys(savedCart);
    // const counts = Object.values(savedCart);

    const cardProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key]; //Getting the value of "key" property of savedCart array
      return product;
    });
    // console.log(cardProducts);
    setCart(cardProducts);
  }, []);

  let thankyou;
  if(orderPlaced){
      thankyou = <img src={happyImage} alt=""/>
  }
  return (
    <div className={styles.shopContainer}>
      <div className={styles.productContainer}>
        {cart.map((pd) => (
          <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd} />
        ))}
        { thankyou }
      </div>
      <div className={styles.cartContainer}>
        <Cart cartItems={cart}>
          <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
