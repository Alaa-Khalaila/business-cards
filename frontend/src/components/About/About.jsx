import about from "./About.module.css";
import aboutImg from "../../images/alaa.png";
import { useTranslation } from "react-i18next";
function About() {
  const [translate] = useTranslation("global");
  return (
    <section id="about" className={about.about}>
      <div className="container">
        <div className={about.flex}>
          <div className={about.left}>
            <img src={aboutImg} alt="about" className={about.image} />
          </div>
          <div className={about.cont}>
            <h1 className={about.title}>{translate("About.title")}</h1>
            <p className={about.phargh}>{translate("About.text")}</p>
            <button className={about.btn}> {translate("About.button")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
