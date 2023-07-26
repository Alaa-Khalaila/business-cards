import Button from "../../components/Button/Button";
import styles from "./Cart.module.css";
import { cards} from "../../products"
import { useContext } from "react";
import CartContext from "../../CartContex";
import CartItem from "../../components/CartItem/CartItem";

function Cart() {
    const {cartItems} = useContext(CartContext)

  return (
    <>
      <div className={styles.cart__container + " container"}>
        <div className={styles.cart}>
          <div className={styles.cart__title}>Shopping cart</div>
          <div className={styles.cart__table__titles}>
            <div>Card</div>
            <div>Price</div>
            <div>Qunatity</div>
            <div>Subtotal</div>
          </div>
          <div>
            {cards.map((product)=>{
                if(cartItems[product.id] !==0 ){
                    return <CartItem product={product}></CartItem>
                }
            })}
          </div>
        </div>
        <div>
          <div>Cart totals</div>
          <div>
            <div>Subtotal</div>
            <div>300JD</div>
          </div>
          <div>
            <Button text="Procced to checkout"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
