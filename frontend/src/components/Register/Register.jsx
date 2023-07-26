import register from "./Register.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Register() {
  const [tranlate, i18n] = useTranslation("global");
  const [isEnglish, setIsEnglish] = useState(true);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (!isEnglish) {
      document.querySelector("html").setAttribute("dir", "rtl");
    } else {
      document.querySelector("html").removeAttribute("dir");
    }
    setIsEnglish(!isEnglish);
  };

  return (
    <section id="contact">
      <div className={register.all}>
        <div className={register.form}>
          <div className={register.contactInfo}>
            <h3 className={register.infoTitle}>{tranlate("Register.title")}</h3>
            <div className={register.inputContainer}>
              <label>{tranlate("Register.phone")}</label>
              <input type="tel" name="phone" className={register.input} />
            </div>
            <div className={register.inputContainer}>
              <label>{tranlate("Register.email")}</label>

              <input type="email" name="email" className={register.input} />
            </div>
            <div className={register.inputContainer}>
              <label>{tranlate("Register.Password")}</label>

              <input
                type="password"
                name="password"
                className={register.input}
                placeholder="Enter your password"
              />
            </div>
            <div className={register.inputContainer}>
              <label>{tranlate("Register.conPassword")}</label>

              <input
                type="password"
                name="password"
                className={register.input}
              />
            </div>

            <input
              type="submit"
              value={tranlate("Register.btn")}
              className={register.contactBtn}
            />
            <p className={register.have}>
              {tranlate("Register.have")}
              <NavLink to="/login">{tranlate("Register.sign")}</NavLink>
            </p>
          </div>
          <div className={register.contactForm}>
            <p className={register.hello}>{tranlate("Register.hello")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Register;
