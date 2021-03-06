// import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Inventory</a>
        {/* <Link to={"/shop"}>Shop</Link>
        <Link to={"/review"}>Order Review</Link>
        <Link to={"/inventory"}>Inventory</Link> */}
      </nav>
    </div>
  );
};

export default Header;
