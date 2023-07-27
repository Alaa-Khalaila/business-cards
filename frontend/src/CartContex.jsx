import { createContext, useState } from "react";
import { cards } from "./products";

const CartContext = createContext();

export function CartProvider(props) {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < cards.length+1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState(getDefaultCart);



  const addToCart = (num,itemId) => {
    const currentNum = items;
    setItems(num + currentNum);
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+num}))
  };

  return (
    <CartContext.Provider value={{ items, addToCart,cartItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
