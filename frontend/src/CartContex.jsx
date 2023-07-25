import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState(0)

    const addToCart = (num) => {
        const currentNum = items
        setItems(num + currentNum)
    }

    const removeFromCart = () => {
        if (items) {
            const newItems = items - 1
            setItems(newItems)
        }
    }

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}

export default CartContext;