import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Navbar.module.css";
import CartContext from "../../CartContex";
import { useContext } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/terms") {
      setActive(true);
    }
  }, []);

  const {items} = useContext(CartContext)

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
            <a href="#about">About</a>
          </li>

          <li>
            <NavLink to="terms" href="">
              Terms & Conditions
            </NavLink>
          </li>

          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </div>
      <div className={Nav.sign}>
        <a href="" className={Nav.icon}>
          <span className={Nav.cart}>{items}</span>
          <i class="fa fa-cart-plus"></i>
        </a>
        <button className={Nav.btn}>Sign in</button>
      </div>
    </nav>
  );
}
export default Navbar;
