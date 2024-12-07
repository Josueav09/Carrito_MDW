import React from "react";
import Cart from "../Cart/cartPage";
import Products from "../Products/productsPage";
import styles from './styles.module.css'

const holaMundo = () => {
  return (
    <div className={styles.home}>
      <Cart />
      <Products />
    </div>
  );
};

export default holaMundo;