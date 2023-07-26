import { useContext } from "react";
import CartContext from "../../CartContex";
import styles from "./CartItem.module.css";


function CartItem(props) {
    const {cartItems} = useContext(CartContext)
  return (
    <div className={styles.cart__item}>
      <div><img className={styles.cart__item__img} src={props.product.img} alt="" srcset="" /> </div>
      <div>1JD</div>
      <div>{cartItems[props.product.id]}</div>
      <div>{cartItems[props.product.id]+"JD"}</div>
    </div>
  );
}

export default CartItem;
