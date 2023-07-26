import About from "../components/About/About";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import { useEffect, useState } from "react";
import home from "./Home.module.css";
import logo from "../images/mit_logo.png";
import { useTranslation } from "react-i18next";
import {cards} from "../products"

function Home() {
  const [active, setActive] = useState("الكل");
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
    setActive(itemData)
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
            <li >
              <button className={active==="الكل"? home.active:''}
                onClick={() => {
                  setData(cards);
                  setActive("الكل")
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
                  className={active===item? home.active:''}
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
