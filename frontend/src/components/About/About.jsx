import about from "./About.module.css";
import aboutImg from "../../images/alaa.png";
import { useTranslation } from "react-i18next";
function About() {
  const[t,i18n]=useTranslation("global");
  return (
    <section id="about" className={about.about}>
      <div className="container">
        <div className={about.flex}>
          <div className={about.left}>
            <img src={aboutImg} alt="about" className={about.image} />
          </div>
          <div className={about.cont}>
            <h1 className={about.title}>{t("About.title")}</h1>
            <p className={about.phargh}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <button className={about.btn}>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
