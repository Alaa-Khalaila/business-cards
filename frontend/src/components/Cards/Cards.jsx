import Card from "../Card/Card";
import styles from "./Cards.module.css"
import logo from "../../images/mit_logo.png"
import { useTranslation } from "react-i18next";

function Cards(props){

  const [tranlate] = useTranslation("global");
    const listItems = props.cards.map((card) =>
    <li>
      <Card title={card.title} description={card.description} img={card.img}></Card>
    </li>
  );
    return(
      <div className="container">
        <div className={styles.conditions}>
          <img src={logo} alt="" />
          <div > {tranlate("Cards.conditions")}</div>

        </div>
              <ul id="cards" className={styles.cards}>
            {listItems}
        </ul>
        </div>

    )
}

export default Cards;