import Button from "../Button/Button"
import styles from "./Card.module.css"
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../CartContex";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Card(props) {
    const [tranlate] = useTranslation("global");
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
                <img src={props.card.img} alt="" className={styles.card__img} />
            </header>
            <main className={styles.card__main}>
                <h4>{tranlate("Card.title")}</h4>
            </main>
            <footer className={styles.card__footer}>
                <span>1 {tranlate("Card.jd")}</span>
                <div className={styles.card__footer__counter}>
                {/* <Button onClick={onRemoveClick} classList="red" text="-"></Button>
                    <span>{counter}</span>
                    <Button onClick={onAddClick} classList="yellow" text="+"></Button> */}
                    <NavLink to={"card/"+props.card.id}><Button classList="yellow" text={tranlate("Card.Edit-Card")}></Button></NavLink>
                </div>

            </footer>
        </div>
    )
}

export default Card