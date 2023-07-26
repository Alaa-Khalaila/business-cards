import Button from "../Button/Button";
import styles from "./Card.module.css";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../CartContex";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Card(props) {
  const [tranlate] = useTranslation("global");
  const [counter, setCounter] = useState(0);

  const { addToCart } = useContext(CartContext);

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
          <NavLink to={"card/" + props.card.id}>
            <Button
              classList="yellow"
              text={tranlate("Card.Edit_Card")}
            ></Button>
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Card;
