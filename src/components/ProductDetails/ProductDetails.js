import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams(); // Getting the selected product id using react router. This "productKey" is the same as the url in app.js. <Route exact path="/product/:productKey">
  const selectedProduct = fakeData.find((pd) => pd.key === productKey); // Finding the product using product id
  console.log(selectedProduct);
  return (
    <div>
      <h3>Product Id: {productKey}</h3>
      <Product showAddToCart={false} productItem={selectedProduct}/>
      {/* Using the "Product" component. Sending the selected product info as props. */}
    </div>
  );
};

export default ProductDetails;
