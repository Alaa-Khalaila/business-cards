import { useState, useContext } from "react";
import CartContext from "../../CartContex";
import styles from "./CartItem.module.css";
import Button from "../Button/Button";

function CartItem(props) {
  const { cartItems,addToCart } = useContext(CartContext);

  return (
    <div className={styles.cart__item}>
      <div>
        <img
          className={styles.cart__item__img}
          src={props.product.img}
          alt=""
          srcset=""
        />{" "}
      </div>
      <div>1JD</div>

      <div className={styles.btns}>
        <Button classList="red" text="-" onClick={()=>addToCart(-1,props.product.id)}></Button>
        <span className={styles.qunt}>{cartItems[props.product.id]}</span>
        <Button classList="yellow" text="+" onClick={()=>addToCart(1,props.product.id)}></Button>
      </div>

      <div>{cartItems[props.product.id] + "JD"}</div>
    </div>
  );
}

export default CartItem;
