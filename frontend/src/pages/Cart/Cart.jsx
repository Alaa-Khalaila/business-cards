import styles from "./Cart.module.css";
import { cards } from "../../products";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import CartContext from "../../CartContex";
import CartItem from "../../components/CartItem/CartItem";
import cartImg from "../../images/empty-cart.png";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cartItems, items } = useContext(CartContext);
  const [tranlate] = useTranslation("global");

  return (
    <>
      {items > 0 ? (
        <div className={styles.cart__container + " container"}>
          <div className={styles.cart}>
            <div className={styles.cart__title}>
              {tranlate("Cart.titleShop")}
            </div>
            <div className={styles.cart__table__titles}>
              <div>{tranlate("Cart.card")}</div>
              <div>{tranlate("Cart.price")}</div>
              <div>{tranlate("Cart.quantity")}</div>
              <div>{tranlate("Cart.subTotal")}</div>
            </div>
            <div>
              {cards.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem product={product}></CartItem>;
                }
              })}
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.title}>{tranlate("Cart.cartTitle")}</div>
            <div className={styles.price}>
              <div>{tranlate("Cart.subTotal")}</div>
              <div>{items}JD</div>
            </div>
            <div>
              <button className={styles.btn}>{tranlate("Cart.btn")}</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <h4 className={styles.emptyTitle}>عربة التسوق خالية !</h4>
          <img src={cartImg} alt="empty" className={styles.emptyImg} />
          <NavLink to="/">
            <button className={styles.btnEmpty}>تسوق الان</button>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Cart;
