import Button from "../Button/Button"
import styles from "./Card.module.css"
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../CartContex";

function Card(props) {
    const [counter, setCounter] = useState(0)

    const { addToCart, removeFromCart } = useContext(CartContext)

    const onAddClick = () => {
        const newCounter = counter + 1
        setCounter(newCounter)
        addToCart()
    }

    const onRemoveClick = () => {
        if(counter){
            const newCounter = counter - 1
            setCounter(newCounter)
            removeFromCart()
        }
    }

    return (
        <div className={styles.card}>
            <header className={styles.card__header}>
                <img src={props.img} alt="" className={styles.card__img} />
            </header>
            <main className={styles.card__main}>
                <h4>Business Card</h4>
            </main>
            <footer className={styles.card__footer}>
                <span>1 JD</span>
                <div className={styles.card__footer__counter}>
                <Button onClick={onRemoveClick} classList="red" text="-"></Button>
                    <span>{counter}</span>
                    <Button onClick={onAddClick} classList="yellow" text="+"></Button>
                    
                </div>

            </footer>
        </div>
    )
}

export default Card