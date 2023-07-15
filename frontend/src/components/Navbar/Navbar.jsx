import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Navbar.module.css";
import menu from "../../images/menu.png";
import cancel from "../../images/cancel.png";
import CartContext from "../../CartContex";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png"

function Navbar() {
  const [tranlate, i18n] = useTranslation("global");
  const [active, setActive] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const [isEnglish,setIsEnglish] = useState(false)
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
    setIsEnglish(!isEnglish)
  };

  return (
    <>
      <div>
        <nav
          className={`${Nav.navbar} ${active ? Nav.active : ""}`}
          style={obj}
        >
          <img className={Nav.logo} src={logo} alt="" />
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
      {!isEnglish? <i onClick={() => changeLanguage("ar")} class="fa fa-globe"></i>:""}
        {isEnglish? <i onClick={() => changeLanguage("en")} class="fa fa-globe"></i>:""}
        <a href="" className={Nav.icon}>
          {items?<span className={Nav.cart}>{items}</span>:""}
          <i class="fa fa-cart-plus"></i>
        </a>

        <button className={Nav.btn}>Sign in</button>

        
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
