import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import heroStyle from "./Hero.module.css";
import car from "../../images/car.png";
import image from "../../images/image.png"

function Hero() {
  const [tranlate] = useTranslation("global");
  return (
    <div className={heroStyle.hero}>
      <div className="container relative">
        <div className={heroStyle.paragh}>
          <div>
            <h1 className={heroStyle.title}>{tranlate("Hero.title")}</h1>
            <p className={heroStyle.paragh2}>{tranlate("Hero.text")}</p>
            <a href="#cards">
              <button className={heroStyle.btn}>
                {tranlate("Hero.button")}
              </button>
            </a>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
