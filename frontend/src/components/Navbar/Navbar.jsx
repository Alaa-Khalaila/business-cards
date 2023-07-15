import Logo from "../../Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "./Navbar.module.css";
import CartContext from "../../CartContex";
import { useContext } from "react";

function Navbar() {

  const {items} = useContext(CartContext)
  console.log(items);

  return (
    <nav className={Nav.navbar}>
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
