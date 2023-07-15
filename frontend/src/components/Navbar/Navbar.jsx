import Logo from "../../Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "./Navbar.module.css";
function Navbar() {
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
    </nav>
  );
}
export default Navbar;
