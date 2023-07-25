import Card from "../Card/Card";
import styles from "./Cards.module.css";
import logo from "../../images/mit_logo.png";

function Cards(props) {
  const listItems = props.cards.map((card) => (
    <li>
      <Card card={card}></Card>
    </li>
  ));
  return (
    <div className="container">
      <ul id="cards" className={styles.cards}>
        {listItems}
      </ul>
    </div>
  );
}

export default Cards;
