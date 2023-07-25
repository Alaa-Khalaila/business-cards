import About from "../components/About/About";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import card1 from "../images/1.png";
import card2 from "../images/2.png";
import card3 from "../images/3.png";
import card4 from "../images/4.png";
import card5 from "../images/5.png";
import card6 from "../images/6.png";
import card7 from "../images/7.jpeg";
import card8 from "../images/8.jpeg";
import card9 from "../images/9.jpeg";
import { useEffect, useState } from "react";
import home from "./Home.module.css";
import logo from "../images/mit_logo.png";
import { useTranslation } from "react-i18next";

function Home() {
  const cards = [
    { id: 1, img: card7, category: "اعلام" },
    { id: 2, img: card2, category: "اعمال" },
    { id: 3, img: card3, category: "اعلام" },
    { id: 4, img: card4, category: "حرف" },
    { id: 5, img: card6, category: "اعلام" },
    { id: 6, img: card9, category: "اعمال" },
    { id: 7, img: card1, category: "اعمال" },
    { id: 8, img: card8, category: "حرف" },
    { id: 9, img: card5, category: "اعلام" },
  ];
  const [active, setActive] = useState();
  const [tranlate] = useTranslation("global");
  const [data, setData] = useState(cards);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(data);
    setCollection([...new Set(cards.map((item) => item.category))]);
  }, []);

  const FilterItems = (itemData) => {
    const filterData = cards.filter((item) => item.category == itemData);
    setData(filterData);
  };

  return (
    <>
      <Hero />
      <div>
        <div>
          <div className={home.conditions}>
            <img src={logo} alt="" />
            <div> {tranlate("Cards.conditions")}</div>
          </div>
          <ul className={home.filterItem}>
            <li>
              <button
                onClick={() => {
                  setData(cards);
                }}
              >
                الكل
              </button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    FilterItems(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Cards cards={data}></Cards>

        <div></div>
      </div>
      <About></About>
      <Contact></Contact>
    </>
  );
}
export default Home;
