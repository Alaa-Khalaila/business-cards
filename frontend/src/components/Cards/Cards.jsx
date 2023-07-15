import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards(props){

    const listItems = props.cards.map((card) =>
    <li>
      <Card title={card.title} description={card.description} img={card.img}></Card>
    </li>
  );
    return(
        <ul id="cards" className={styles.cards + " container"}>
            {listItems}
        </ul>
    )
}

export default Cards;