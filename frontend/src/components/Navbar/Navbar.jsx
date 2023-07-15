import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Navbar.module.css";
import CartContext from "../../CartContex";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [tranlate, i18n] = useTranslation("global");
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/terms") {
      setActive(true);
    }
  }, []);

  const { items } = useContext(CartContext);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`${Nav.navbar} ${active ? Nav.active : ""}`}>
      <div className={Nav.left}>Logo</div>
      <div className="left">
        <ul className={Nav.list}>
          <li>
            <NavLink to="/" className={Nav.home} href="">
              Home
            </NavLink>
          </li>

          <li>
            <a href="#about">{tranlate("Nav.about")}</a>
          </li>

          <li>
            <NavLink to="terms" href="">
              Terms & Conditions
            </NavLink>
          </li>

          <li>
            <a href="#contact">{tranlate("Nav.contact")}</a>
          </li>
        </ul>
      </div>
      <div className={Nav.sign}>
        <a href="" className={Nav.icon}>
          <span className={Nav.cart}>{items}</span>
          <i class="fa fa-cart-plus"></i>
        </a>
     
        <button className={Nav.btn}>Sign in</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("ar")}>ar</button>

      </div>
    </nav>
  );
}
export default Navbar;
