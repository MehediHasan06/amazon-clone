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
      </nav>
    </div>
  );
};

export default Header;
