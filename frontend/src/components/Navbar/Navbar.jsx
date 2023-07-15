import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Navbar.module.css";
import menu from "../../images/menu.png";
import cancel from "../../images/cancel.png";
import CartContext from "../../CartContex";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [tranlate, i18n] = useTranslation("global");
  const [active, setActive] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  let obj = toggleNav ? { display: "flex" } : {};
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
    <>
      <div>
        <nav
          className={`${Nav.navbar} ${active ? Nav.active : ""}`}
          style={obj}
        >
          <div className={Nav.left}> {tranlate("Nav.logo")}</div>
          <div className="left">
            <ul className={Nav.list}>
              <li>
                <NavLink to="/" className={Nav.home} href="">
                {tranlate("Nav.Home")}
                </NavLink>
              </li>


          <li>
            <a href="#about">{tranlate("Nav.about")}</a>
          </li>


              <li>
                <NavLink to="terms" href="">
                {tranlate("Nav.Terms & Conditions")}
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
      </div>
      {!toggleNav && (
        <img
          className={Nav.menu}
          src={menu}
          alt="menu"
          onClick={() => setToggleNav(true)}
        />
      )}
      {toggleNav && (
        <img
          className={Nav.cancel}
          src={cancel}
          alt="cancel"
          onClick={() => setToggleNav(false)}
        />
      )}
    </>
  );
}
export default Navbar;
