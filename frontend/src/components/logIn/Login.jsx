import login from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Login() {
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
      <div className={login.all}>
        <div className={login.form}>
          <div className={login.contactInfo}>
            <h3 className={login.infoTitle}>{tranlate("Login.title")}</h3>
            <div className={login.inputContainer}>
              <label>{tranlate("Login.phone")}</label>
              <input type="tel" name="phone" className={login.input} />
            </div>
            <div className={login.inputContainer}>
              <label>{tranlate("Login.Password")}</label>

              <input
                type="password"
                name="password"
                className={login.input}
                placeholder="Enter your password"
              />
            </div>

            <input
              type="submit"
              value={tranlate("Login.btn")}
              className={login.contactBtn}
            />
            <p className={login.have}>
              {tranlate("Login.have")}
              <NavLink to="/register">{tranlate("Login.sign")}</NavLink>
            </p>
          </div>
          <div className={login.contactForm}>
            <p className={login.hello}>{tranlate("Login.hello")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
